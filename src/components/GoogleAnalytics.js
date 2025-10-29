import { useEffect } from 'react';

const GoogleAnalytics = ({ trackingId = 'GA_TRACKING_ID' }) => {
  useEffect(() => {
    // Only load analytics in production
    if (process.env.NODE_ENV !== 'production' || trackingId === 'GA_TRACKING_ID') {
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics with enhanced configuration
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      // Enhanced GA4 configuration for SEO tracking
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        custom_map: {
          'custom_parameter_1': 'virtual_tour_service',
          'custom_parameter_2': 'hotel_technology'
        },
        // Enhanced measurement for Core Web Vitals
        send_page_view: true,
        // Track virtual tour interactions
        custom_parameters: {
          service_type: 'virtual_tour_development',
          target_audience: 'hotels',
          service_area: 'worldwide'
        }
      });

      // Track virtual tour service interactions
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        content_group1: 'Virtual Tour Service',
        content_group2: 'Hotel Technology',
        content_group3: '360 Tour Development'
      });

      // Track scroll depth for SEO content engagement
      let maxScroll = 0;
      window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: scrollPercent + '%',
            value: scrollPercent
          });
        }
      });

      // Track time on page for content quality signals
      let startTime = Date.now();
      window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        gtag('event', 'timing_complete', {
          name: 'time_on_page',
          value: timeOnPage,
          event_category: 'engagement'
        });
      });
    `;
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      if (document.head.contains(script1)) {
        document.head.removeChild(script1);
      }
      if (document.head.contains(script2)) {
        document.head.removeChild(script2);
      }
    };
  }, [trackingId]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
