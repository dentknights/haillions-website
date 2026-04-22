import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateBreadcrumbSchema } from "@/lib/utils";
import { Award, Users, Clock, MapPin, CheckCircle, Star, Phone } from "lucide-react";

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: "About Hail Lions PDR | Houston's Trusted Paintless Dent Repair Experts",
  description: "Meet the team behind Houston's premier mobile paintless dent repair service. 10+ years experience, 5,000+ vehicles repaired, lifetime warranty. Serving Katy, Sugar Land, The Woodlands & Greater Houston.",
  keywords: [
    "about Hail Lions PDR",
    "paintless dent repair company Houston",
    "PDR experts Houston",
    "mobile dent repair team",
    "hail damage repair company",
    "Houston auto dent repair",
    "paintless dent repair history",
    "certified PDR technicians",
    "dent repair service area Houston",
    "Houston PDR company",
  ],
  alternates: {
    canonical: "https://haillions.com/about",
  },
  openGraph: {
    title: "About Hail Lions PDR | Houston's Trusted Paintless Dent Repair Experts",
    description: "Meet the team behind Houston's premier mobile PDR service. 10+ years experience, 5,000+ vehicles repaired, lifetime warranty.",
    url: "https://haillions.com/about",
  },
};

// Company statistics with context
const companyStats = [
  { value: "10+", label: "Years of PDR Experience", description: "Serving Houston since 2014" },
  { value: "5,000+", label: "Vehicles Repaired", description: "Cars, trucks, SUVs & classics" },
  { value: "98%", label: "Customer Satisfaction", description: "Based on post-service surveys" },
  { value: "4.9", label: "Google Rating", description: "From 150+ verified reviews" },
];

// Core values with detailed descriptions
const coreValues = [
  {
    icon: Award,
    title: "Excellence in Every Repair",
    description: "We never settle for 'good enough.' Every dent repair must meet our exacting standards before we consider it complete. Our certified technicians use only the finest PDR tools and techniques.",
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    description: "Your satisfaction drives everything we do. From the first phone call to the final inspection, we're committed to exceeding your expectations with transparent pricing and exceptional service.",
  },
  {
    icon: Clock,
    title: "Respect for Your Time",
    description: "We know you're busy. That's why we offer 30-minute estimates, flexible scheduling, and efficient repairs that get you back on the road quickly—often the same day.",
  },
  {
    icon: MapPin,
    title: "True Mobile Convenience",
    description: "Our fully-equipped mobile units come to your home, office, or dealership anywhere in Greater Houston. No need to drop off your vehicle or arrange alternate transportation.",
  },
];

// PDR benefits with SEO-rich content
const pdrBenefits = [
  {
    title: "Preserves Factory Paint Finish",
    description: "Unlike traditional body shops that use fillers and repaint, PDR maintains your vehicle's original factory paint, ensuring perfect color match and finish.",
  },
  {
    title: "Maintains Resale Value",
    description: "PDR repairs don't appear on vehicle history reports and preserve your car's value. No CarFax entries means higher resale prices when you sell or trade.",
  },
  {
    title: "Faster Turnaround",
    description: "Most door dings repaired in 1-2 hours. Hail damage typically takes 1-3 days versus weeks at a traditional body shop.",
  },
  {
    title: "Environmentally Friendly",
    description: "No paint, no fillers, no harmful chemicals. PDR is the green choice for dent repair, producing zero VOC emissions.",
  },
  {
    title: "Cost Effective",
    description: "Paintless dent repair typically costs 40-60% less than traditional body shop repairs while delivering superior results.",
  },
  {
    title: "Lifetime Warranty",
    description: "Every repair is backed by our comprehensive lifetime warranty. If a dent ever reappears, we fix it free—guaranteed.",
  },
];

// Service areas for local SEO
const serviceAreas = [
  { city: "Houston", region: "Downtown & Metro" },
  { city: "Katy", region: "West Houston" },
  { city: "Sugar Land", region: "Southwest" },
  { city: "The Woodlands", region: "North Houston" },
  { city: "Pearland", region: "Southeast" },
  { city: "Cypress", region: "Northwest" },
  { city: "Spring", region: "North" },
  { city: "Tomball", region: "Northwest" },
  { city: "Humble", region: "Northeast" },
  { city: "Kingwood", region: "Northeast" },
  { city: "Missouri City", region: "Southwest" },
  { city: "Richmond", region: "West" },
  { city: "Rosenberg", region: "Southwest" },
  { city: "Bellaire", region: "Inner Loop" },
  { city: "West University", region: "Inner Loop" },
  { city: "Memorial", region: "West" },
];

// Schema for breadcrumbs
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://haillions.com" },
  { name: "About Us", url: "https://haillions.com/about" },
]);

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero Section - Company Story */}
        <section className="relative bg-muted py-16 lg:py-24" aria-labelledby="about-hero-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 id="about-hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
                  Houston's Trusted Paintless Dent Repair Experts
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Hail Lions PDR was founded in 2014 with a simple mission: provide the highest quality 
                  paintless dent repair service in Houston. What began as a one-person mobile operation 
                  has grown into a team of certified PDR specialists serving the entire Greater Houston area.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our name reflects our approach—we tackle every dent with the precision and 
                  power of a lion, while treating every customer like royalty. We understand 
                  that your vehicle is a significant investment, and we treat it with the care 
                  and respect it deserves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/estimate">Get Your Free Estimate</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="tel:+13467020510">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (346) 702-0510
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Hail Lions PDR certified technicians providing mobile paintless dent repair service in Houston"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Social Proof */}
        <section className="py-16 bg-primary text-primary-foreground" aria-label="Company statistics">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {companyStats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold">{stat.value}</div>
                  <div className="font-medium">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="values-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mb-4">
                The Values That Drive Us
              </h2>
              <p className="text-lg text-muted-foreground">
                These core principles guide every paintless dent repair we perform and every customer interaction we have.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value) => (
                <Card key={value.title} className="h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Paintless Dent Repair */}
        <section className="py-16 lg:py-24 bg-muted" aria-labelledby="why-pdr-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 id="why-pdr-heading" className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Paintless Dent Repair?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Paintless Dent Repair (PDR) is the modern, superior alternative to traditional 
                  body shop repairs. Instead of filling, sanding, and repainting damaged 
                  areas, our certified technicians use specialized tools to gently massage dents out from 
                  behind the panel, preserving your vehicle's original finish.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pdrBenefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">{benefit.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pdr-process-detail.jpg"
                  alt="Certified PDR technician using specialized tools to repair hail damage without painting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Area - Local SEO */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="service-area-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="service-area-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Mobile PDR Service Area
              </h2>
              <p className="text-lg text-muted-foreground">
                We proudly serve the entire Greater Houston area with mobile paintless dent repair. 
                Our technicians come to your location—home, office, or dealership.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area.city}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium block">{area.city}</span>
                    <span className="text-xs text-muted-foreground">{area.region}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Don&apos;t see your area? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>—we may still be able to help!
            </p>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted" aria-labelledby="trust-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Why Houston Drivers Trust Us
              </h2>
              <p className="text-lg text-muted-foreground">
                We&apos;ve built our reputation on quality workmanship, honest pricing, and exceptional customer service.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
                <p className="text-muted-foreground">
                  Our PDR specialists are fully certified and undergo continuous training to stay current with the latest techniques.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">5-Star Reviews</h3>
                <p className="text-muted-foreground">
                  Our 4.9-star Google rating from 150+ reviews reflects our commitment to customer satisfaction on every repair.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Insurance Approved</h3>
                <p className="text-muted-foreground">
                  We work with all major insurance companies for hail damage claims and provide documentation for your records.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Hail Lions Difference?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied Houston drivers who trust us with their vehicles. 
              Get your free estimate in 30 minutes—no obligation, no pressure.
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
