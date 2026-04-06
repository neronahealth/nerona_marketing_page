"use client";

import Script from "next/script";

export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://neronahealth.com/#organization",
    name: "NeronaHealth",
    alternateName: "NeronaHealth Healthcare Platform",
    description:
      "AI-powered healthcare platform connecting patients, doctors, and hospitals across Nigeria. Features include AI symptom triage, hospital discovery, appointment booking, and emergency ambulance dispatch.",
    url: "https://neronahealth.com",
    logo: "https://neronahealth.com/logo.png",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Lagos, Nigeria",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        addressLocality: "Lagos",
      },
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+234-800-HEALTH",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "NG",
      },
      {
        "@type": "ContactPoint",
        telephone: "+234-800-EMERGENCY",
        contactType: "emergency",
        availableLanguage: ["English"],
        areaServed: "NG",
      },
    ],
    sameAs: [
      "https://twitter.com/neronahealth",
      "https://linkedin.com/company/neronahealth",
      "https://instagram.com/neronahealth",
      "https://facebook.com/neronahealth",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 Admiralty Way",
      addressLocality: "Lekki",
      addressRegion: "Lagos",
      postalCode: "101233",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.4281,
      longitude: 3.4219,
    },
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    medicalSpecialty: [
      "General Medicine",
      "Emergency Medicine",
      "Internal Medicine",
      "Pediatrics",
      "Obstetrics and Gynecology",
    ],
  };

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://neronahealth.com/#website",
    url: "https://neronahealth.com",
    name: "NeronaHealth",
    description: "AI-Powered Healthcare Platform in Nigeria",
    publisher: {
      "@id": "https://neronahealth.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://neronahealth.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-NG",
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is NeronaHealth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NeronaHealth is an AI-powered healthcare platform that connects patients with verified hospitals, doctors, and emergency services across Nigeria. Our platform features AI symptom triage, hospital discovery, appointment booking, and emergency ambulance dispatch.",
        },
      },
      {
        "@type": "Question",
        name: "How does NeronaHealth's AI triage work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI triage system analyzes your symptoms and provides preliminary health recommendations. It helps you understand the urgency of your condition and suggests appropriate next steps, whether that's self-care, scheduling an appointment, or seeking emergency care.",
        },
      },
      {
        "@type": "Question",
        name: "Is my health data secure with NeronaHealth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, NeronaHealth is fully HIPAA compliant. We use industry-standard encryption and security measures to protect your health information. Your data is never shared without your explicit consent.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book appointments directly through our platform. Search for doctors by specialty, location, or availability. View their profiles, read patient reviews, and book your appointment in just a few clicks.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does NeronaHealth serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NeronaHealth currently serves major cities across Nigeria including Lagos, Abuja, Port Harcourt, Ibadan, and more. We're constantly expanding our network of healthcare providers.",
        },
      },
    ],
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}