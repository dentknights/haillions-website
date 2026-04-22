"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Upload, X, Camera, CheckCircle, Loader2, Car, AlertCircle } from "lucide-react";

interface UploadedFile {
  file: File;
  preview: string;
  uploading: boolean;
  uploaded: boolean;
  url?: string;
}

const vehicleMakes = [
  "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge",
  "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia",
  "Land Rover", "Lexus", "Lincoln", "Mazda", "Mercedes-Benz", "Mercury", "Mini",
  "Mitsubishi", "Nissan", "Pontiac", "Porsche", "Ram", "Subaru", "Tesla",
  "Toyota", "Volkswagen", "Volvo", "Other",
];

const damageTypes = [
  { value: "hail", label: "Hail Damage" },
  { value: "door-ding", label: "Door Ding" },
  { value: "shopping-cart", label: "Shopping Cart Dent" },
  { value: "minor-dent", label: "Minor Dent" },
  { value: "large-dent", label: "Large Dent" },
  { value: "crease", label: "Creased Panel" },
  { value: "multiple", label: "Multiple Dents" },
  { value: "other", label: "Other" },
];

export default function EstimatePage() {
  const router = useRouter();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    damageType: "",
    damageLocation: "",
    notes: "",
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      uploading: false,
      uploaded: false,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 6,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Upload photos first
      const uploadedUrls = await Promise.all(
        files.map(async (fileData, index) => {
          setFiles((prev) => {
            const newFiles = [...prev];
            newFiles[index].uploading = true;
            return newFiles;
          });

          const formData = new FormData();
          formData.append("file", fileData.file);

          const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });

          if (!response.ok) throw new Error("Upload failed");

          const data = await response.json();

          setFiles((prev) => {
            const newFiles = [...prev];
            newFiles[index].uploading = false;
            newFiles[index].uploaded = true;
            newFiles[index].url = data.url;
            return newFiles;
          });

          return data.url;
        })
      );

      // Submit estimate with AI analysis
      const response = await fetch("/api/estimates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          photos: uploadedUrls,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      const result = await response.json();
      setAnalysisResult(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-4">Get Your Free Estimate</h1>
              <p className="body-large text-muted-foreground">
                Upload photos of your damage and our AI-powered system will provide 
                an instant preliminary estimate. Our team will review and confirm within 30 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Photo Upload */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Upload Photos of Damage
                        <span className="text-muted-foreground font-normal ml-2">
                          (Max 6 photos, 10MB each)
                        </span>
                      </Label>
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                          isDragActive
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input {...getInputProps()} />
                        <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-lg font-medium mb-2">
                          {isDragActive
                            ? "Drop photos here"
                            : "Drag & drop photos here"}
                        </p>
                        <p className="text-muted-foreground mb-4">
                          or click to select files
                        </p>
                        <Button type="button" variant="outline">
                          <Upload className="mr-2 h-4 w-4" />
                          Select Photos
                        </Button>
                      </div>

                      {/* Preview Grid */}
                      {files.length > 0 && (
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-4">
                          {files.map((file, index) => (
                            <div key={index} className="relative aspect-square">
                              <Image
                                src={file.preview}
                                alt={`Upload ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                              {file.uploading && (
                                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                                  <Loader2 className="h-6 w-6 text-white animate-spin" />
                                </div>
                              )}
                              {file.uploaded && (
                                <div className="absolute inset-0 bg-green-500/20 rounded-lg flex items-center justify-center">
                                  <CheckCircle className="h-6 w-6 text-green-500" />
                                </div>
                              )}
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="absolute -top-2 -right-2 p-1 bg-destructive text-white rounded-full hover:bg-destructive/90"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-4 p-4 bg-muted rounded-lg">
                        <p className="text-sm font-medium mb-2">Photo Tips:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Take photos from multiple angles</li>
                          <li>• Include close-ups and wider shots showing location</li>
                          <li>• Ensure good lighting to show dent depth</li>
                          <li>• Include photos of surrounding area for context</li>
                        </ul>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Contact Information</h3>
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
                    </div>

                    {/* Vehicle Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Vehicle Information</h3>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="year">Year *</Label>
                          <Select
                            value={formData.year}
                            onValueChange={(value) =>
                              setFormData({ ...formData, year: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 35 }, (_, i) => 2025 - i).map(
                                (year) => (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="make">Make *</Label>
                          <Select
                            value={formData.make}
                            onValueChange={(value) =>
                              setFormData({ ...formData, make: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select make" />
                            </SelectTrigger>
                            <SelectContent>
                              {vehicleMakes.map((make) => (
                                <SelectItem key={make} value={make.toLowerCase()}>
                                  {make}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="model">Model *</Label>
                          <Input
                            id="model"
                            value={formData.model}
                            onChange={(e) =>
                              setFormData({ ...formData, model: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Damage Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Damage Information</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="damageType">Type of Damage *</Label>
                          <Select
                            value={formData.damageType}
                            onValueChange={(value) =>
                              setFormData({ ...formData, damageType: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select damage type" />
                            </SelectTrigger>
                            <SelectContent>
                              {damageTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="damageLocation">Damage Location *</Label>
                          <Select
                            value={formData.damageLocation}
                            onValueChange={(value) =>
                              setFormData({ ...formData, damageLocation: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hood">Hood</SelectItem>
                              <SelectItem value="roof">Roof</SelectItem>
                              <SelectItem value="trunk">Trunk/Liftgate</SelectItem>
                              <SelectItem value="driver-door">Driver Door</SelectItem>
                              <SelectItem value="passenger-door">Passenger Door</SelectItem>
                              <SelectItem value="rear-door">Rear Door</SelectItem>
                              <SelectItem value="fender">Fender</SelectItem>
                              <SelectItem value="quarter-panel">Quarter Panel</SelectItem>
                              <SelectItem value="multiple">Multiple Panels</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                          id="notes"
                          placeholder="Describe the damage in detail, how it happened, any previous repairs, etc."
                          rows={4}
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting || files.length === 0}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Car className="mr-2 h-5 w-5" />
                          Get My Estimate
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
