import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number | string): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num)
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(d)
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const displayHours = hours % 12 || 12
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
}: {
  title: string
  description: string
  path?: string
  image?: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://haillions.com'
  const url = `${baseUrl}${path}`
  
  return {
    title: `${title} | Hail Lions Paintless Dent Repair`,
    description,
    keywords: [
      'paintless dent repair',
      'PDR',
      'hail damage repair',
      'dent removal',
      'auto dent repair',
      'mobile dent repair',
      'Houston',
      'Texas',
      'door ding repair',
      'hail damage',
    ],
    authors: [{ name: 'Hail Lions PDR' }],
    creator: 'Hail Lions PDR',
    publisher: 'Hail Lions PDR',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Hail Lions Paintless Dent Repair`,
      description,
      url,
      siteName: 'Hail Lions Paintless Dent Repair',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Hail Lions Paintless Dent Repair`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Hail Lions Paintless Dent Repair',
    image: 'https://haillions.com/logo.png',
    '@id': 'https://haillions.com',
    url: 'https://haillions.com',
    telephone: '+1-346-702-0510',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mobile Service - Houston Area',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.7604,
      longitude: -95.3698,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Houston',
    },
    serviceType: [
      'Paintless Dent Repair',
      'Hail Damage Repair',
      'Door Ding Removal',
      'Mobile Dent Repair',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  provider: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'AutoRepair',
      name: service.provider,
    },
    description: service.description,
    url: service.url,
    areaServed: {
      '@type': 'City',
      name: 'Houston',
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
