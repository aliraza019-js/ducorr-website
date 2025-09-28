// Google Tag Manager utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Track a conversion event for Google Ads
 * @param conversionId - The conversion ID from Google Ads (e.g., 'AW-831188944/hFN_CMLzkYkYENDfq4wD')
 */
export const trackConversion = (conversionId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('[GTM] Tracking conversion:', conversionId);
    window.gtag('event', 'conversion', {
      'send_to': conversionId
    });
    console.log('[GTM] Conversion tracked successfully');
  } else {
    console.warn('[GTM] gtag not available - conversion not tracked');
  }
};

/**
 * Track a custom event
 * @param eventName - The name of the event
 * @param parameters - Additional parameters for the event
 */
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * Track page view
 * @param pagePath - The path of the page
 * @param pageTitle - The title of the page
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-831188944', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};
