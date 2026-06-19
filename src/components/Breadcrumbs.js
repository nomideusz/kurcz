import { getRouteByPath } from '../seo/routes.js';
import { getTopicFaq } from '../seo/topic-faq.js';
import { trackFaqOpen } from '../js/umami.js';

export default function () {
  const path = typeof window.__KURCZ_ROUTE__ === 'string'
    ? window.__KURCZ_ROUTE__
    : window.location.pathname;
  const route = getRouteByPath(path);
  const topicFaq = getTopicFaq(route.path);

  return {
    route,
    topicFaq,
    visible: route.path !== '/',
    openFaqIndex: null,

    toggleTopicFaq(index) {
      const willOpen = this.openFaqIndex !== index;
      this.openFaqIndex = this.openFaqIndex === index ? null : index;
      if (willOpen && this.topicFaq?.[index]) {
        trackFaqOpen('topic', this.topicFaq[index].question);
      }
    },

    template: `
      <div
        x-cloak
        x-show="visible"
        class="bg-gray-50 border-b border-gray-200 pt-24 md:pt-28 pb-8"
        aria-label="Nawigacja okruszkowa"
      >
        <div class="container mx-auto px-6 max-w-6xl">
          <nav aria-label="Breadcrumb">
            <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
              <li>
                <a href="/" class="hover:text-primary-600 transition-colors no-underline">Strona główna</a>
              </li>
              <li aria-hidden="true" class="text-gray-300">/</li>
              <li>
                <span class="text-gray-700 font-medium" x-text="route.breadcrumbLabel"></span>
              </li>
            </ol>
          </nav>

          <h1 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight" x-text="route.h1"></h1>

          <template x-if="topicFaq && topicFaq.length">
            <div class="mt-8 bg-white rounded-2xl border border-gray-100 shadow-soft overflow-hidden">
              <div class="px-6 py-4 border-b border-gray-100 bg-primary-50/50">
                <h2 class="font-heading text-lg font-semibold text-gray-900">Najczęstsze pytania o ten temat</h2>
              </div>
              <div class="divide-y divide-gray-100">
                <template x-for="(item, index) in topicFaq" :key="index">
                  <div>
                    <button
                      type="button"
                      @click="toggleTopicFaq(index)"
                      class="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                      :aria-expanded="openFaqIndex === index"
                    >
                      <span class="font-medium text-gray-900" x-text="item.question"></span>
                      <svg
                        class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform"
                        :class="openFaqIndex === index ? 'rotate-180' : ''"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div x-show="openFaqIndex === index" class="px-6 pb-4">
                      <p class="text-gray-600 leading-relaxed" x-text="item.answer"></p>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    `,
  };
}
