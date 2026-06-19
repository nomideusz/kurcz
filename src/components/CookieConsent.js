import { applyConsentChoice, hasConsentChoice } from '../js/consent.js';

export default function () {
  return {
    visible: !hasConsentChoice(),

    acceptAll() {
      applyConsentChoice('granted');
      this.visible = false;
    },

    acceptNecessary() {
      applyConsentChoice('denied');
      this.visible = false;
    },

    template: `
      <div
        x-cloak
        x-show="visible"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4"
        x-transition:enter-end="opacity-100 translate-y-0"
        x-transition:leave="transition ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0"
        x-transition:leave-end="opacity-0 translate-y-4"
        class="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6 pointer-events-none"
        role="dialog"
        aria-live="polite"
        aria-label="Ustawienia plików cookies"
      >
        <div class="pointer-events-auto max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 class="font-heading text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
            Pliki cookies i analityka
          </h2>
          <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Używamy niezbędnych plików cookies, aby strona działała poprawnie. Za Twoją zgodą
            stosujemy też Google Analytics (G-TXFQKNHYQ2) przez Google Tag Manager oraz Umami
            (analityka bez cookies), aby analizować ruch i ulepszać serwis. Możesz zaakceptować
            wszystkie cookies lub ograniczyć się do niezbędnych.
            <a href="/polityka-prywatnosci" class="text-primary-600 hover:underline ml-1">Polityka prywatności</a>
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              @click="acceptNecessary()"
              class="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Tylko niezbędne
            </button>
            <button
              type="button"
              @click="acceptAll()"
              class="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              Akceptuj wszystkie
            </button>
          </div>
        </div>
      </div>
    `,
  };
}
