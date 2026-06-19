// Import CSS
import './css/styles.css';
import './css/typography.css';

// Import Alpine and components
import Alpine from 'alpinejs';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import IntroSection from './components/IntroSection.js';
import TreatmentSection from './components/TreatmentSection.js';
import PreventionSection from './components/PreventionSection.js';
import ComparisonSection from './components/ComparisonSection.js';
import FaqSection from './components/FaqSection.js';
import ContactSection from './components/ContactSection.js';
import WibroakustykaSection from './components/WibroakustykaSection.js';
import YogaSection from './components/YogaSection.js';
import Breadcrumbs from './components/Breadcrumbs.js';
import StaticPage from './components/StaticPage.js';
import CookieConsent from './components/CookieConsent.js';
import Logo from './components/Logo.js';
import AppLayout from './components/AppLayout.js';
import { emailConfig } from './config.js';
import { initRouter } from './js/router.js';
import { isStaticRoute } from './seo/routes.js';

document.addEventListener('alpine:init', () => {
  Alpine.store('header', {
    menuOpen: false,
    scrolledDown: window.scrollY > 50,
  });
});

window.headerComponent = Header;
window.footerComponent = Footer;
window.heroComponent = Hero;
window.introSectionComponent = IntroSection;
window.treatmentSectionComponent = TreatmentSection;
window.preventionSectionComponent = PreventionSection;
window.comparisonSectionComponent = ComparisonSection;
window.faqSectionComponent = FaqSection;
window.contactSectionComponent = ContactSection;
window.wibroakustykaSectionComponent = WibroakustykaSection;
window.yogaSectionComponent = YogaSection;
window.breadcrumbsComponent = Breadcrumbs;
window.staticPageComponent = StaticPage;
window.cookieConsentComponent = CookieConsent;
window.logoComponent = Logo;
window.appLayout = AppLayout;

function renderTopicApp() {
  const appLayout = document.getElementById('app-layout');
  if (!appLayout) return;

  appLayout.innerHTML = `
    <div x-data="headerComponent()" x-html="template"></div>
    <div x-data="breadcrumbsComponent()" x-html="template"></div>
    <div x-data="heroComponent()" x-html="template"></div>
    <div x-data="introSectionComponent()" x-html="template"></div>
    <div x-data="treatmentSectionComponent()" x-html="template"></div>
    <div x-data="preventionSectionComponent()" x-html="template"></div>
    <div x-data="comparisonSectionComponent()" x-html="template"></div>
    <div x-data="wibroakustykaSectionComponent()" x-html="template"></div>
    <div x-data="yogaSectionComponent()" x-html="template"></div>
    <div x-data="faqSectionComponent()" x-html="template"></div>
    <div x-data="contactSectionComponent()" x-html="template"></div>
    <div x-data="footerComponent()" x-html="template"></div>
  `;
}

function renderStaticApp() {
  const appLayout = document.getElementById('app-layout');
  if (!appLayout) return;

  appLayout.innerHTML = `
    <div x-data="headerComponent()" x-html="template"></div>
    <div x-data="staticPageComponent()" x-html="template"></div>
    <div x-data="footerComponent()" x-html="template"></div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const route = initRouter();

  window.Alpine = Alpine;

  if (isStaticRoute(route)) {
    renderStaticApp();
  } else {
    renderTopicApp();
  }

  const consentRoot = document.getElementById('cookie-consent');
  if (consentRoot) {
    consentRoot.innerHTML = `<div x-data="cookieConsentComponent()" x-html="template"></div>`;
  }

  Alpine.start();

  setTimeout(() => {
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
      loadingEl.style.display = 'none';
    }
    window.dispatchEvent(new CustomEvent('app-loaded'));
  }, 1000);
});
