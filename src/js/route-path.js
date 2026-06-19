import { routes } from '../seo/routes.js';

export function normalizeRoutePath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return routes.some((route) => route.path === path) ? path : '/';
}

/** Prefer URL pathname when nginx served root index.html for a deep link. */
export function getClientRoutePath() {
  const pathnamePath = normalizeRoutePath(window.location.pathname);
  const embedded =
    typeof window.__KURCZ_ROUTE__ === 'string'
      ? normalizeRoutePath(window.__KURCZ_ROUTE__)
      : null;

  if (embedded && embedded !== pathnamePath && pathnamePath !== '/') {
    return pathnamePath;
  }

  return embedded ?? pathnamePath;
}
