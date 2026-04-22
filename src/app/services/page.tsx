import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateMetadata as genMeta } from "@/lib/utils";
import { ArrowRight, Car, CloudRain, DoorOpen, Home, Star, Shield, Clock } from "lucide-react";

export const metadata: Metadata = genMeta({
  title: "Paintless Dent Repair Services | Houston PDR",
  description: "Complete paintless dent repair services in Houston. Hail damage, door dings, creases, and mobile PDR. Lifetime warranty on all repairs.",
  path: "/services",
});

const services = [
  {
    icon: Car,
    title: "Paintless Dent Repair",
    shortDesc: "Professional PDR for all types of vehicle dents",
    description: "Our signature paintless dent repair service uses specialized tools and techniques to massage dents from behind the panel. This preserves your factory paint finish while completely removing the damage. Perfect for door dings, minor dents, and small creases.",
    features: [
      "Preserves original factory paint",
      "No fillers or sanding required",
      "Maintains vehicle resale value",
      "Same-day service available",
      "Lifetime warranty included",
    ],
    href: "/services/paintless-dent-repair",
    image: "/images/pdr-service.jpg",
  },
  {
    icon: CloudRain,
    title: "Hail Damage Repair",
    shortDesc: "Complete restoration from hail storms",
    description: "Houston weather can be unpredictable. When hail strikes, we're here to restore your vehicle to pre-storm condition. Our hail damage specialists can handle everything from light peppering to severe storm damage with hundreds of dents.",
    features: [
      "Insurance claim assistance",
      "Complete panel restoration",
      "Rental car coordination",
      "Deductible savings programs",
      "Fast turnaround times",
    ],
    href: "/services/hail-damage",
    image: "/images/hail-damage.jpg",
  },
  {
    icon: DoorOpen,
    title: "Door Ding Removal",
    shortDesc: "Quick fixes for parking lot damage",
    description: "Parking lot dings are frustrating but easily fixed. Our door ding removal service targets those annoying small dents that happen in parking lots, restoring your door panels to perfection without any trace of the damage.",
    features: [
      "Quick 30-60 minute repairs",
      "No paint touch-ups needed",
      "Affordable pricing",
      "Mobile service available",
      "Multiple dents discounted",
    ],
    href: "/services/door-dings",
    image: "/images/door-ding.jpg",
  },
  {
    icon: Home,
    title: "Mobile Service",
    shortDesc: "We come to your home or office",
    description: "Can't make it to a shop? No problem. Our fully-equipped mobile units bring professional PDR directly to your location. Whether you're at home, work, or anywhere in the Houston area, we deliver the same quality service on-site.",
    features: [
      "Service at your location",
      "Fully equipped mobile units",
      "Flexible scheduling",
      "Same quality as shop service",
      "No additional mobile fees",
    ],
    href: "/services/mobile-service",
    image: "/images/mobile-service.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="heading-1 mb-4">Our Services</h1>
              <p className="body-large text-muted-foreground">
                Professional paintless dent repair solutions for every type of damage. 
                From minor door dings to severe hail storms, we have the expertise to 
                restore your vehicle to perfection.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="heading-3 mb-2">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-4">{service.shortDesc}</p>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-2 mb-4">Additional Services</h2>
              <p className="body-large text-muted-foreground">
                Specialized solutions for unique dent repair needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Classic Car PDR",
                  description: "Gentle, specialized techniques for vintage and classic vehicles requiring extra care.",
                },
                {
                  title: "Motorcycle Tank Repair",
                  description: "Expert dent removal for motorcycle fuel tanks and fenders.",
                },
                {
                  title: "RV & Motorhome",
                  description: "Large panel dent repair for recreational vehicles and motorhomes.",
                },
                {
                  title: "Commercial Fleet",
                  description: "Volume pricing and scheduling for business vehicle fleets.",
                },
                {
                  title: "Lease Return Prep",
                  description: "Avoid dealer penalties by fixing dents before returning your lease.",
                },
                {
                  title: "Insurance Claims",
                  description: "We handle the paperwork and work directly with your insurance company.",
                },
              ].map((item) => (
                <Card key={item.title} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-2 mb-4">Not Sure What You Need?</h2>
            <p className="body-large opacity-90 max-w-2xl mx-auto mb-8">
              Send us photos of your damage and we&apos;ll recommend the best service for your situation.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/estimate">Get Free Estimate</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
