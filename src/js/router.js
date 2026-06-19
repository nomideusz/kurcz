import { applyRouteMeta } from '../seo/meta.js';
import { getClientRoutePath, normalizeRoutePath } from './route-path.js';
import {
  getAppShell,
  getRouteByPath,
  hashToPath,
  isStandaloneRoute,
  isTopicRoute,
} from '../seo/routes.js';

function normalizePath(pathname) {
  return normalizeRoutePath(pathname);
}

function scrollToSection(sectionId, smooth = false) {
  const scroll = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' });
    }
  };

  scroll();
  window.addEventListener('app-loaded', scroll, { once: true });
  requestAnimationFrame(() => requestAnimationFrame(scroll));
}

function redirectLegacyHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash || !hashToPath[hash]) {
    return false;
  }

  const target = hashToPath[hash];
  window.history.replaceState(null, '', target);
  return true;
}

function resolveInitialPath() {
  redirectLegacyHash();
  return getClientRoutePath();
}

function dispatchRouteChanged(route) {
  window.dispatchEvent(new CustomEvent('route-changed', { detail: route }));
}

function applyRouteChange(route, { smoothScroll = false } = {}) {
  window.__KURCZ_CURRENT_ROUTE__ = route;
  applyRouteMeta(route);

  if (!isStandaloneRoute(route) && route.sectionId !== 'home') {
    scrollToSection(route.sectionId, smoothScroll);
  } else if (route.sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: smoothScroll ? 'smooth' : 'instant' });
  } else if (isStandaloneRoute(route)) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  dispatchRouteChanged(route);
}

export function navigateToPath(path, { replace = false, smoothScroll = true } = {}) {
  const normalized = normalizePath(path);
  const targetRoute = getRouteByPath(normalized);
  const currentRoute = getCurrentRoute();

  if (getAppShell(targetRoute) !== getAppShell(currentRoute)) {
    window.location.assign(path);
    return;
  }

  if (!isTopicRoute(targetRoute)) {
    window.location.assign(path);
    return;
  }

  if (replace) {
    window.history.replaceState(null, '', path);
  } else {
    window.history.pushState(null, '', path);
  }

  applyRouteChange(targetRoute, { smoothScroll });
}

function handleInternalLinkClick(event) {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const anchor = event.target.closest('a[href]');
  if (!anchor || anchor.target === '_blank') return;

  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return;
  }

  let url;
  try {
    url = new URL(anchor.href, window.location.origin);
  } catch {
    return;
  }

  if (url.origin !== window.location.origin) return;

  const currentRoute = getCurrentRoute();
  if (!isTopicRoute(currentRoute)) return;

  const path = normalizePath(url.pathname);
  const targetRoute = getRouteByPath(path);
  if (!isTopicRoute(targetRoute)) return;

  event.preventDefault();

  if (path === normalizePath(window.location.pathname)) {
    if (targetRoute.sectionId !== 'home') {
      scrollToSection(targetRoute.sectionId, true);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    dispatchRouteChanged(targetRoute);
    return;
  }

  navigateToPath(path, { smoothScroll: true });
}

export function initRouter() {
  const path = resolveInitialPath();
  const route = getRouteByPath(path);

  applyRouteChange(route);

  document.addEventListener('click', handleInternalLinkClick);

  window.addEventListener('popstate', () => {
    const nextRoute = getRouteByPath(normalizePath(window.location.pathname));
    const currentRoute = getCurrentRoute();

    if (getAppShell(nextRoute) !== getAppShell(currentRoute)) {
      window.location.reload();
      return;
    }

    applyRouteChange(nextRoute, { smoothScroll: false });
  });

  return route;
}

export function getCurrentRoute() {
  return window.__KURCZ_CURRENT_ROUTE__ ?? getRouteByPath(resolveInitialPath());
}
