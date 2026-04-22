"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Car,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Estimate {
  id: string;
  status: string;
  severity: string | null;
  estimatedCost: string | null;
  aiAnalysis: any;
  damageType: string[];
  notes: string | null;
  submittedAt: string;
  customer: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  vehicle: {
    year: number;
    make: string;
    model: string;
  } | null;
  photos: {
    id: string;
    url: string;
    isPrimary: boolean;
  }[];
}

const statusOptions = [
  { value: "ALL", label: "All Statuses" },
  { value: "PENDING", label: "Pending Review" },
  { value: "ANALYZING", label: "AI Analyzing" },
  { value: "REVIEWING", label: "Under Review" },
  { value: "APPROVED", label: "Approved" },
  { value: "REJECTED", label: "Rejected" },
];

export default function EstimatesPage() {
  const [estimates, setEstimates] = useState<Estimate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedEstimate, setSelectedEstimate] = useState<Estimate | null>(null);
  const [reviewNotes, setReviewNotes] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  useEffect(() => {
    fetchEstimates();
  }, []);

  const fetchEstimates = async () => {
    try {
      const response = await fetch("/api/estimates");
      if (response.ok) {
        const data = await response.json();
        setEstimates(data.estimates || []);
      }
    } catch (error) {
      console.error("Error fetching estimates:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateEstimateStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/estimates/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status,
          notes: reviewNotes,
          estimatedCost: finalPrice,
        }),
      });

      if (response.ok) {
        fetchEstimates();
        setSelectedEstimate(null);
      }
    } catch (error) {
      console.error("Error updating estimate:", error);
    }
  };

  const filteredEstimates = estimates.filter((estimate) => {
    const matchesSearch =
      searchTerm === "" ||
      estimate.customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      estimate.customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      estimate.customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      estimate.vehicle?.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      estimate.vehicle?.model.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" || estimate.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      PENDING: "bg-yellow-100 text-yellow-800",
      ANALYZING: "bg-blue-100 text-blue-800",
      REVIEWING: "bg-purple-100 text-purple-800",
      APPROVED: "bg-green-100 text-green-800",
      REJECTED: "bg-red-100 text-red-800",
    };
    return variants[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Estimate Management</h1>
          <p className="text-muted-foreground">
            Review and manage customer estimates
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            {filteredEstimates.length} estimates
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or vehicle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Estimates List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4">Loading estimates...</p>
        </div>
      ) : filteredEstimates.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No estimates found</h3>
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== "ALL"
                ? "Try adjusting your search or filters"
                : "Estimates will appear here when customers submit them"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredEstimates.map((estimate) => (
            <Card key={estimate.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Photos */}
                  <div className="flex gap-2">
                    {estimate.photos.slice(0, 3).map((photo, idx) => (
                      <div
                        key={photo.id}
                        className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted"
                      >
                        <Image
                          src={photo.url}
                          alt={`Damage photo ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {estimate.photos.length > 3 && (
                      <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
                        +{estimate.photos.length - 3}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {estimate.customer.firstName} {estimate.customer.lastName}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {estimate.customer.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {estimate.customer.phone}
                          </span>
                        </div>
                      </div>
                      <Badge className={getStatusBadge(estimate.status)}>
                        {estimate.status}
                      </Badge>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                      {estimate.vehicle && (
                        <span className="flex items-center gap-1">
                          <Car className="h-4 w-4 text-muted-foreground" />
                          {estimate.vehicle.year} {estimate.vehicle.make}{" "}
                          {estimate.vehicle.model}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        {new Date(estimate.submittedAt).toLocaleDateString()}
                      </span>
                      {estimate.estimatedCost && (
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          ${estimate.estimatedCost}
                        </span>
                      )}
                      {estimate.severity && (
                        <Badge variant="outline">{estimate.severity}</Badge>
                      )}
                    </div>

                    {estimate.aiAnalysis && (
                      <div className="mt-3 p-3 bg-muted rounded-lg text-sm">
                        <p className="font-medium mb-1">AI Analysis:</p>
                        <p className="text-muted-foreground">
                          {estimate.aiAnalysis.recommendation ||
                            `Estimated ${estimate.aiAnalysis.dentCount} dents, severity: ${estimate.aiAnalysis.severity}`}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedEstimate(estimate)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Review Estimate</DialogTitle>
                        </DialogHeader>
                        {selectedEstimate && (
                          <div className="space-y-6">
                            {/* Customer Info */}
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <Label className="text-muted-foreground">Customer</Label>
                                <p className="font-medium">
                                  {selectedEstimate.customer.firstName}{" "}
                                  {selectedEstimate.customer.lastName}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {selectedEstimate.customer.email}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {selectedEstimate.customer.phone}
                                </p>
                              </div>
                              <div>
                                <Label className="text-muted-foreground">Vehicle</Label>
                                <p className="font-medium">
                                  {selectedEstimate.vehicle?.year}{" "}
                                  {selectedEstimate.vehicle?.make}{" "}
                                  {selectedEstimate.vehicle?.model}
                                </p>
                                <p className="text-sm text-muted-foreground capitalize">
                                  Damage: {selectedEstimate.damageType.join(", ")}
                                </p>
                              </div>
                            </div>

                            {/* Photos */}
                            <div>
                              <Label className="text-muted-foreground">Photos</Label>
                              <div className="grid grid-cols-3 gap-2 mt-2">
                                {selectedEstimate.photos.map((photo) => (
                                  <div
                                    key={photo.id}
                                    className="relative aspect-square rounded-lg overflow-hidden"
                                  >
                                    <Image
                                      src={photo.url}
                                      alt="Damage photo"
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* AI Analysis */}
                            {selectedEstimate.aiAnalysis && (
                              <div className="p-4 bg-blue-50 rounded-lg">
                                <Label className="text-blue-800">AI Analysis</Label>
                                <div className="mt-2 space-y-1 text-sm">
                                  <p>
                                    <span className="font-medium">Severity:</span>{" "}
                                    {selectedEstimate.aiAnalysis.severity}
                                  </p>
                                  <p>
                                    <span className="font-medium">Estimated Dents:</span>{" "}
                                    {selectedEstimate.aiAnalysis.dentCount}
                                  </p>
                                  <p>
                                    <span className="font-medium">Price Range:</span> ${
                                      selectedEstimate.aiAnalysis.estimatedCostMin
                                    }{" "}
                                    - ${selectedEstimate.aiAnalysis.estimatedCostMax}
                                  </p>
                                  <p>
                                    <span className="font-medium">Complexity:</span>{" "}
                                    {selectedEstimate.aiAnalysis.complexity}
                                  </p>
                                  <p className="text-muted-foreground mt-2">
                                    {selectedEstimate.aiAnalysis.recommendation}
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* Review Form */}
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="finalPrice">Final Price ($)</Label>
                                <Input
                                  id="finalPrice"
                                  type="number"
                                  placeholder="Enter final price"
                                  value={finalPrice}
                                  onChange={(e) => setFinalPrice(e.target.value)}
                                />
                              </div>
                              <div>
                                <Label htmlFor="reviewNotes">Review Notes</Label>
                                <Textarea
                                  id="reviewNotes"
                                  placeholder="Add notes about the estimate..."
                                  value={reviewNotes}
                                  onChange={(e) => setReviewNotes(e.target.value)}
                                  rows={3}
                                />
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                              <Button
                                onClick={() =>
                                  updateEstimateStatus(selectedEstimate.id, "APPROVED")
                                }
                                className="flex-1 bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Approve
                              </Button>
                              <Button
                                onClick={() =>
                                  updateEstimateStatus(selectedEstimate.id, "REJECTED")
                                }
                                variant="destructive"
                                className="flex-1"
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Reject
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/customers/${estimate.customer.id}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
