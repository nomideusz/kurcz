import { getLandingPage } from '../content/landing-pages.js';
import { getRouteByPath } from '../seo/routes.js';

export default function () {
  const path = typeof window.__KURCZ_ROUTE__ === 'string'
    ? window.__KURCZ_ROUTE__
    : window.location.pathname;
  const route = getRouteByPath(path);
  const page = getLandingPage(route.path);

  return {
    route,
    page,
    openFaqIndex: null,

    toggleFaq(index) {
      this.openFaqIndex = this.openFaqIndex === index ? null : index;
    },

    template: `
      <div x-show="page" class="min-h-screen bg-background-light">
        <div class="bg-gray-50 border-b border-gray-200 pt-24 md:pt-28 pb-8">
          <div class="container mx-auto px-6 max-w-3xl">
            <nav aria-label="Breadcrumb">
              <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                <li><a href="/" class="hover:text-primary-600 no-underline">Strona główna</a></li>
                <li aria-hidden="true" class="text-gray-300">/</li>
                <li>
                  <a :href="page?.hub.path" class="hover:text-primary-600 no-underline" x-text="page?.hub.label"></a>
                </li>
                <li aria-hidden="true" class="text-gray-300">/</li>
                <li><span class="text-gray-700 font-medium" x-text="route.breadcrumbLabel"></span></li>
              </ol>
            </nav>
            <h1 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight" x-text="page?.h1"></h1>
            <p class="mt-4 text-lg text-gray-600 leading-relaxed" x-text="page?.intro"></p>
          </div>
        </div>

        <article class="container mx-auto px-6 max-w-3xl py-12 md:py-16">
          <template x-if="page">
            <div class="space-y-10">
              <template x-for="(section, index) in page.sections" :key="index">
                <section>
                  <h2 class="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-4" x-text="section.heading"></h2>
                  <p class="text-gray-600 leading-relaxed text-lg mb-4" x-text="section.body"></p>
                  <template x-if="section.bullets && section.bullets.length">
                    <ul class="space-y-2">
                      <template x-for="(bullet, bi) in section.bullets" :key="bi">
                        <li class="flex items-start text-gray-600">
                          <span class="text-primary-500 mr-2 mt-1">•</span>
                          <span x-text="bullet"></span>
                        </li>
                      </template>
                    </ul>
                  </template>
                </section>
              </template>

              <template x-if="page.faq && page.faq.length">
                <section class="bg-white rounded-2xl border border-gray-100 shadow-soft overflow-hidden">
                  <div class="px-6 py-4 border-b border-gray-100 bg-primary-50/50">
                    <h2 class="font-heading text-xl font-bold text-gray-900">Najczęstsze pytania</h2>
                  </div>
                  <div class="divide-y divide-gray-100">
                    <template x-for="(item, fi) in page.faq" :key="fi">
                      <div>
                        <button
                          type="button"
                          @click="toggleFaq(fi)"
                          class="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50"
                          :aria-expanded="openFaqIndex === fi"
                        >
                          <span class="font-medium text-gray-900" x-text="item.question"></span>
                          <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" :class="openFaqIndex === fi ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        <div x-show="openFaqIndex === fi" class="px-6 pb-4">
                          <p class="text-gray-600 leading-relaxed" x-text="item.answer"></p>
                        </div>
                      </div>
                    </template>
                  </div>
                </section>
              </template>

              <template x-if="page.relatedLinks && page.relatedLinks.length">
                <section class="pt-4 border-t border-gray-200">
                  <h2 class="font-heading text-lg font-bold text-gray-900 mb-4">Powiązane tematy</h2>
                  <div class="flex flex-wrap gap-3">
                    <template x-for="(link, li) in page.relatedLinks" :key="li">
                      <a :href="link.path" class="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 text-sm font-medium no-underline transition-colors" x-text="link.label"></a>
                    </template>
                  </div>
                </section>
              </template>
            </div>
          </template>

          <div class="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p class="text-amber-900 text-sm leading-relaxed">
              <strong>Zastrzeżenie:</strong> Informacje mają charakter edukacyjny i nie zastępują porady lekarskiej.
              <a href="/disclaimer-medyczny" class="text-primary-600 hover:underline ml-1">Disclaimer medyczny</a>
            </p>
          </div>
        </article>
      </div>
    `,
  };
}
