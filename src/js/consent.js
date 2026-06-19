import { consentStorageKey } from '../seo/analytics-config.js';
import { loadUmami, trackConsentChoice } from './umami.js';

const CONSENT_DENIED = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
};

const CONSENT_GRANTED = {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
};

export function pushConsentUpdate(consent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(['consent', 'update', consent]);
}

export function getStoredConsent() {
  try {
    return localStorage.getItem(consentStorageKey);
  } catch {
    return null;
  }
}

export function saveConsent(value) {
  try {
    localStorage.setItem(consentStorageKey, value);
  } catch {
    // ignore private browsing
  }
}

export function applyConsentChoice(choice) {
  if (choice === 'granted') {
    pushConsentUpdate(CONSENT_GRANTED);
    saveConsent('granted');
    loadUmami().then(() => trackConsentChoice('granted'));
  } else {
    pushConsentUpdate(CONSENT_DENIED);
    saveConsent('denied');
  }
}

export function hasConsentChoice() {
  const stored = getStoredConsent();
  return stored === 'granted' || stored === 'denied';
}
