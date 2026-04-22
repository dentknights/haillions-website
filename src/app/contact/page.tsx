import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateMetadata as genMeta } from "@/lib/utils";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = genMeta({
  title: "Contact Us | Hail Lions Paintless Dent Repair",
  description: "Contact Hail Lions PDR for paintless dent repair in Houston. Call, text, email, or fill out our form for a free estimate.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="heading-1 mb-4">Contact Us</h1>
              <p className="body-large text-muted-foreground">
                Ready to get your dents fixed? Reach out however is most convenient for you. 
                We typically respond within 30 minutes during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Call or Text</h3>
                  <a
                    href="tel:+13467020510"
                    className="text-primary hover:underline"
                  >
                    (346) 702-0510
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mon-Sat, 8am-6pm
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:info@haillions.com"
                    className="text-primary hover:underline"
                  >
                    info@haillions.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    24/7 response within 24hrs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Service Area</h3>
                  <p className="text-muted-foreground">
                    Greater Houston Area
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mobile service to your location
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Mon-Fri: 8am-6pm
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sat: 9am-4pm, Sun: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="heading-3 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(346) 555-0123" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your vehicle and the damage..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Quick Estimate CTA */}
              <div className="bg-muted rounded-2xl p-8 lg:p-12">
                <h2 className="heading-3 mb-4">Need a Faster Response?</h2>
                <p className="text-muted-foreground mb-6">
                  For the fastest service, submit photos of your damage through our 
                  estimate form. Our AI-powered system provides preliminary estimates 
                  instantly, and our team follows up within 30 minutes.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/estimate">Get Free Estimate</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/schedule">Schedule Service</Link>
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4">What to Include</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Clear photos of the damage from multiple angles</li>
                    <li>Vehicle year, make, and model</li>
                    <li>Your location in Houston area</li>
                    <li>Preferred contact method</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-2 mb-4">Service Area</h2>
              <p className="body-large text-muted-foreground">
                We provide mobile paintless dent repair throughout the Greater Houston area.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-accent">
              {/* Placeholder for map - would integrate with Google Maps or similar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">Greater Houston Area</p>
                  <p className="text-muted-foreground">Mobile Service Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
