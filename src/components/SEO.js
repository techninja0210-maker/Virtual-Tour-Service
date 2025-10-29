import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Virtual Tour Development Service - Professional 360° Tours for Hotels",
  description = "Professional 360° virtual tour development for hotels worldwide. Create immersive experiences that increase bookings and guest confidence. Expert virtual tour services by Jovan Spasojevic.",
  keywords = "virtual tour, 360 tour, hotel virtual tour, virtual tour development, immersive experience, hotel booking, tourism technology, virtual reality, interactive tour, hotel marketing, 360 panorama, virtual tour creator, hotel technology, booking conversion, guest experience, tourism innovation",
  image = "/images/Service_logo.png",
  url = "https://virtual-tour-service.com",
  type = "website",
  structuredData = null,
  noindex = false,
  article = false,
  publishedTime = null,
  modifiedTime = null
}) => {
  const fullTitle = title.includes("Virtual Tour") ? title : `${title} | Virtual Tour Development Service`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : url;
  const imageUrl = image.startsWith('http') ? image : `${url}${image}`;
  
  // Enhanced structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Tour Development Service",
    "alternateName": "360 Virtual Tour Service",
    "description": "Professional 360° virtual tour development for hotels worldwide. Create immersive experiences that increase bookings and guest confidence.",
    "url": "https://virtual-tour-service.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://virtual-tour-service.com/images/Service_logo.png",
      "width": 200,
      "height": 200
    },
    "image": "https://virtual-tour-service.com/images/Service_logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+381-XX-XXX-XXXX",
      "contactType": "customer service",
      "email": "spaskekl@gmail.com",
      "availableLanguage": "English"
    },
    "founder": {
      "@type": "Person",
      "name": "Jovan Spasojevic",
      "email": "spaskekl@gmail.com",
      "jobTitle": "Founder & Virtual Tour Developer"
    },
    "sameAs": [
      "https://linkedin.com/in/jovan-spasojevic",
      "https://github.com/jovanspasojevic",
      "https://360virtualtour.pro"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Serbia"
    },
    "areaServed": "Worldwide",
    "serviceType": "Virtual Tour Development",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Virtual Tour Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "360° Photography",
            "description": "Professional panoramic photography capturing every detail of hotel spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interactive Navigation",
            "description": "Seamless keyboard and mouse navigation with smooth transitions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multimedia Integration",
            "description": "Background sounds, narrations, and multimedia elements"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Service-specific structured data
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Virtual Tour Development Service",
    "description": "Professional 360° virtual tour development for hotels worldwide",
    "provider": {
      "@type": "Organization",
      "name": "Virtual Tour Development Service",
      "founder": {
        "@type": "Person",
        "name": "Jovan Spasojevic",
        "email": "spaskekl@gmail.com"
      }
    },
    "serviceType": "Virtual Tour Development",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Professional virtual tour development services",
      "category": "Digital Marketing Services",
      "priceRange": "$10-$20 per image"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Virtual Tour Services"
    }
  };
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jovan Spasojevic" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={article ? "article" : type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Virtual Tour Development Service Logo" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Virtual Tour Development Service" />
      <meta property="og:locale" content="en_US" />
      {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {article && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {article && <meta property="article:author" content="Jovan Spasojevic" />}
      {article && <meta property="article:section" content="Technology" />}
      {article && <meta property="article:tag" content="Virtual Tour, 360 Tour, Hotel Technology" />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Virtual Tour Development Service Logo" />
      <meta name="twitter:creator" content="@jovanspasojevic" />
      <meta name="twitter:site" content="@jovanspasojevic" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#A8D8EA" />
      <meta name="msapplication-TileColor" content="#A8D8EA" />
      <meta name="msapplication-TileImage" content="/images/Service_logo.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Virtual Tour Service" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      {/* Service Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://virtual-tour-service.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://virtual-tour-service.com/#services"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
