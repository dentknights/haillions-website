import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, LocalBusinessSchema, ServiceSchema, FAQSchema } from "@/components/seo";
import {
  Car,
  CloudRain,
  DoorOpen,
  Home,
  Wrench,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Paintless Dent Repair Services | Houston PDR Experts",
  description: "Professional paintless dent repair services in Houston. Hail damage, door dings, creases, and bumper repair. Mobile service available. Free estimates with lifetime warranty.",
  keywords: [
    "paintless dent repair services",
    "PDR services Houston",
    "hail damage repair",
    "door ding removal",
    "mobile dent repair",
    "dent removal services",
    "auto dent repair Houston",
    "bumper repair",
    "crease removal",
  ],
  alternates: {
    canonical: "https://haillions.com/services",
  },
  openGraph: {
    title: "Paintless Dent Repair Services | Houston PDR Experts",
    description: "Professional paintless dent repair services in Houston. Hail damage, door dings, creases, and bumper repair with lifetime warranty.",
    url: "https://haillions.com/services",
  },
};

const services = [
  {
    icon: Car,
    title: "Paintless Dent Repair",
    description: "Our signature PDR service removes dents without affecting your factory paint. Using specialized tools, we access the backside of panels and gently massage the metal back to its original form.",
    href: "/services/paintless-dent-repair",
    features: ["Preserves factory paint", "No fillers or sanding", "Same-day service", "Lifetime warranty"],
    priceRange: "$75 - $500",
  },
  {
    icon: CloudRain,
    title: "Hail Damage Repair",
    description: "Complete hail damage restoration for vehicles affected by Texas storms. From small dings to severe storm damage, we restore your car to pre-storm condition with insurance claim assistance.",
    href: "/services/hail-damage",
    features: ["Insurance approved", "Complete restoration", "Rapid turnaround", "Deductible assistance"],
    priceRange: "$300 - $3,000+",
  },
  {
    icon: DoorOpen,
    title: "Door Ding Removal",
    description: "Quick removal of parking lot dings and shopping cart dents. Our mobile service comes to your home or office for maximum convenience with flawless results.",
    href: "/services/door-dings",
    features: ["Mobile service", "Under 1 hour repair", "No paint needed", "Satisfaction guaranteed"],
    priceRange: "$75 - $200",
  },
  {
    icon: Wrench,
    title: "Crease Removal",
    description: "Specialized techniques for removing sharp creases and complex dents that other PDR technicians won't touch. Advanced tools and years of experience make the impossible possible.",
    href: "/services/creases",
    features: ["Advanced techniques", "Complex dents", "Sharp crease repair", "Expert technicians"],
    priceRange: "$150 - $600",
  },
  {
    icon: Car,
    title: "Bumper Repair",
    description: "Expert bumper dent removal and repair. We can fix most plastic and metal bumper dents without expensive replacements or repainting.",
    href: "/services/bumper-repair",
    features: ["Plastic & metal", "No painting needed", "Cost-effective", "Quick turnaround"],
    priceRange: "$100 - $400",
  },
  {
    icon: Home,
    title: "Mobile PDR Service",
    description: "We bring professional dent repair to you! Our fully-equipped mobile units serve Houston and surrounding areas at your home, office, or dealership.",
    href: "/services/mobile-service",
    features: ["We come to you", "Fully equipped", "Flexible scheduling", "All Houston areas"],
    priceRange: "Same as shop rates",
  },
];

const faqs = [
  {
    question: "What types of dents can be repaired with PDR?",
    answer: "Paintless Dent Repair works on most dents where the paint is intact, including door dings, hail damage, minor creases, and small dents from shopping carts or other impacts. However, PDR may not be suitable for dents with cracked paint, sharp creases on body lines, or damage near panel edges.",
  },
  {
    question: "How long does paintless dent repair take?",
    answer: "Most door dings and small dents can be repaired in 1-2 hours. Hail damage repairs typically take 1-3 days depending on severity. Our mobile service comes to your location, so there's no downtime dropping off or picking up your vehicle.",
  },
  {
    question: "Will PDR damage my paint?",
    answer: "No, paintless dent repair is specifically designed to preserve your factory paint finish. Our technicians use specialized tools and techniques to massage the metal from behind the panel without disturbing the paint surface.",
  },
  {
    question: "Is PDR cheaper than traditional body shop repair?",
    answer: "Yes, PDR is typically 40-60% less expensive than traditional body shop repairs. Since there's no painting, sanding, or fillers involved, the process is faster and more cost-effective while maintaining your vehicle's original finish and value.",
  },
];

const breadcrumbItems = [
  { name: "Services", url: "/services", isCurrent: true },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#0a0f1a] min-h-screen">
        {/* Schema Markup */}
        <LocalBusinessSchema />
        <ServiceSchema
          name="Paintless Dent Repair Services"
          description="Professional paintless dent repair services in Houston including hail damage, door dings, creases, and mobile service."
          url="https://haillions.com/services"
        />
        <FAQSchema faqs={faqs} />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#111827] to-[#0a0f1a]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="max-w-3xl mx-auto text-center mt-8">
              <Badge className="mb-6 bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/20 px-4 py-1.5">
                <Star className="w-3 h-3 mr-1 fill-[#60a5fa]" />
                Houston's #1 PDR Service
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-silver mb-6">
                Professional Paintless
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] to-[#60a5fa]">
                  Dent Repair Services
                </span>
              </h1>
              
              <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto leading-relaxed">
                From minor door dings to severe hail damage, our certified PDR technicians 
                deliver flawless results using state-of-the-art techniques.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0a0f1a] font-semibold text-lg px-8 py-6">
                  <Link href="/estimate">
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#1e3a5f] text-[#e8eaed] hover:bg-[#1e3a5f]/50 text-lg px-8 py-6">
                  <Link href="tel:+12813525434">
                    <Phone className="mr-2 h-5 w-5" />
                    (281) 352-5434
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-[#111827]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="group bg-[#0a0f1a] border-[#1e3a5f] hover:border-[#60a5fa]/50 transition-all duration-300 flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="w-14 h-14 rounded-xl bg-[#60a5fa]/10 flex items-center justify-center mb-6 group-hover:bg-[#60a5fa]/20 transition-colors">
                      <service.icon className="h-7 w-7 text-[#60a5fa]" />
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-3 text-[#e8eaed]">{service.title}</h2>
                    <p className="text-[#64748b] mb-6 leading-relaxed flex-grow">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                          <CheckCircle className="h-4 w-4 text-[#60a5fa] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-[#1e3a5f]">
                      <span className="text-[#60a5fa] font-semibold">{service.priceRange}</span>
                      <Link 
                        href={service.href}
                        className="inline-flex items-center text-[#60a5fa] font-medium hover:text-[#93c5fd] transition-colors group/link"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose PDR Section */}
        <section className="py-20 lg:py-32 bg-[#0a0f1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-[#1e3a5f]">
                  <Image
                    src="/images/pdr-process.jpg"
                    alt="PDR technician repairing hail damage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/20">
                    Why Choose PDR
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-silver">
                    The Smart Choice for Dent Repair
                  </h2>
                  <p className="text-lg text-[#64748b] leading-relaxed">
                    Paintless Dent Repair offers numerous advantages over traditional body shop methods. 
                    Keep your factory paint, save money, and get your vehicle back faster.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Shield, title: "Factory Paint Preserved", desc: "No repainting means no color matching issues" },
                    { icon: Clock, title: "Faster Turnaround", desc: "Most repairs completed in hours, not days" },
                    { icon: Star, title: "Cost Effective", desc: "40-60% less than traditional body shops" },
                    { icon: CheckCircle, title: "Environmentally Friendly", desc: "No paint, fillers, or harmful chemicals" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#60a5fa]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-[#60a5fa]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-[#e8eaed]">{item.title}</h3>
                        <p className="text-sm text-[#64748b]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32 bg-[#111827]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/20">
                  FAQ
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-silver">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <article key={index} className="bg-[#0a0f1a] border border-[#1e3a5f] rounded-xl p-6 hover:border-[#60a5fa]/30 transition-colors">
                    <h3 className="font-semibold text-lg mb-3 text-[#e8eaed] flex items-start gap-3">
                      <span className="text-[#60a5fa]">Q:</span>
                      {faq.question}
                    </h3>
                    <p className="text-[#64748b] leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#0f172a] to-[#0a0f1a]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-silver">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-[#93c5fd] mb-8">
                Get your free estimate in 30 minutes. Our mobile PDR service comes to you anywhere in Greater Houston.
              </p>
              <Button asChild size="lg" className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0a0f1a] font-semibold text-lg px-10 py-6">
                <Link href="/estimate">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
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
