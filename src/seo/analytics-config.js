export const analyticsConfig = {
  gtmId: 'GTM-P7N9JKMT',
  /** GA4 Measurement ID — configure this tag inside GTM container */
  ga4MeasurementId: 'G-TXFQKNHYQ2',
  umami: {
    enabled: true,
    scriptUrl: 'https://umami.zaur.app/script.js',
    websiteId: 'eb613710-3de9-4a68-b7cf-baba6fe224cc',
    domains: ['kurcz.pl', 'www.kurcz.pl'],
  },
};

/** Umami custom event names — keep stable for dashboard filters */
export const umamiEvents = {
  cookieConsent: 'cookie_consent',
  contactFormSubmit: 'contact_form_submit',
  contactFormError: 'contact_form_error',
  contactClick: 'contact_click',
  faqOpen: 'faq_open',
  outboundClick: 'outbound_click',
  relatedTopicClick: 'related_topic_click',
  emergencyCta: 'emergency_cta',
};

export const consentStorageKey = 'kurcz_cookie_consent';
