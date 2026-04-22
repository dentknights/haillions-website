import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateMetadata as genMeta } from "@/lib/utils";
import { Award, Users, Clock, MapPin, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = genMeta({
  title: "About Us | Hail Lions Paintless Dent Repair",
  description: "Learn about Hail Lions PDR, Houston's premier paintless dent repair company. Our story, values, and commitment to excellence.",
  path: "/about",
});

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5,000+", label: "Vehicles Repaired" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "4.9", label: "Average Rating" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for 'good enough.' Every repair must meet our exacting standards before we consider it complete.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. From the first call to the final inspection, we're committed to exceeding your expectations.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "We respect your time. Fast estimates, flexible scheduling, and efficient repairs get you back on the road quickly.",
  },
  {
    icon: MapPin,
    title: "Convenience",
    description: "Mobile service means we work around your schedule and location, not the other way around.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="heading-1 mb-4">The King of Dent Repair</h1>
                <p className="body-large text-muted-foreground mb-6">
                  Hail Lions PDR was founded with a simple mission: provide the highest quality 
                  paintless dent repair service in Houston. What started as a one-person operation 
                  has grown into a team of certified PDR specialists serving the entire Greater 
                  Houston area.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our name reflects our approach—we tackle every dent with the precision and 
                  power of a lion, while treating every customer like royalty. We understand 
                  that your vehicle is a significant investment, and we treat it with the care 
                  it deserves.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/estimate">Get Your Free Estimate</Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Hail Lions PDR team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-2 mb-4">Our Values</h2>
              <p className="body-large text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why PDR */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-2 mb-4">Why Paintless Dent Repair?</h2>
                <p className="body-large text-muted-foreground mb-6">
                  Paintless Dent Repair is the modern, superior alternative to traditional 
                  body shop repairs. Instead of filling, sanding, and repainting damaged 
                  areas, PDR technicians use specialized tools to massage dents out from 
                  behind the panel.
                </p>
                <ul className="space-y-3">
                  {[
                    "Preserves your original factory paint finish",
                    "Maintains your vehicle's resale value",
                    "No color matching issues or overspray",
                    "Faster turnaround times",
                    "More environmentally friendly",
                    "Often costs less than traditional repairs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/pdr-process-detail.jpg"
                  alt="PDR process demonstration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-2 mb-4">Service Area</h2>
              <p className="body-large text-muted-foreground">
                We proudly serve the entire Greater Houston area with mobile paintless dent repair.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Houston", "Katy", "Sugar Land", "The Woodlands",
                "Pearland", "Cypress", "Spring", "Tomball",
                "Humble", "Kingwood", "Missouri City", "Richmond",
                "Rosenberg", "Bellaire", "West University", "Memorial",
              ].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Don&apos;t see your area? Contact us—we may still be able to help!
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-2 mb-4">Ready to Experience the Hail Lions Difference?</h2>
            <p className="body-large opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied Houston drivers who trust us with their vehicles.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/estimate">Get Your Free Estimate</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
