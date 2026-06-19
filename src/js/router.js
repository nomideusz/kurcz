import { applyRouteMeta } from '../seo/meta.js';
import { getRouteByPath, hashToPath, isStaticRoute, routes } from '../seo/routes.js';

function normalizePath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return routes.some((route) => route.path === path) ? path : '/';
}

function scrollToSection(sectionId) {
  const scroll = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
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
  if (typeof window.__KURCZ_ROUTE__ === 'string') {
    return normalizePath(window.__KURCZ_ROUTE__);
  }
  redirectLegacyHash();
  return normalizePath(window.location.pathname);
}

export function initRouter() {
  const path = resolveInitialPath();
  const route = getRouteByPath(path);

  window.__KURCZ_CURRENT_ROUTE__ = route;
  applyRouteMeta(route);

  if (!isStaticRoute(route) && route.sectionId !== 'home') {
    scrollToSection(route.sectionId);
  } else if (isStaticRoute(route)) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  window.addEventListener('popstate', () => {
    const nextRoute = getRouteByPath(normalizePath(window.location.pathname));
    window.__KURCZ_CURRENT_ROUTE__ = nextRoute;
    applyRouteMeta(nextRoute);

    if (isStaticRoute(nextRoute)) {
      window.location.reload();
      return;
    }

    if (nextRoute.sectionId !== 'home') {
      scrollToSection(nextRoute.sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  });

  return route;
}

export function getCurrentRoute() {
  return window.__KURCZ_CURRENT_ROUTE__ ?? getRouteByPath(resolveInitialPath());
}
