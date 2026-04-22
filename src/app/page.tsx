import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/utils";
import {
  Shield,
  Clock,
  Award,
  Car,
  Wrench,
  Home,
  Star,
  Phone,
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";

// Enhanced SEO metadata for AI search optimization
export const metadata: Metadata = {
  title: "Hail Lions PDR | Houston's #1 Paintless Dent Repair Service (Mobile)",
  description: "Expert mobile paintless dent repair in Houston, TX. Hail damage, door dings, creases fixed with lifetime warranty. Free estimates in 30 mins. Serving Katy, Sugar Land, The Woodlands & Greater Houston.",
  keywords: [
    "paintless dent repair Houston",
    "PDR Houston TX",
    "hail damage repair Houston",
    "mobile dent repair",
    "door ding removal",
    "auto dent repair Houston",
    "paintless dent removal",
    "hail damage restoration",
    "car dent repair Houston",
    "PDR service Houston",
    "mobile PDR Houston",
    "dent removal near me",
    "hail damage repair Katy",
    "hail damage repair Sugar Land",
    "hail damage repair The Woodlands",
    "lifetime warranty dent repair",
    "insurance approved dent repair",
  ],
  authors: [{ name: "Hail Lions Paintless Dent Repair" }],
  creator: "Hail Lions PDR",
  publisher: "Hail Lions PDR",
  metadataBase: new URL("https://haillions.com"),
  alternates: {
    canonical: "https://haillions.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haillions.com",
    siteName: "Hail Lions Paintless Dent Repair",
    title: "Hail Lions PDR | Houston's #1 Mobile Paintless Dent Repair",
    description: "Expert mobile PDR services in Houston. Hail damage, door dings, creases fixed with lifetime warranty. Free 30-minute estimates. Serving Greater Houston area.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hail Lions PDR - Professional Paintless Dent Repair in Houston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hail Lions PDR | Houston's #1 Mobile Paintless Dent Repair",
    description: "Expert mobile PDR services in Houston. Hail damage, door dings, creases fixed with lifetime warranty. Free 30-minute estimates.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Service data with SEO-optimized descriptions
const services = [
  {
    icon: Car,
    title: "Paintless Dent Repair",
    description: "Professional PDR using specialized tools to massage dents from behind the panel. Preserves your factory paint finish and maintains vehicle value. Perfect for minor dents, dings, and creases.",
    href: "/services/paintless-dent-repair",
    keywords: ["PDR", "paintless dent removal", "dent repair"],
  },
  {
    icon: CloudRainIcon,
    title: "Hail Damage Repair",
    description: "Complete hail damage restoration for vehicles affected by Texas storms. From small dings to severe storm damage, we restore your car, truck, or SUV to pre-storm condition. Insurance claims welcome.",
    href: "/services/hail-damage",
    keywords: ["hail damage", "storm damage repair", "hail dent removal"],
  },
  {
    icon: DoorOpenIcon,
    title: "Door Ding Removal",
    description: "Quick and effective removal of parking lot dings and shopping cart dents. Mobile service comes to your home or office. No paint, no fillers, no trace—just flawless results in under an hour.",
    href: "/services/door-dings",
    keywords: ["door ding repair", "parking lot dent", "shopping cart dent"],
  },
  {
    icon: Home,
    title: "Mobile PDR Service",
    description: "We bring professional dent repair to you! Our fully-equipped mobile units serve Houston, Katy, Sugar Land, The Woodlands, and surrounding areas. Repairs at your home, office, or dealership.",
    href: "/services/mobile-service",
    keywords: ["mobile dent repair", "at home dent repair", "workplace dent repair"],
  },
];

// Value propositions with semantic markup
const valuePropositions = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Every repair backed by our comprehensive lifetime warranty for as long as you own your vehicle. If the dent ever reappears, we fix it free—guaranteed.",
    schemaProp: "warranty",
  },
  {
    icon: Clock,
    title: "30-Minute Estimates",
    description: "Send us photos of your damage and receive a detailed, accurate estimate within 30 minutes. Our AI-powered analysis combined with expert review ensures fair pricing.",
    schemaProp: "priceRange",
  },
  {
    icon: Award,
    title: "100% Satisfaction Guarantee",
    description: "Not completely satisfied with the repair? You pay nothing. Our commitment to excellence means we stand behind every dent we remove with a no-risk guarantee.",
    schemaProp: "aggregateRating",
  },
  {
    icon: Wrench,
    title: "Factory Finish Preserved",
    description: "No fillers, no sanding, no repainting. Your original factory paint stays intact, maintaining your vehicle's resale value and keeping manufacturer warranties valid.",
    schemaProp: "serviceType",
  },
];

// Customer testimonials with location data for local SEO
const testimonials = [
  {
    name: "Michael Rodriguez",
    location: "Katy, TX",
    rating: 5,
    text: "Hail Lions saved my truck after a major hailstorm. The mobile service came to my office, and the results were incredible. Can't even tell there was ever any damage! Best PDR service in Houston.",
    vehicle: "2022 Ford F-150",
    geo: "Katy, Texas",
  },
  {
    name: "Sarah Chen",
    location: "Sugar Land, TX",
    rating: 5,
    text: "Fast, professional, and fairly priced. They removed a nasty door ding from my BMW in under an hour right in my driveway. The convenience of mobile service is unmatched. Highly recommend!",
    vehicle: "2021 BMW X5",
    geo: "Sugar Land, Texas",
  },
  {
    name: "James Thompson",
    location: "The Woodlands, TX",
    rating: 5,
    text: "After getting quotes from 3 body shops, Hail Lions was half the price with better results. My classic Mustang looks perfect again. These guys are true PDR artists.",
    vehicle: "1967 Ford Mustang",
    geo: "The Woodlands, Texas",
  },
];

// FAQ data optimized for voice search and featured snippets
const faqs = [
  {
    question: "What is paintless dent repair (PDR) and how does it work?",
    answer: "Paintless Dent Repair (PDR) is a specialized technique that removes dents and dings from vehicle panels without disturbing the original paint finish. Our certified technicians use precision tools to access the backside of damaged panels and gently massage the metal back to its original form. PDR is faster, more affordable, and preserves your vehicle's factory finish compared to traditional body shop repairs.",
  },
  {
    question: "How much does paintless dent repair cost in Houston?",
    answer: "Paintless dent repair in Houston typically costs between $75-$150 for small door dings, $150-$300 for medium dents, and $300-$800+ for hail damage depending on severity. Hail Lions offers free estimates in 30 minutes and competitive pricing—often 40-60% less than traditional body shops. We also work with all insurance companies for hail damage claims.",
  },
  {
    question: "How long does paintless dent repair take?",
    answer: "Most door dings and small dents can be repaired in 1-2 hours. Hail damage repairs typically take 1-3 days depending on severity. Our mobile service comes to your location, so there's no downtime dropping off or picking up your vehicle. We'll provide an accurate time estimate with your free quote.",
  },
  {
    question: "Will PDR affect my vehicle warranty or CarFax report?",
    answer: "No. Since paintless dent repair preserves your original factory paint and doesn't use fillers, sanding, or repainting, it maintains all manufacturer warranties and won't appear on vehicle history reports like CarFax. This helps preserve your vehicle's resale value compared to traditional bodywork.",
  },
  {
    question: "Do you work with insurance companies for hail damage claims?",
    answer: "Yes, we work with all major insurance providers including State Farm, Allstate, Geico, Progressive, and USAA for hail damage claims. We can handle the entire claims process for you, provide documentation, and often save you from paying a deductible. Our estimates are insurance-approved and we guarantee our work.",
  },
  {
    question: "What areas do you serve for mobile dent repair?",
    answer: "Our mobile paintless dent repair service covers the entire Greater Houston area including Houston, Katy, Sugar Land, The Woodlands, Spring, Cypress, Pearland, Kingwood, Humble, and surrounding communities. We come to your home, office, or dealership—wherever is most convenient for you.",
  },
];

// Service areas for local SEO
const serviceAreas = [
  "Houston", "Katy", "Sugar Land", "The Woodlands", "Cypress", 
  "Spring", "Pearland", "Kingwood", "Humble", "Missouri City",
  "Richmond", "Rosenberg", "Tomball", "Magnolia", "Conroe"
];

// Schema.org structured data
const localBusinessSchema = generateLocalBusinessSchema();
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://haillions.com" },
]);

// Custom icons
function CloudRainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" /><path d="M8 14v6" /><path d="M12 16v6" />
    </svg>
  );
}

function DoorOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 4h3a2 2 0 0 1 2 2v14" /><path d="M2 20h3" /><path d="M13 20h9" />
      <path d="M10 12v.01" />
      <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero Section - Optimized for conversions and SEO */}
        <section className="relative bg-gradient-to-br from-muted via-background to-muted overflow-hidden" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  Houston&apos;s #1 Rated Mobile PDR Service
                </Badge>
                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Paintless Dent Repair{" "}
                  <span className="text-primary">Done Right</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Expert mobile paintless dent repair serving Houston, Katy, Sugar Land, and The Woodlands. 
                  Hail damage, door dings, and creases restored to perfection with our lifetime warranty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    <Link href="/estimate">
                      Get Free Estimate
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg">
                    <Link href="tel:+13467020510">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (346) 702-0510
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <span className="text-muted-foreground">150+ Google Reviews</span>
                </div>
              </div>
              <div className="relative lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <Image
                  src="/images/hero-dent-repair.jpg"
                  alt="Professional paintless dent repair technician removing hail damage from a vehicle in Houston"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Semantic HTML for AI search */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="services-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Our Paintless Dent Repair Services
              </h2>
              <p className="text-lg text-muted-foreground">
                From minor door dings to severe hail damage, our certified PDR technicians 
                deliver flawless results using state-of-the-art techniques. Mobile service available.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border/50 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <Link href={service.href} className="inline-flex items-center text-primary font-medium hover:underline mt-auto">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Value propositions */}
        <section className="py-16 lg:py-24 bg-muted" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/pdr-process.jpg"
                  alt="Hail Lions PDR technician using specialized tools to repair hail damage on a vehicle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold mb-4">
                    Why Choose Hail Lions PDR?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We&apos;re not just fixing dents—we&apos;re restoring your peace of mind. 
                    Our commitment to excellence has made us Houston&apos;s most trusted paintless dent repair service.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {valuePropositions.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas - Local SEO */}
        <section className="py-12 bg-background border-y" aria-labelledby="areas-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="areas-heading" className="text-2xl font-bold text-center mb-6">
              Mobile PDR Service Areas
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              We bring professional paintless dent repair to your location throughout the Greater Houston area
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-sm font-medium">
                  <MapPin className="h-4 w-4 mr-1 text-primary" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-4">
                How Our Mobile PDR Service Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Getting your dents fixed has never been easier. Three simple steps to a flawless finish.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Submit Photos Online",
                  description: "Take clear photos of the damage and submit them through our online form. Our AI-powered analysis provides an instant preliminary estimate for your paintless dent repair.",
                },
                {
                  step: "02",
                  title: "Get Your Free Quote",
                  description: "Our PDR experts review your submission and provide a detailed estimate within 30 minutes. No hidden fees, no surprises—just honest, fair pricing.",
                },
                {
                  step: "03",
                  title: "We Come to You",
                  description: "Schedule a convenient time and location anywhere in Greater Houston. Our mobile unit arrives fully equipped to restore your vehicle on the spot.",
                },
              ].map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/estimate">Start Your Free Estimate</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials - Social proof */}
        <section className="py-16 lg:py-24 bg-muted" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4">
                What Houston Drivers Say About Our PDR Service
              </h2>
              <p className="text-lg text-muted-foreground">
                Real reviews from real customers across Houston, Katy, Sugar Land, and The Woodlands.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 flex-grow">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.vehicle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Voice search optimized */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions About Paintless Dent Repair
                </h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to know about PDR in Houston, from pricing to insurance claims.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <article key={index} className="border border-border rounded-lg p-6" itemScope itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-lg mb-2" itemProp="name">{faq.question}</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-muted-foreground" itemProp="text">{faq.answer}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/faq" className="text-primary font-medium hover:underline inline-flex items-center">
                  View all FAQs
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Restore Your Vehicle?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get your free paintless dent repair estimate in 30 minutes. No obligation, no pressure—just honest 
              assessments and fair pricing from Houston&apos;s trusted PDR experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/estimate">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg">
                <Link href="tel:+13467020510">Call (346) 702-0510</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
