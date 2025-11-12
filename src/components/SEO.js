import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Virtual Tour Development Service - Professional 360° Tours for Hotels",
  description = "Professional 360° virtual tour development for hotels worldwide. Create immersive experiences that increase bookings and guest confidence. Expert virtual tour services by Jovan Spasojevic.",
  keywords = "virtual tour, 360 tour, hotel virtual tour, virtual tour development, immersive experience, hotel booking, tourism technology, virtual reality, interactive tour, hotel marketing",
  image = "/images/Service_logo.png",
  url = "https://virtual-tour-service.com",
  type = "website",
  structuredData = null
}) => {
  const fullTitle = title.includes("Virtual Tour") ? title : `${title} | Virtual Tour Development Service`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jovan Spasojevic" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={url + image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Virtual Tour Development Service" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url + image} />
      <meta name="twitter:creator" content="@jovanspasojevic" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#A8D8EA" />
      <meta name="msapplication-TileColor" content="#A8D8EA" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Virtual Tour Service" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Virtual Tour Development Service",
          "description": "Professional 360° virtual tour development for hotels worldwide",
          "url": "https://virtual-tour-service.com",
          "logo": "https://virtual-tour-service.com/images/Service_logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+381-XX-XXX-XXXX",
            "contactType": "customer service",
            "email": "j.virtualtour.ceo@gmail.com"
          },
          "founder": {
            "@type": "Person",
            "name": "Jovan Spasojevic",
            "email": "j.virtualtour.ceo@gmail.com"
          },
          "sameAs": [
            "https://linkedin.com/in/jovan-spasojevic",
            "https://github.com/jovanspasojevic"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Serbia"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
