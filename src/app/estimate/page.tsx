import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateBreadcrumbSchema } from "@/lib/utils";
import { 
  Upload, Camera, Clock, Shield, CheckCircle, 
  Phone, ArrowRight, Star, Zap, Car 
} from "lucide-react";

// Enhanced SEO metadata for estimate page
export const metadata: Metadata = {
  title: "Free Paintless Dent Repair Estimate Houston | Get Quote in 30 Minutes",
  description: "Get a free paintless dent repair estimate in Houston, TX. Upload photos for instant AI analysis. Hail damage, door dings, creases. Serving Katy, Sugar Land, The Woodlands. No obligation.",
  keywords: [
    "free dent repair estimate Houston",
    "paintless dent repair quote",
    "PDR estimate Houston",
    "hail damage estimate",
    "door ding repair quote",
    "dent repair cost Houston",
    "mobile dent repair estimate",
    "car dent repair quote",
    "free PDR estimate",
    "hail damage repair cost",
    "dent removal price Houston",
    "auto dent repair estimate",
  ],
  alternates: {
    canonical: "https://haillions.com/estimate",
  },
  openGraph: {
    title: "Free Paintless Dent Repair Estimate Houston | Get Quote in 30 Minutes",
    description: "Get a free PDR estimate in Houston. Upload photos for instant AI analysis. Hail damage, door dings, creases. No obligation.",
    url: "https://haillions.com/estimate",
  },
};

// How it works steps
const processSteps = [
  {
    icon: Upload,
    step: "1",
    title: "Upload Photos",
    description: "Take clear photos of your vehicle damage from multiple angles and upload them here. Our system accepts up to 6 photos.",
  },
  {
    icon: Zap,
    step: "2",
    title: "AI Analysis",
    description: "Our AI-powered system instantly analyzes your photos to assess damage severity and provide a preliminary cost estimate.",
  },
  {
    icon: Clock,
    step: "3",
    title: "Expert Review",
    description: "Within 30 minutes, our certified PDR technicians review the AI assessment and confirm or adjust the estimate.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Schedule Repair",
    description: "Approve the estimate and schedule your mobile repair at your home, office, or dealership at your convenience.",
  },
];

// Trust signals
const trustSignals = [
  { icon: Shield, title: "Lifetime Warranty", description: "Every repair guaranteed for life" },
  { icon: Clock, title: "30-Min Response", description: "Estimates confirmed within 30 minutes" },
  { icon: Star, title: "4.9/5 Rating", description: "150+ verified Google reviews" },
  { icon: Car, title: "Mobile Service", description: "We come to your location" },
];

// FAQ for estimate page
const estimateFAQs = [
  {
    question: "How accurate is the AI estimate?",
    answer: "Our AI provides a preliminary estimate within 85-90% accuracy. Within 30 minutes, our certified technicians review the AI assessment, consider factors like dent accessibility and paint condition, and provide a final confirmed estimate. The confirmed quote is what you'll pay—no surprises.",
  },
  {
    question: "Is the estimate really free?",
    answer: "Yes! Our estimates are completely free with no obligation. You only pay if you choose to proceed with the repair. We believe in transparent pricing, so there are no hidden fees or surprise charges.",
  },
  {
    question: "What types of damage can you estimate?",
    answer: "We can estimate all types of paintless dent repair including hail damage, door dings, shopping cart dents, minor dents, large dents, creases, and multiple dent scenarios. If PDR isn't the best solution for your damage, we'll recommend alternatives.",
  },
  {
    question: "How do I take good photos for the estimate?",
    answer: "For best results: 1) Take photos in good lighting, 2) Include close-ups showing dent depth, 3) Take wider shots showing location on the vehicle, 4) Photograph from multiple angles, 5) Include photos of any paint damage. The clearer your photos, the more accurate our estimate.",
  },
];

// Pricing examples
const pricingExamples = [
  { damage: "Small Door Ding", size: "Dime to quarter size", price: "$75 - $150", time: "30-60 min" },
  { damage: "Medium Dent", size: "Half dollar to golf ball", price: "$150 - $300", time: "1-2 hours" },
  { damage: "Large Dent/Crease", size: "Palm size or larger", price: "$300 - $500", time: "2-4 hours" },
  { damage: "Hail Damage", size: "Per panel pricing", price: "$100 - $400", time: "1-3 days" },
];

// Schema.org structured data
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://haillions.com" },
  { name: "Free Estimate", url: "https://haillions.com/estimate" },
]);

export default function EstimatePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero Section */}
        <section className="relative bg-muted py-16 lg:py-24" aria-labelledby="estimate-hero-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Free - No Obligation
              </Badge>
              <h1 id="estimate-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get Your Free Dent Repair Estimate
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Upload photos of your vehicle damage and receive an AI-powered preliminary 
                estimate instantly. Our certified technicians review and confirm within 30 minutes. 
                Serving Houston, Katy, Sugar Land, and The Woodlands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Link href="#estimate-form">
                    Start Your Estimate
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
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 bg-primary text-primary-foreground" aria-label="Trust indicators">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {trustSignals.map((signal) => (
                <div key={signal.title} className="space-y-2">
                  <signal.icon className="h-8 w-8 mx-auto" />
                  <div className="font-semibold">{signal.title}</div>
                  <div className="text-sm opacity-90">{signal.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="process-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold mb-4">
                How Our Free Estimate Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Get an accurate quote for your paintless dent repair in four simple steps.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-16 lg:py-24 bg-muted" aria-labelledby="pricing-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Typical Paintless Dent Repair Costs
              </h2>
              <p className="text-lg text-muted-foreground">
                These are general ranges. Your actual estimate depends on dent size, depth, 
                location, and accessibility. Submit photos for an accurate quote.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-4 gap-4 p-4 bg-muted font-semibold text-sm">
                    <div>Damage Type</div>
                    <div>Size Reference</div>
                    <div>Price Range</div>
                    <div>Repair Time</div>
                  </div>
                  {pricingExamples.map((example, index) => (
                    <div 
                      key={example.damage} 
                      className={`grid grid-cols-4 gap-4 p-4 text-sm ${index !== pricingExamples.length - 1 ? 'border-b' : ''}`}
                    >
                      <div className="font-medium">{example.damage}</div>
                      <div className="text-muted-foreground">{example.size}</div>
                      <div className="text-primary font-semibold">{example.price}</div>
                      <div className="text-muted-foreground">{example.time}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <p className="text-center text-sm text-muted-foreground mt-4">
                *Final pricing depends on dent complexity, location, and accessibility. 
                Hail damage priced per panel based on dent count and severity.
              </p>
            </div>
          </div>
        </section>

        {/* Estimate Form Placeholder */}
        <section id="estimate-form" className="py-16 lg:py-24 bg-background" aria-labelledby="form-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="form-heading" className="text-3xl md:text-4xl font-bold mb-4">
                  Request Your Free Estimate
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and upload photos of your damage. 
                  We&apos;ll send your estimate within 30 minutes.
                </p>
              </div>
              
              <Card className="border-2 border-dashed border-primary/20">
                <CardContent className="p-12 text-center">
                  <Camera className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Estimate Form Coming Soon</h3>
                  <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    We&apos;re currently upgrading our estimate system with AI-powered damage analysis. 
                    In the meantime, get your free quote by calling or texting us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href="tel:+13467020510">
                        <Phone className="mr-2 h-5 w-5" />
                        Call (346) 702-0510
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/contact">Send Message</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Tips */}
        <section className="py-16 lg:py-24 bg-muted" aria-labelledby="tips-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 id="tips-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
                Tips for Best Estimate Photos
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Do&apos;s
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Take photos in bright, natural light</li>
                      <li>• Include close-ups showing dent depth</li>
                      <li>• Take wider shots showing location on vehicle</li>
                      <li>• Photograph from multiple angles (3-4 minimum)</li>
                      <li>• Show any paint damage or scratches</li>
                      <li>• Include photos of surrounding panels</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="text-destructive">✕</span>
                      Don&apos;ts
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Don&apos;t use flash (creates glare)</li>
                      <li>• Don&apos;t take blurry photos</li>
                      <li>• Don&apos;t submit only one photo</li>
                      <li>• Don&apos;t take photos at night</li>
                      <li>• Don&apos;t crop too tightly (lose context)</li>
                      <li>• Don&apos;t submit screenshots or filtered images</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-background" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
                  Estimate FAQ
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about our free estimate process.
                </p>
              </div>
              <div className="space-y-6">
                {estimateFAQs.map((faq, index) => (
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
              Ready to Get Your Free Estimate?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Don&apos;t let dents decrease your vehicle&apos;s value. Get your free, no-obligation 
              estimate today and see how affordable paintless dent repair can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="tel:+13467020510">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (346) 702-0510
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg">
                <Link href="/contact">Send Message</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
