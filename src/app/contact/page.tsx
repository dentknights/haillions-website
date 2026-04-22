import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/utils";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";

// Enhanced SEO metadata for contact page
export const metadata: Metadata = {
  title: "Contact Hail Lions PDR | Houston Paintless Dent Repair (281) 352-5434",
  description: "Contact Hail Lions PDR for mobile paintless dent repair in Houston, TX. Call (281) 352-5434 or request a free estimate online. Serving Katy, Sugar Land, The Woodlands & Greater Houston.",
  keywords: [
    "contact Hail Lions PDR",
    "paintless dent repair Houston phone",
    "PDR Houston contact",
    "hail damage repair Houston",
    "mobile dent repair Houston",
    "dent repair quote Houston",
    "Houston PDR company contact",
    "paintless dent repair estimate",
    "car dent repair contact",
    "hail damage claim Houston",
    "door ding repair Houston",
    "auto dent repair phone number",
  ],
  alternates: {
    canonical: "https://haillions.com/contact",
  },
  openGraph: {
    title: "Contact Hail Lions PDR | Houston Paintless Dent Repair",
    description: "Contact us for mobile PDR in Houston. Call (281) 352-5434 or request a free estimate. Serving Greater Houston area.",
    url: "https://haillions.com/contact",
  },
};

// Contact methods with detailed info
const contactMethods = [
  {
    icon: Phone,
    title: "Call or Text",
    value: "(281) 352-5434",
    href: "tel:+12813525434",
    description: "Fastest response for urgent repairs",
    availability: "Mon-Sat: 8am-6pm",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@haillions.com",
    href: "mailto:info@haillions.com",
    description: "For general inquiries and estimates",
    availability: "24/7 - Reply within 24hrs",
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Greater Houston",
    href: "#service-area",
    description: "Mobile service to your location",
    availability: "Houston, Katy, Sugar Land & more",
    action: "View Areas",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Sat",
    href: "/schedule",
    description: "Schedule at your convenience",
    availability: "Mon-Fri: 8am-6pm, Sat: 9am-4pm",
    action: "Book Online",
  },
];

// Service areas for local SEO
const serviceAreas = [
  { name: "Houston", type: "Main" },
  { name: "Katy", type: "West" },
  { name: "Sugar Land", type: "Southwest" },
  { name: "The Woodlands", type: "North" },
  { name: "Pearland", type: "Southeast" },
  { name: "Cypress", type: "Northwest" },
  { name: "Spring", type: "North" },
  { name: "Tomball", type: "Northwest" },
  { name: "Humble", type: "Northeast" },
  { name: "Kingwood", type: "Northeast" },
  { name: "Missouri City", type: "Southwest" },
  { name: "Richmond", type: "West" },
];

// FAQ for contact page
const contactFAQs = [
  {
    question: "How quickly can I get an estimate for dent repair?",
    answer: "We provide free estimates in 30 minutes or less. Simply submit photos of your damage through our online form, and our AI-powered system will give you an instant preliminary estimate. Our team then reviews and confirms within 30 minutes during business hours.",
  },
  {
    question: "Do you offer same-day paintless dent repair service?",
    answer: "Yes! For most door dings and small dents, we offer same-day service. Hail damage repairs typically take 1-3 days depending on severity. Our mobile service comes to your location, so there's no need to drop off your vehicle.",
  },
  {
    question: "What areas of Houston do you service?",
    answer: "We provide mobile paintless dent repair throughout the entire Greater Houston area including Houston, Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, Tomball, Humble, Kingwood, Missouri City, Richmond, and surrounding communities.",
  },
  {
    question: "How do I file an insurance claim for hail damage?",
    answer: "We handle insurance claims for you! Simply contact us with your damage photos and insurance information. We work directly with all major insurance companies including State Farm, Allstate, Geico, and Progressive to process your hail damage claim.",
  },
];

// Schema.org structured data
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://haillions.com" },
  { name: "Contact Us", url: "https://haillions.com/contact" },
]);

const localBusinessSchema = generateLocalBusinessSchema();

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

        {/* Hero Section */}
        <section className="relative bg-muted py-16 lg:py-24" aria-labelledby="contact-hero-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 id="contact-hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
                Contact Hail Lions PDR
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ready to restore your vehicle? Reach out however is most convenient for you. 
                We typically respond within 30 minutes during business hours and offer 
                free estimates for all paintless dent repair services in Houston.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="contact-methods-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="contact-methods-heading" className="sr-only">Contact Methods</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method) => (
                <Card key={method.title} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    <a
                      href={method.href}
                      className="text-primary font-medium hover:underline mb-2"
                    >
                      {method.value}
                    </a>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <p className="text-xs text-muted-foreground mb-4">{method.availability}</p>
                    <Button asChild variant="outline" size="sm" className="mt-auto">
                      <a href={method.href}>{method.action}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we&apos;ll get back to you within 30 minutes during business hours.
                </p>
                <form className="space-y-6" action="/api/contact" method="POST">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(346) 555-0123" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Your Location</Label>
                    <Input id="location" name="location" placeholder="e.g., Katy, Houston, Sugar Land" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How Can We Help? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your vehicle damage, including year/make/model and location of dents..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted about your dent repair inquiry.
                  </p>
                </form>
              </div>

              {/* Quick Actions */}
              <div className="space-y-8">
                {/* Fastest Option */}
                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Need the Fastest Response?</h3>
                  <p className="opacity-90 mb-6">
                    Submit photos of your damage through our estimate form for an instant AI-powered 
                    preliminary estimate. Our team reviews and confirms within 30 minutes.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="w-full">
                    <Link href="/estimate">
                      Get Free Estimate
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* What to Expect */}
                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                  <ul className="space-y-4">
                    {[
                      "We review your message within 30 minutes (during business hours)",
                      "Our team assesses your damage and provides an estimate",
                      "We schedule a convenient time for mobile service",
                      "Our technician arrives and repairs your vehicle on-site",
                      "You inspect the work and pay only when satisfied",
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                    <p className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:+12813525434" className="hover:underline">(281) 352-5434</a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:info@haillions.com" className="hover:underline">info@haillions.com</a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Mon-Fri: 8am-6pm, Sat: 9am-4pm</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section id="service-area" className="py-16 lg:py-24 bg-muted" aria-labelledby="service-area-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="service-area-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Mobile PDR Service Area
              </h2>
              <p className="text-lg text-muted-foreground">
                We bring professional paintless dent repair to your location throughout 
                the Greater Houston area. No need to drive to a shop—we come to you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background"
                >
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium">{area.name}</span>
                    <span className="text-xs text-muted-foreground block">{area.type} Houston</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Don&apos;t see your area? We may still be able to help!{" "}
              <a href="tel:+12813525434" className="text-primary hover:underline">Call us at (281) 352-5434</a>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Quick answers about contacting us and getting started with your dent repair.
                </p>
              </div>
              <div className="space-y-6">
                {contactFAQs.map((faq, index) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Don&apos;t let dents diminish your vehicle&apos;s appearance or value. 
              Contact us now for a free, no-obligation estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/estimate">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg">
                <a href="tel:+12813525434">Call (281) 352-5434</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
