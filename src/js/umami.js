import { analyticsConfig, consentStorageKey, umamiEvents } from '../seo/analytics-config.js';

const { umami: umamiConfig } = analyticsConfig;
let loadPromise = null;
const eventQueue = [];

function getStoredConsent() {
  try {
    return localStorage.getItem(consentStorageKey);
  } catch {
    return null;
  }
}

function isDebugPage() {
  return window.location.pathname.includes('debug');
}

function flushEventQueue() {
  if (typeof window.umami?.track !== 'function') {
    return;
  }

  while (eventQueue.length) {
    const [name, data] = eventQueue.shift();
    window.umami.track(name, data);
  }
}

function waitForUmami(timeoutMs = 5000) {
  return new Promise((resolve) => {
    if (typeof window.umami?.track === 'function') {
      resolve(true);
      return;
    }

    const started = Date.now();
    const timer = window.setInterval(() => {
      if (typeof window.umami?.track === 'function') {
        window.clearInterval(timer);
        resolve(true);
      } else if (Date.now() - started >= timeoutMs) {
        window.clearInterval(timer);
        resolve(false);
      }
    }, 50);
  });
}

export function loadUmami() {
  if (isDebugPage() || !umamiConfig.enabled) {
    return Promise.resolve(false);
  }

  if (typeof window.umami?.track === 'function') {
    return Promise.resolve(true);
  }

  if (document.querySelector(`script[data-website-id="${umamiConfig.websiteId}"]`)) {
    return waitForUmami();
  }

  if (!loadPromise) {
    loadPromise = new Promise((resolve) => {
      const script = document.createElement('script');
      script.defer = true;
      script.src = umamiConfig.scriptUrl;
      script.setAttribute('data-website-id', umamiConfig.websiteId);
      script.setAttribute('data-do-not-track', 'true');
      script.setAttribute('data-exclude-hash', 'true');
      script.setAttribute('data-exclude-search', 'true');
      script.setAttribute('data-performance', 'true');
      script.setAttribute('data-domains', umamiConfig.domains.join(','));

      script.onload = async () => {
        await waitForUmami();
        flushEventQueue();
        resolve(typeof window.umami?.track === 'function');
      };

      script.onerror = () => {
        loadPromise = null;
        resolve(false);
      };

      document.head.appendChild(script);
    });
  }

  return loadPromise;
}

export function initUmamiFromConsent() {
  if (getStoredConsent() !== 'granted') {
    return;
  }

  loadUmami();
}

export function trackEvent(name, data) {
  if (isDebugPage() || !umamiConfig.enabled || getStoredConsent() !== 'granted') {
    return;
  }

  const payload = data && Object.keys(data).length ? data : undefined;

  if (typeof window.umami?.track === 'function') {
    window.umami.track(name, payload);
    return;
  }

  eventQueue.push([name, payload]);
  loadUmami();
}

export function trackOutboundClick(url, label, source = 'unknown') {
  trackEvent(umamiEvents.outboundClick, {
    url,
    label: label?.slice(0, 120) ?? url,
    source,
  });
}

export function trackFaqOpen(section, question) {
  trackEvent(umamiEvents.faqOpen, {
    section,
    question: question?.slice(0, 120),
    path: window.location.pathname,
  });
}

export function trackContactClick(type) {
  trackEvent(umamiEvents.contactClick, { type, path: window.location.pathname });
}

export function trackConsentChoice(choice) {
  if (choice !== 'granted') {
    return;
  }

  trackEvent(umamiEvents.cookieConsent, { choice: 'granted' });
}
