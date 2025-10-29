import { useEffect } from 'react';

const SEOMonitor = () => {
  useEffect(() => {
    // SEO Performance Monitoring
    const monitorSEO = () => {
      // Track Core Web Vitals
      if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // Monitor page load performance
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          console.log('SEO Performance Metrics:', {
            loadTime: `${loadTime}ms`,
            domContentLoaded: `${domContentLoaded}ms`,
            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
            firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime
          });
        }
      });

      // Monitor image loading for SEO
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt) {
          console.warn(`SEO Warning: Image ${index} missing alt text:`, img.src);
        }
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });

      // Monitor heading structure for SEO
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const headingStructure = Array.from(headings).map(h => ({
        level: parseInt(h.tagName.charAt(1)),
        text: h.textContent.trim(),
        id: h.id
      }));
      
      console.log('SEO Heading Structure:', headingStructure);

      // Check for missing meta descriptions
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription || !metaDescription.content) {
        console.warn('SEO Warning: Missing or empty meta description');
      }

      // Check for missing title tags
      const title = document.querySelector('title');
      if (!title || !title.textContent) {
        console.warn('SEO Warning: Missing or empty title tag');
      }

      // Monitor internal linking
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="virtual-tour-service.com"]');
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="virtual-tour-service.com"])');
      
      console.log('SEO Link Analysis:', {
        internalLinks: internalLinks.length,
        externalLinks: externalLinks.length,
        totalLinks: internalLinks.length + externalLinks.length
      });

      // Check for structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      console.log('SEO Structured Data:', {
        count: structuredData.length,
        schemas: Array.from(structuredData).map(script => {
          try {
            const data = JSON.parse(script.textContent);
            return data['@type'] || 'Unknown';
          } catch (e) {
            return 'Invalid JSON';
          }
        })
      });
    };

    // Run SEO monitoring
    monitorSEO();

    // Monitor for dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Re-check images for alt text when new content is added
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const newImages = node.querySelectorAll ? node.querySelectorAll('img') : [];
              newImages.forEach(img => {
                if (!img.alt) {
                  console.warn('SEO Warning: New image missing alt text:', img.src);
                }
              });
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default SEOMonitor;
