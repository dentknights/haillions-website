"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar } from "@/components/ui/calendar";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Car,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { format, addDays, isWeekend, isSameDay } from "date-fns";

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    serviceType: "",
    notes: "",
  });

  // Generate time slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      const slots: TimeSlot[] = [];
      const isWeekendDay = isWeekend(selectedDate);
      const startHour = isWeekendDay ? 9 : 8;
      const endHour = isWeekendDay ? 16 : 18;

      for (let hour = startHour; hour < endHour; hour++) {
        slots.push({
          time: `${hour.toString().padStart(2, "0")}:00`,
          available: Math.random() > 0.3, // Simulate some slots being booked
        });
        slots.push({
          time: `${hour.toString().padStart(2, "0")}:30`,
          available: Math.random() > 0.3,
        });
      }
      setTimeSlots(slots);
      setSelectedTime(undefined);
    }
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          scheduledDate: selectedDate.toISOString(),
          startTime: selectedTime,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <Header />
        <main id="main-content" className="min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-lg mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="heading-3 mb-2">Appointment Scheduled!</h1>
                <p className="text-muted-foreground mb-6">
                  Your appointment has been scheduled for{" "}
                  <strong>
                    {selectedDate && format(selectedDate, "MMMM d, yyyy")} at{" "}
                    {selectedTime}
                  </strong>
                  . We&apos;ll send you a confirmation email shortly.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/">Return Home</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-4">Schedule Your Service</h1>
              <p className="body-large text-muted-foreground">
                Choose a convenient date and time for your paintless dent repair. 
                Our mobile service comes to your location.
              </p>
            </div>
          </div>
        </section>

        {/* Scheduling Form */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Calendar & Time Selection */}
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <CalendarIcon className="h-5 w-5 text-primary" />
                          Select Date
                        </h2>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            date < new Date() ||
                            date > addDays(new Date(), 60) ||
                            date.getDay() === 0
                          }
                          className="rounded-md border"
                        />
                        <p className="text-sm text-muted-foreground mt-4">
                          We&apos;re closed on Sundays. Mobile service available 
                          Monday-Saturday.
                        </p>
                      </CardContent>
                    </Card>

                    {selectedDate && (
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Select Time
                          </h2>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot.time}
                                type="button"
                                disabled={!slot.available}
                                onClick={() => setSelectedTime(slot.time)}
                                className={`p-2 rounded-md text-sm font-medium transition-colors ${
                                  selectedTime === slot.time
                                    ? "bg-primary text-primary-foreground"
                                    : slot.available
                                    ? "bg-muted hover:bg-muted/80"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                }`}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Contact & Service Info */}
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                          <Car className="h-5 w-5 text-primary" />
                          Service Details
                        </h2>
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <Select
                            value={formData.serviceType}
                            onValueChange={(value) =>
                              setFormData({ ...formData, serviceType: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pdr">Paintless Dent Repair</SelectItem>
                              <SelectItem value="hail">Hail Damage Repair</SelectItem>
                              <SelectItem value="door-ding">Door Ding Removal</SelectItem>
                              <SelectItem value="estimate-followup">Estimate Follow-up</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <h2 className="text-lg font-semibold">Contact Information</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) =>
                                setFormData({ ...formData, firstName: e.target.value })
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) =>
                                setFormData({ ...formData, lastName: e.target.value })
                              }
                              required
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              required
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          Service Location
                        </h2>
                        <div className="space-y-2">
                          <Label htmlFor="address">Street Address *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) =>
                              setFormData({ ...formData, address: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Select
                            value={formData.city}
                            onValueChange={(value) =>
                              setFormData({ ...formData, city: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="houston">Houston</SelectItem>
                              <SelectItem value="katy">Katy</SelectItem>
                              <SelectItem value="sugar-land">Sugar Land</SelectItem>
                              <SelectItem value="the-woodlands">The Woodlands</SelectItem>
                              <SelectItem value="pearland">Pearland</SelectItem>
                              <SelectItem value="cypress">Cypress</SelectItem>
                              <SelectItem value="spring">Spring</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={!selectedDate || !selectedTime || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        "Confirm Appointment"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
