"use client";

import Script from "next/script";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: Array<{
    days: string[];
    opens: string;
    closes: string;
  }>;
  priceRange?: string;
  image?: string;
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
  areaServed?: string[];
}

export function LocalBusinessSchema({
  name = "Hail Lions Paintless Dent Repair",
  description = "Houston's premier mobile paintless dent repair service. Expert hail damage, door ding, and dent removal with lifetime warranty.",
  url = "https://haillions.com",
  telephone = "+1-281-352-5434",
  email = "info@haillions.com",
  address = {
    streetAddress: "Mobile Service - Greater Houston Area",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77001",
    addressCountry: "US",
  },
  geo = {
    latitude: 29.7604,
    longitude: -95.3698,
  },
  openingHours = [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "16:00" },
  ],
  priceRange = "$$",
  image = "https://haillions.com/logo.png",
  rating = { ratingValue: 4.9, reviewCount: 150 },
  areaServed = ["Houston", "Katy", "Sugar Land", "The Woodlands", "Cypress", "Spring", "Pearland", "Kingwood"],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${url}/#business`,
    name,
    description,
    url,
    telephone,
    email,
    image,
    priceRange,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: [
      "Paintless Dent Repair",
      "Hail Damage Repair",
      "Door Ding Removal",
      "Mobile Dent Repair",
      "PDR Services",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Insurance"],
    currenciesAccepted: "USD",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paintless Dent Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hail Damage Repair",
            description: "Complete hail damage restoration for vehicles affected by Texas storms",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Door Ding Removal",
            description: "Quick removal of parking lot dings and shopping cart dents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile PDR Service",
            description: "Professional dent repair at your home, office, or dealership",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  providerUrl?: string;
  areaServed?: string[];
  image?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = "Hail Lions Paintless Dent Repair",
  providerUrl = "https://haillions.com",
  areaServed = ["Houston", "Katy", "Sugar Land", "The Woodlands", "Cypress"],
  image = "https://haillions.com/og-image.jpg",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "AutoRepair",
      name: provider,
      url: providerUrl,
    },
    name,
    description,
    url,
    image,
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Services`,
    },
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function WebPageSchema({
  title,
  description,
  url,
  image = "https://haillions.com/og-image.jpg",
  publishedTime,
  modifiedTime,
  author = "Hail Lions PDR",
}: WebPageSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    image,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Hail Lions Paintless Dent Repair",
      logo: {
        "@type": "ImageObject",
        url: "https://haillions.com/logo.png",
      },
    },
  };

  if (publishedTime) {
    schema.datePublished = publishedTime;
  }
  if (modifiedTime) {
    schema.dateModified = modifiedTime;
  }

  return (
    <Script
      id="webpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface ReviewSchemaProps {
  author: string;
  reviewBody: string;
  rating: number;
  datePublished: string;
  itemReviewed: string;
}

export function ReviewSchema({ author, reviewBody, rating, datePublished, itemReviewed }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: author,
    },
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating,
      bestRating: 5,
    },
    datePublished,
    itemReviewed: {
      "@type": "AutoRepair",
      name: itemReviewed,
    },
  };

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    url?: string;
    image?: string;
  }>;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

export function HowToSchema({ name, description, steps, totalTime, estimatedCost }: HowToSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
      image: step.image,
    })),
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }
  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }

  return (
    <Script
      id="howto-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
