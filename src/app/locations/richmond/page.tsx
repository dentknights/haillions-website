import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/utils";
import { 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock,
  Car,
  CloudRain,
  DoorOpen,
  Home
} from "lucide-react";

export const metadata: Metadata = {
  title: "Paintless Dent Repair Richmond TX | Mobile PDR",
  description: "Expert mobile paintless dent repair in Richmond, TX. Hail damage, door dings & creases fixed with lifetime warranty. Free estimates. Serving Pecan Grove, Harvest Green & Aliana.",
  keywords: ["paintless dent repair Richmond", "PDR Richmond TX", "hail damage repair Richmond"],
  authors: [{ name: "Hail Lions Paintless Dent Repair" }],
  creator: "Hail Lions PDR",
  publisher: "Hail Lions PDR",
  metadataBase: new URL("https://haillions.com"),
  alternates: {
    canonical: "https://haillions.com/locations/richmond",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haillions.com/locations/richmond",
    siteName: "Hail Lions Paintless Dent Repair",
    title: "Paintless Dent Repair Richmond TX | Mobile PDR",
    description: "Expert mobile paintless dent repair in Richmond, TX. Hail damage, door dings & creases fixed with lifetime warranty. Free estimates. Serving Pecan Grove, Harvest Green & Aliana.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paintless Dent Repair in Richmond, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paintless Dent Repair Richmond TX | Mobile PDR",
    description: "Expert mobile paintless dent repair in Richmond, TX. Hail damage, door dings & creases fixed with lifetime warranty. Free estimates. Serving Pecan Grove, Harvest Green & Aliana.",
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
};

const services = [
  {
    icon: Car,
    title: "Paintless Dent Repair",
    description: "Professional PDR using specialized tools to massage dents from behind the panel. Preserves your factory paint finish.",
  },
  {
    icon: CloudRain,
    title: "Hail Damage Repair",
    description: "Complete hail damage restoration for vehicles affected by Texas storms. From small dings to severe storm damage.",
  },
  {
    icon: DoorOpen,
    title: "Door Ding Removal",
    description: "Quick removal of parking lot dings and shopping cart dents. Mobile service comes to your location.",
  },
  {
    icon: Home,
    title: "Mobile PDR Service",
    description: "We bring professional dent repair to you! Our fully-equipped mobile units serve Richmond and surrounding areas.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Every repair backed by our comprehensive lifetime warranty for as long as you own your vehicle.",
  },
  {
    icon: Clock,
    title: "30-Minute Estimates",
    description: "Send us photos and receive a detailed, accurate estimate within 30 minutes.",
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Rated 4.9/5 stars by over 150 satisfied customers across Greater Houston.",
  },
  {
    icon: CheckCircle,
    title: "Insurance Approved",
    description: "We work with all major insurance companies for hassle-free hail damage claims.",
  },
];

const localBusinessSchema = generateLocalBusinessSchema();
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://haillions.com" },
  { name: "Richmond", url: "https://haillions.com/locations/richmond" },
]);

export default function RichmondLocationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#0a0f1a]">
        <script type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify(localBusinessSchema) } } />
        <script type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify(breadcrumbSchema) } } />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0f1a] via-[#111827] to-[#0a0f1a]" aria-labelledby="hero-heading">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/70 via-[#111827]/50 to-[#0a0f1a]/80 z-10" />
            <Image
              src="/images/hero-dent-repair.jpg"
              alt="Professional paintless dent repair in Richmond"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/20 px-4 py-1.5 text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                Serving Richmond, TX
              </Badge>
              
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-silver mb-6">
                Paintless Dent Repair
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] mt-2">
                  in Richmond
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto leading-relaxed">
                Richmond's trusted mobile PDR service. We serve Pecan Grove, Harvest Green, Aliana, and all Richmond communities. Expert mobile PDR services with lifetime warranty. 
                Free estimates in 30 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0a0f1a] font-semibold text-lg px-8 py-6">
                  <Link href="/estimate">
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#1e3a5f] text-[#e8eaed] hover:bg-[#1e3a5f]/50 text-lg px-8 py-6">
                  <Link href="tel:+13467020510">
                    <Phone className="mr-2 h-5 w-5" />
                    (346) 702-0510
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-[#64748b]">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-[#e8eaed]">4.9/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#60a5fa]" />
                  <span>Lifetime Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#60a5fa]" />
                  <span>Mobile Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28 bg-[#0a0f1a]" aria-labelledby="services-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/20">
                Our Services
              </Badge>
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4 text-silver">
                Professional PDR Services in Richmond
              </h2>
              <p className="text-lg text-[#64748b]">
                From minor door dings to severe hail damage, our certified technicians deliver flawless results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="group bg-[#111827] border-[#1e3a5f] hover:border-[#60a5fa]/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-[#60a5fa]/10 flex items-center justify-center mb-4 group-hover:bg-[#60a5fa]/20 transition-colors">
                      <service.icon className="h-6 w-6 text-[#60a5fa]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-[#e8eaed]">{service.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-[#111827]" aria-labelledby="why-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-[#1e3a5f]">
                  <Image
                    src="/images/pdr-process.jpg"
                    alt="PDR technician working in Richmond"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/20">
                    Why Choose Us
                  </Badge>
                  <h2 id="why-heading" className="text-3xl md:text-4xl font-bold mb-4 text-silver">
                    The Hail Lions Difference in Richmond
                  </h2>
                  <p className="text-lg text-[#64748b] leading-relaxed">
                    We're not just fixing dents—we're restoring your peace of mind. Our commitment to excellence has made us the most trusted PDR service in Richmond.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#60a5fa]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-[#60a5fa]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-[#e8eaed] text-sm">{item.title}</h3>
                        <p className="text-xs text-[#64748b] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f]/50 to-[#0f172a]/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-silver">
              Ready to Restore Your Vehicle?
            </h2>
            <p className="text-lg text-[#94a3b8] mb-8 max-w-2xl mx-auto">
              Get a free estimate in 30 minutes. Our mobile team serves all of Richmond and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0a0f1a] font-semibold text-lg px-10 py-6">
                <Link href="/estimate">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#1e3a5f] text-[#e8eaed] hover:bg-[#1e3a5f]/50 text-lg px-10 py-6">
                <Link href="tel:+13467020510">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
