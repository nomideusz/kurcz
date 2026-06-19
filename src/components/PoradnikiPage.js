import { getPoradnikiHub } from '../content/poradniki-hub.js';
import { getClientRoutePath } from '../js/route-path.js';
import { umamiEvents } from '../seo/analytics-config.js';
import { getRouteByPath } from '../seo/routes.js';
import { trackEvent } from '../js/umami.js';

export default function () {
  const path = getClientRoutePath();
  const route = getRouteByPath(path);
  const hub = getPoradnikiHub();

  return {
    route,
    hub,

    trackGuideClick(guide) {
      trackEvent(umamiEvents.guideClick, {
        path: guide.path,
        title: guide.title,
        from: '/poradniki',
      });
    },

    template: `
      <div class="min-h-screen bg-background-light">
        <div class="bg-gray-50 border-b border-gray-200 pt-24 md:pt-28 pb-8">
          <div class="container mx-auto px-6 max-w-5xl">
            <nav aria-label="Breadcrumb">
              <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                <li><a href="/" class="hover:text-primary-600 no-underline">Strona główna</a></li>
                <li aria-hidden="true" class="text-gray-300">/</li>
                <li><span class="text-gray-700 font-medium" x-text="route.breadcrumbLabel"></span></li>
              </ol>
            </nav>
            <h1 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight" x-text="hub.h1"></h1>
            <p class="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl" x-text="hub.intro"></p>
          </div>
        </div>

        <article class="container mx-auto px-6 max-w-5xl py-12 md:py-16">
          <div class="space-y-14">
            <template x-for="(category, ci) in hub.categories" :key="ci">
              <section>
                <div class="mb-8">
                  <h2 class="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-2" x-text="category.title"></h2>
                  <p class="text-gray-600 leading-relaxed" x-text="category.description"></p>
                </div>
                <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <template x-for="(guide, gi) in category.guides" :key="guide.path">
                    <li>
                      <a
                        :href="guide.path"
                        @click="trackGuideClick(guide)"
                        class="group block h-full p-5 rounded-2xl bg-white border border-gray-100 shadow-soft hover:border-primary-200 hover:shadow-md transition-all no-underline"
                      >
                        <h3 class="font-heading font-semibold text-gray-900 group-hover:text-primary-700 transition-colors mb-2" x-text="guide.title"></h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3" x-text="guide.description"></p>
                        <span class="inline-flex items-center mt-4 text-sm font-medium text-primary-600 group-hover:text-primary-800">
                          Czytaj poradnik
                          <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </template>
                </ul>
              </section>
            </template>
          </div>

          <div class="mt-14 p-6 bg-primary-50 border border-primary-100 rounded-2xl">
            <h2 class="font-heading text-lg font-bold text-gray-900 mb-2">Szukasz ogólnych informacji?</h2>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Przejdź do głównych sekcji serwisu — przegląd kurczy mięśniowych, pierwsza pomoc, profilaktyka i FAQ.
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="/kurcze-miesniowe" class="inline-flex px-4 py-2 rounded-full bg-white text-primary-700 hover:bg-primary-100 text-sm font-medium no-underline border border-primary-200">Kurcze mięśniowe</a>
              <a href="/pierwsza-pomoc" class="inline-flex px-4 py-2 rounded-full bg-white text-primary-700 hover:bg-primary-100 text-sm font-medium no-underline border border-primary-200">Pierwsza pomoc</a>
              <a href="/profilaktyka" class="inline-flex px-4 py-2 rounded-full bg-white text-primary-700 hover:bg-primary-100 text-sm font-medium no-underline border border-primary-200">Profilaktyka</a>
              <a href="/faq" class="inline-flex px-4 py-2 rounded-full bg-white text-primary-700 hover:bg-primary-100 text-sm font-medium no-underline border border-primary-200">FAQ</a>
            </div>
          </div>

          <div class="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p class="text-amber-900 text-sm leading-relaxed">
              <strong>Zastrzeżenie:</strong> Poradniki mają charakter edukacyjny i nie zastępują porady lekarskiej.
              <a href="/disclaimer-medyczny" class="text-primary-600 hover:underline ml-1">Disclaimer medyczny</a>
            </p>
          </div>
        </article>
      </div>
    `,
  };
}
