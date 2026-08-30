import React, { useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, FOUNDER_PROFILES } from '../data/content';

interface SEOHeadProps {
  page: PageId;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ page }) => {
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: `${COMPANY_INFO.name} | Executive Consulting & Operational Excellence`,
      about: `About Us | ${COMPANY_INFO.name} | Veteran-Led Leadership Development`,
      services: `Services & Practice Areas | ${COMPANY_INFO.name}`,
      team: `Executive Leadership Team | ${COMPANY_INFO.name}`,
      booking: `Book a Consultation | ${COMPANY_INFO.name}`,
      contact: `Contact Us | ${COMPANY_INFO.name}`,
    };

    const descriptions: Record<PageId, string> = {
      home: COMPANY_INFO.description,
      about: `Learn about ${COMPANY_INFO.legalName} — a veteran-led management consulting and leadership development firm dedicated to translating time-tested military principles into high-performance operational excellence.`,
      services: `Explore practice areas: Leadership Development, Management Consulting, Operational Excellence, Frontline Leadership, Corporate Leadership Academies, and Strategic Execution.`,
      team: `Meet the leadership of ${COMPANY_INFO.name}, including Walter Horton (3rd U.S. Infantry Regiment / The Old Guard veteran) and Trevor McLeod (U.S. Army veteran & IBEW Local #3 Journeyperson).`,
      booking: `Schedule a confidential executive consultation with ${COMPANY_INFO.name} to diagnose operational bottlenecks and bridge the strategy-to-execution gap.`,
      contact: `Direct executive contact coordinates for ${COMPANY_INFO.name}. Connect with Walter via phone or email.`,
    };

    document.title = titles[page] || titles.home;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[page] || descriptions.home);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', titles[page] || titles.home);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', descriptions[page] || descriptions.home);
    }

    // Inject structured data
    let structuredDataScript = document.getElementById('json-ld-structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'json-ld-structured-data';
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://elitevanguard.com/#organization",
          "name": COMPANY_INFO.legalName,
          "alternateName": COMPANY_INFO.name,
          "description": COMPANY_INFO.description,
          "email": "[Email - TBD]",
          "telephone": "[Phone - TBD]",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "[Phone - TBD]",
              "contactType": "Executive Consultation",
              "name": COMPANY_INFO.contactPerson,
              "availableLanguage": ["English"]
            }
          ]
        },
        {
          "@type": "Person",
          "@id": "https://elitevanguard.com/#walter-horton",
          "name": "Walter Horton",
          "jobTitle": "Co-Founder & Executive Consultant",
          "worksFor": { "@id": "https://elitevanguard.com/#organization" },
          "description": FOUNDER_PROFILES[0].bio
        },
        {
          "@type": "Person",
          "@id": "https://elitevanguard.com/#trevor-mcleod",
          "name": "Trevor McLeod",
          "jobTitle": "Co-Founder & Operational Consultant",
          "worksFor": { "@id": "https://elitevanguard.com/#organization" },
          "description": FOUNDER_PROFILES[1].bio
        },
        {
          "@type": "WebPage",
          "@id": `https://elitevanguard.com/${page === 'home' ? '' : page}`,
          "name": titles[page],
          "description": descriptions[page],
          "isPartOf": { "@id": "https://elitevanguard.com/#organization" }
        }
      ]
    };

    structuredDataScript.textContent = JSON.stringify(schema);
  }, [page]);

  return null;
};
