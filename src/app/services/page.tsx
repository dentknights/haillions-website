import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/utils";
import { ArrowRight, Car, CloudRain, DoorOpen, Home, Shield, Phone, CheckCircle } from "lucide-react";

// Enhanced SEO metadata for services page
export const metadata: Metadata = {
  title: "Paintless Dent Repair Services Houston | Hail Damage, Door Dings, Mobile PDR",
  description: "Complete paintless dent repair services in Houston, TX. Hail damage restoration, door ding removal, mobile PDR. Lifetime warranty, insurance approved. Serving Katy, Sugar Land, The Woodlands.",
  keywords: [
    "paintless dent repair services Houston",
    "hail damage repair Houston",
    "door ding removal Houston",
    "mobile PDR service",
    "paintless dent removal services",
    "hail damage restoration Texas",
    "auto dent repair services",
    "PDR services Houston",
    "mobile dent repair Houston",
    "car hail damage repair",
    "paintless dent repair Katy",
    "paintless dent repair Sugar Land",
    "dent removal services",
    "vehicle hail damage repair",
    "lifetime warranty dent repair",
  ],
  alternates: {
    canonical: "https://haillions.com/services",
  },
  openGraph: {
    title: "Paintless Dent Repair Services Houston | Hail Damage, Door Dings, Mobile PDR",
    description: "Complete PDR services in Houston, TX. Hail damage, door dings, mobile service. Lifetime warranty, insurance approved.",
    url: "https://haillions.com/services",
  },
};

// Main services with SEO-optimized content
const mainServices = [
  {
    icon: Car,
    title: "Paintless Dent Repair (PDR)",
    shortDesc: "Professional PDR for all types of vehicle dents without painting",
    description: "Our signature paintless dent repair service uses specialized tools and techniques to massage dents from behind the panel. This preserves your factory paint finish while completely removing the damage. Perfect for door dings, minor dents, shopping cart damage, and small creases on any vehicle make or model.",
    features: [
      "Preserves original factory paint finish",
      "No fillers, sanding, or repainting needed",
      "Maintains vehicle resale value",
      "Same-day service available for most repairs",
      "Lifetime warranty on all work",
      "Works on all makes and models",
    ],
    href: "/services/paintless-dent-repair",
    image: "/images/pdr-service.jpg",
    altText: "Professional paintless dent repair technician removing dent from vehicle door panel",
  },
  {
    icon: CloudRain,
    title: "Hail Damage Repair",
    shortDesc: "Complete hail damage restoration for Houston storm victims",
    description: "Houston weather can be unpredictable, and hail storms can cause extensive damage. When hail strikes, we're here to restore your vehicle to pre-storm condition. Our hail damage specialists handle everything from light peppering to severe storm damage with hundreds of dents across multiple panels.",
    features: [
      "Full insurance claim assistance and documentation",
      "Complete panel-by-panel restoration",
      "Rental car coordination available",
      "Deductible savings programs",
      "Fast 1-3 day turnaround for most hail damage",
      "All insurance companies accepted",
    ],
    href: "/services/hail-damage",
    image: "/images/hail-damage.jpg",
    altText: "Hail damage repair specialist restoring vehicle damaged by Texas hail storm",
  },
  {
    icon: DoorOpen,
    title: "Door Ding Removal",
    shortDesc: "Quick, affordable fixes for parking lot dings and minor dents",
    description: "Parking lot dings are frustrating but easily fixed with PDR. Our door ding removal service targets those annoying small dents that happen in parking lots, grocery stores, and tight spaces. We restore your door panels to perfection without any trace of the damage, usually in under an hour.",
    features: [
      "Quick 30-60 minute repairs for most dings",
      "No paint touch-ups or color matching needed",
      "Affordable pricing starting at $75",
      "Mobile service available at your location",
      "Multiple dents discounted",
      "Perfect for lease return preparation",
    ],
    href: "/services/door-dings",
    image: "/images/door-ding.jpg",
    altText: "Door ding removal service repairing parking lot dent on car door",
  },
  {
    icon: Home,
    title: "Mobile Paintless Dent Repair",
    shortDesc: "Professional PDR at your home, office, or dealership",
    description: "Can't make it to a shop? No problem. Our fully-equipped mobile units bring professional paintless dent repair directly to your location anywhere in Greater Houston. Whether you're at home, work, or your dealership, we deliver the same quality service on-site with no additional mobile fees.",
    features: [
      "Service at your home, office, or dealership",
      "Fully equipped mobile PDR units",
      "Flexible scheduling including weekends",
      "Same quality as shop-based service",
      "No additional mobile service fees",
      "Serving all of Greater Houston area",
    ],
    href: "/services/mobile-service",
    image: "/images/mobile-service.jpg",
    altText: "Mobile paintless dent repair van providing on-site service in Houston",
  },
];

// Additional specialized services
const additionalServices = [
  {
    title: "Classic Car PDR",
    description: "Gentle, specialized PDR techniques for vintage and classic vehicles requiring extra care and precision. We understand the value of originality.",
    icon: "🏛️",
  },
  {
    title: "Motorcycle Tank & Fender Repair",
    description: "Expert dent removal for motorcycle fuel tanks, fenders, and body panels. Preserve your bike's finish without repainting.",
    icon: "🏍️",
  },
  {
    title: "RV & Motorhome Dent Repair",
    description: "Large panel dent repair for recreational vehicles, motorhomes, and travel trailers. Mobile service available for your convenience.",
    icon: "🚐",
  },
  {
    title: "Commercial Fleet Services",
    description: "Volume pricing and flexible scheduling for business vehicle fleets. Keep your company vehicles looking professional.",
    icon: "🚛",
  },
  {
    title: "Lease Return Preparation",
    description: "Avoid expensive dealer penalties by fixing dents before returning your lease. We help you pass inspection and save money.",
    icon: "📋",
  },
  {
    title: "Insurance Claim Assistance",
    description: "We handle all paperwork and work directly with your insurance company for hail damage and comprehensive claims.",
    icon: "📄",
  },
];

// Pricing information for rich snippets
const pricingInfo = [
  { service: "Small Door Ding", priceRange: "$75 - $150", time: "30-60 min" },
  { service: "Medium Dent", priceRange: "$150 - $300", time: "1-2 hours" },
  { service: "Large Dent/Crease", priceRange: "$300 - $500", time: "2-4 hours" },
  { service: "Hail Damage (per panel)", priceRange: "$100 - $400", time: "Varies" },
];

// Schema.org structured data
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://haillions.com" },
  { name: "Services", url: "https://haillions.com/services" },
]);

const serviceSchema = generateServiceSchema({
  name: "Paintless Dent Repair Services",
  description: "Professional mobile paintless dent repair services in Houston, TX including hail damage repair, door ding removal, and mobile PDR.",
  url: "https://haillions.com/services",
  provider: "Hail Lions Paintless Dent Repair",
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

        {/* Hero Section */}
        <section className="relative bg-muted py-16 lg:py-24" aria-labelledby="services-hero-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 id="services-hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
                Professional Paintless Dent Repair Services in Houston
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Complete PDR solutions for every type of vehicle damage. From minor door dings 
                to severe hail storms, our certified technicians restore your vehicle to perfection 
                with our lifetime warranty guarantee. Mobile service available throughout Greater Houston.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="main-services-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="main-services-heading" className="sr-only">Our Main Services</h2>
            <div className="space-y-20">
              {mainServices.map((service, index) => (
                <article
                  key={service.title}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.altText}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3" itemProp="name">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4 font-medium">
                      {service.shortDesc}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed" itemProp="description">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href={service.href}>
                        Learn More About {service.title.split('(')[0]}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="py-16 bg-muted" aria-labelledby="pricing-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="pricing-heading" className="text-3xl font-bold mb-4">
                Transparent Pricing for Paintless Dent Repair
              </h2>
              <p className="text-muted-foreground">
                Get an accurate estimate in 30 minutes by submitting photos. These are typical ranges—your actual quote may vary based on damage complexity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingInfo.map((item) => (
                <Card key={item.service} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{item.service}</h3>
                    <p className="text-2xl font-bold text-primary mb-1">{item.priceRange}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              *Final pricing depends on dent size, depth, location, and accessibility. 
              <Link href="/estimate" className="text-primary hover:underline ml-1">Get your free estimate</Link>
            </p>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="additional-services-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="additional-services-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Specialized PDR Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Beyond standard dent repair, we offer specialized solutions for unique vehicles and situations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((item) => (
                <Card key={item.title} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 bg-muted" aria-labelledby="trust-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
                <p className="text-muted-foreground">
                  Every repair is backed by our comprehensive lifetime warranty. If a dent reappears, we fix it free.
                </p>
              </div>
              <div>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Insurance Approved</h3>
                <p className="text-muted-foreground">
                  We work with all major insurance companies and provide complete documentation for claims.
                </p>
              </div>
              <div>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Free Estimates</h3>
                <p className="text-muted-foreground">
                  Get an accurate quote in 30 minutes by submitting photos of your damage. No obligation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Send us photos of your damage and our experts will recommend the best solution. 
              Free estimates in 30 minutes—no obligation, no pressure.
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
