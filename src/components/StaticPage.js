import { getStaticPage } from '../content/static-pages.js';
import { getClientRoutePath } from '../js/route-path.js';
import { getRouteByPath } from '../seo/routes.js';

export default function () {
  const path = getClientRoutePath();
  const route = getRouteByPath(path);
  const page = getStaticPage(route.path);

  return {
    route,
    page,

    template: `
      <div x-show="page" class="min-h-screen bg-background-light">
        <div class="bg-gray-50 border-b border-gray-200 pt-24 md:pt-28 pb-8">
          <div class="container mx-auto px-6 max-w-3xl">
            <nav aria-label="Breadcrumb">
              <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                <li><a href="/" class="hover:text-primary-600 no-underline">Strona główna</a></li>
                <li aria-hidden="true" class="text-gray-300">/</li>
                <li><span class="text-gray-700 font-medium" x-text="route.breadcrumbLabel"></span></li>
              </ol>
            </nav>
            <h1 class="font-heading text-3xl md:text-4xl font-bold text-gray-900" x-text="page?.h1"></h1>
          </div>
        </div>

        <article class="container mx-auto px-6 max-w-3xl py-12 md:py-16">
          <template x-if="page">
            <div class="space-y-10">
              <template x-for="(section, index) in page.sections" :key="index">
                <section>
                  <h2 class="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-4" x-text="section.heading"></h2>
                  <p class="text-gray-600 leading-relaxed text-lg" x-text="section.body"></p>
                </section>
              </template>
            </div>
          </template>

          <div class="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p class="text-amber-900 text-sm leading-relaxed">
              <strong>Zastrzeżenie:</strong> Informacje na tej stronie mają charakter edukacyjny.
              W razie wątpliwości zdrowotnych skonsultuj się z lekarzem.
              <a href="/disclaimer-medyczny" class="text-primary-600 hover:underline ml-1">Pełny disclaimer medyczny</a>
            </p>
          </div>
        </article>
      </div>
    `,
  };
}
