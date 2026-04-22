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
  Zap,
  Calendar,
  Camera,
} from "lucide-react";

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
};

const services = [
  {
    icon: Car,
    title: "Paintless Dent Repair",
    description: "Professional PDR using specialized tools to massage dents from behind the panel. Preserves your factory paint finish and maintains vehicle value.",
    href: "/services/paintless-dent-repair",
  },
  {
    icon: CloudRainIcon,
    title: "Hail Damage Repair",
    description: "Complete hail damage restoration for vehicles affected by Texas storms. From small dings to severe storm damage, we restore your car to pre-storm condition.",
    href: "/services/hail-damage",
  },
  {
    icon: DoorOpenIcon,
    title: "Door Ding Removal",
    description: "Quick removal of parking lot dings and shopping cart dents. Mobile service comes to your home or office. No paint, no fillers—just flawless results.",
    href: "/services/door-dings",
  },
  {
    icon: Home,
    title: "Mobile PDR Service",
    description: "We bring professional dent repair to you! Our fully-equipped mobile units serve Houston and surrounding areas at your home, office, or dealership.",
    href: "/services/mobile-service",
  },
];

const valuePropositions = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Every repair backed by our comprehensive lifetime warranty for as long as you own your vehicle.",
  },
  {
    icon: Clock,
    title: "30-Minute Estimates",
    description: "Send us photos and receive a detailed, accurate estimate within 30 minutes with AI-powered analysis.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description: "Not completely satisfied? You pay nothing. We stand behind every dent we remove with a no-risk guarantee.",
  },
  {
    icon: Wrench,
    title: "Factory Finish Preserved",
    description: "No fillers, no sanding, no repainting. Your original factory paint stays intact, maintaining resale value.",
  },
];

const testimonials = [
  {
    name: "Michael Rodriguez",
    location: "Katy, TX",
    rating: 5,
    text: "Hail Lions saved my truck after a major hailstorm. The mobile service came to my office, and the results were incredible. Can't even tell there was ever any damage!",
    vehicle: "2022 Ford F-150",
  },
  {
    name: "Sarah Chen",
    location: "Sugar Land, TX",
    rating: 5,
    text: "Fast, professional, and fairly priced. They removed a nasty door ding from my BMW in under an hour right in my driveway. The convenience is unmatched!",
    vehicle: "2021 BMW X5",
  },
  {
    name: "James Thompson",
    location: "The Woodlands, TX",
    rating: 5,
    text: "After getting quotes from 3 body shops, Hail Lions was half the price with better results. My classic Mustang looks perfect again. True PDR artists.",
    vehicle: "1967 Ford Mustang",
  },
];

const faqs = [
  {
    question: "What is paintless dent repair (PDR) and how does it work?",
    answer: "Paintless Dent Repair (PDR) is a specialized technique that removes dents and dings from vehicle panels without disturbing the original paint finish. Our certified technicians use precision tools to access the backside of damaged panels and gently massage the metal back to its original form.",
  },
  {
    question: "How much does paintless dent repair cost in Houston?",
    answer: "Paintless dent repair in Houston typically costs between $75-$150 for small door dings, $150-$300 for medium dents, and $300-$800+ for hail damage depending on severity. Hail Lions offers free estimates in 30 minutes and competitive pricing—often 40-60% less than traditional body shops.",
  },
  {
    question: "How long does paintless dent repair take?",
    answer: "Most door dings and small dents can be repaired in 1-2 hours. Hail damage repairs typically take 1-3 days depending on severity. Our mobile service comes to your location, so there's no downtime dropping off or picking up your vehicle.",
  },
  {
    question: "Do you work with insurance companies for hail damage claims?",
    answer: "Yes, we work with all major insurance providers including State Farm, Allstate, Geico, Progressive, and USAA for hail damage claims. We can handle the entire claims process for you and often save you from paying a deductible.",
  },
];

const serviceAreas = [
  "Houston", "Katy", "Sugar Land", "The Woodlands", "Cypress", 
  "Spring", "Pearland", "Kingwood", "Humble", "Missouri City",
  "Richmond", "Rosenberg", "Tomball", "Magnolia", "Conroe"
];

const localBusinessSchema = generateLocalBusinessSchema();
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://haillions.com" },
]);

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
      <main id="main-content" className="bg-black">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" aria-labelledby="hero-heading">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
            <Image
              src="/images/hero-dent-repair.jpg"
              alt="Professional paintless dent repair"
              fill
              className="object-cover opacity-30"
              priority
              sizes="100vw"
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-8 bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 px-4 py-1.5 text-sm">
                <Star className="w-3 h-3 mr-1 fill-blue-400" />
                Houston&apos;s #1 Rated Mobile PDR Service
              </Badge>
              
              <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
                Paintless Dent Repair
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                  Done Right
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Expert mobile paintless dent repair serving Houston and Greater Houston area. 
                Hail damage, door dings, and creases restored to perfection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 glow-blue">
                  <Link href="/estimate">
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-700 text-white hover:bg-white/5 text-lg px-10 py-6">
                  <Link href="tel:+13467020510">
                    <Phone className="mr-2 h-5 w-5" />
                    (346) 702-0510
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">4.9/5</span>
                  <span className="text-sm">150+ Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Lifetime Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Mobile Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 lg:py-32 bg-black" aria-labelledby="services-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
                Our Services
              </Badge>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Professional Paintless Dent Repair
              </h2>
              <p className="text-lg text-gray-500">
                From minor door dings to severe hail damage, our certified PDR technicians 
                deliver flawless results using state-of-the-art techniques.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="group bg-[#0a0a0a] border-[#222222] card-hover">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                      <service.icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 lg:py-32 bg-[#0a0a0a]" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-[#222222]">
                  <Image
                    src="/images/pdr-process.jpg"
                    alt="PDR technician repairing hail damage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-[#222222] p-6 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">150+</p>
                      <p className="text-sm text-gray-500">5-Star Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
                    Why Choose Us
                  </Badge>
                  <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    The Hail Lions Difference
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    We&apos;re not just fixing dents—we&apos;re restoring your peace of mind. 
                    Our commitment to excellence has made us Houston&apos;s most trusted paintless dent repair service.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {valuePropositions.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Link href="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 lg:py-32 bg-black" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
                Simple Process
              </Badge>
              <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <p className="text-lg text-gray-500">
                Getting your dents fixed has never been easier. Three simple steps to a flawless finish.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              
              {[
                {
                  step: "01",
                  icon: Camera,
                  title: "Submit Photos",
                  description: "Take clear photos of the damage and submit them through our online form. Our AI-powered analysis provides an instant preliminary estimate.",
                },
                {
                  step: "02",
                  icon: Zap,
                  title: "Get Your Quote",
                  description: "Our PDR experts review your submission and provide a detailed estimate within 30 minutes. No hidden fees, no surprises—just honest pricing.",
                },
                {
                  step: "03",
                  icon: Calendar,
                  title: "We Come to You",
                  description: "Schedule a convenient time and location anywhere in Greater Houston. Our mobile unit arrives fully equipped to restore your vehicle.",
                },
              ].map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-blue-500 flex items-center justify-center text-xs font-bold text-blue-400">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg glow-blue">
                <Link href="/estimate">
                  Start Your Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32 bg-[#0a0a0a]" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
                Testimonials
              </Badge>
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-500">
                Real reviews from real customers across Houston, Katy, Sugar Land, and The Woodlands.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="bg-[#111111] border-[#222222]">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed text-lg">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="border-t border-[#222222] pt-4">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-xs text-blue-400 mt-1">{testimonial.vehicle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-black border-y border-[#222222]" aria-labelledby="areas-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="areas-heading" className="text-3xl font-bold mb-4 text-white">
                Mobile Service Areas
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We bring professional paintless dent repair to your location throughout the Greater Houston area
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#0a0a0a] border border-[#222222] text-gray-400 hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                  <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-black" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
                  FAQ
                </Badge>
                <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-500">
                  Everything you need to know about PDR in Houston.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <article key={index} className="bg-[#0a0a0a] border border-[#222222] rounded-xl p-6 hover:border-blue-500/30 transition-colors" itemScope itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-lg mb-3 text-white flex items-start gap-3" itemProp="name">
                      <span className="text-blue-400">Q:</span>
                      {faq.question}
                    </h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-500 leading-relaxed pl-6" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-black" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Restore Your Vehicle?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get your free estimate in 30 minutes. Our mobile PDR service comes to you anywhere in Greater Houston.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-10 py-6">
                  <Link href="/estimate">
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 py-6">
                  <Link href="tel:+13467020510">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (346) 702-0510
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-blue-200 text-sm">
                Lifetime warranty on all repairs • 100% satisfaction guaranteed
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
