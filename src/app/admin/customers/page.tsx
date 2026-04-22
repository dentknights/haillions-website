"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  Car,
  FileText,
  Calendar,
  Plus,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
} from "lucide-react";

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  createdAt: string;
  _count?: {
    estimates: number;
    appointments: number;
    vehicles: number;
  };
  vehicles: {
    id: string;
    year: number;
    make: string;
    model: string;
    color: string | null;
  }[];
  estimates: {
    id: string;
    status: string;
    estimatedCost: string | null;
    submittedAt: string;
  }[];
  appointments: {
    id: string;
    scheduledDate: string;
    status: string;
    serviceType: string;
  }[];
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch("/api/admin/customers");
      if (response.ok) {
        const data = await response.json();
        setCustomers(data.customers || []);
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      customer.firstName.toLowerCase().includes(searchLower) ||
      customer.lastName.toLowerCase().includes(searchLower) ||
      customer.email.toLowerCase().includes(searchLower) ||
      customer.phone.includes(searchTerm) ||
      customer.city?.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      PENDING: "bg-yellow-100 text-yellow-800",
      APPROVED: "bg-green-100 text-green-800",
      REJECTED: "bg-red-100 text-red-800",
      SCHEDULED: "bg-blue-100 text-blue-800",
      COMPLETED: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Customer Management</h1>
          <p className="text-muted-foreground">
            View and manage customer records
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/customers/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </Link>
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers by name, email, phone, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Customers</p>
            <p className="text-2xl font-bold">{customers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">New This Month</p>
            <p className="text-2xl font-bold">
              {
                customers.filter(
                  (c) =>
                    new Date(c.createdAt).getMonth() === new Date().getMonth()
                ).length
              }
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">With Active Estimates</p>
            <p className="text-2xl font-bold">
              {
                customers.filter(
                  (c) =>
                    c.estimates?.some(
                      (e) => e.status === "PENDING" || e.status === "APPROVED"
                    )
                ).length
              }
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Customers List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4">Loading customers...</p>
        </div>
      ) : filteredCustomers.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">No customers found</p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid gap-4">
            {paginatedCustomers.map((customer) => (
              <Card key={customer.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Customer Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {customer.firstName} {customer.lastName}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                            <span className="flex items-center gap-1">
                              <Mail className="h-4 w-4" />
                              {customer.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              {customer.phone}
                            </span>
                            {customer.city && (
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {customer.city}, {customer.state}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Customer since{" "}
                          {new Date(customer.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 mt-4">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Car className="h-3 w-3" />
                          {customer.vehicles?.length || 0} Vehicles
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {customer.estimates?.length || 0} Estimates
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {customer.appointments?.length || 0} Appointments
                        </Badge>
                      </div>

                      {/* Recent Activity */}
                      {(customer.estimates?.length > 0 ||
                        customer.appointments?.length > 0) && (
                        <div className="mt-4 pt-4 border-t space-y-2">
                          {customer.estimates?.slice(0, 2).map((estimate) => (
                            <div
                              key={estimate.id}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-muted-foreground">
                                Estimate{" "}
                                {new Date(estimate.submittedAt).toLocaleDateString()}
                              </span>
                              <div className="flex items-center gap-2">
                                {estimate.estimatedCost && (
                                  <span className="font-medium">
                                    ${estimate.estimatedCost}
                                  </span>
                                )}
                                <Badge
                                  className={getStatusColor(estimate.status)}
                                  variant="secondary"
                                >
                                  {estimate.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex lg:flex-col gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            onClick={() => setSelectedCustomer(customer)}
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Customer Details</DialogTitle>
                          </DialogHeader>
                          {selectedCustomer && (
                            <div className="space-y-6">
                              {/* Contact Info */}
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-muted-foreground">
                                    Contact Information
                                  </Label>
                                  <p className="font-medium text-lg">
                                    {selectedCustomer.firstName}{" "}
                                    {selectedCustomer.lastName}
                                  </p>
                                  <p className="text-sm">{selectedCustomer.email}</p>
                                  <p className="text-sm">{selectedCustomer.phone}</p>
                                </div>
                                <div>
                                  <Label className="text-muted-foreground">
                                    Address
                                  </Label>
                                  <p className="text-sm">
                                    {selectedCustomer.address || "N/A"}
                                  </p>
                                  <p className="text-sm">
                                    {selectedCustomer.city},{" "}
                                    {selectedCustomer.state} {selectedCustomer.zipCode}
                                  </p>
                                </div>
                              </div>

                              {/* Vehicles */}
                              <div>
                                <Label className="text-muted-foreground">
                                  Vehicles
                                </Label>
                                <div className="mt-2 space-y-2">
                                  {selectedCustomer.vehicles?.map((vehicle) => (
                                    <div
                                      key={vehicle.id}
                                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                                    >
                                      <span>
                                        {vehicle.year} {vehicle.make} {vehicle.model}
                                        {vehicle.color && (
                                          <span className="text-muted-foreground">
                                            {" "}
                                            - {vehicle.color}
                                          </span>
                                        )}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Recent Estimates */}
                              <div>
                                <Label className="text-muted-foreground">
                                  Recent Estimates
                                </Label>
                                <div className="mt-2 space-y-2">
                                  {selectedCustomer.estimates?.map((estimate) => (
                                    <div
                                      key={estimate.id}
                                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                                    >
                                      <span>
                                        {new Date(
                                          estimate.submittedAt
                                        ).toLocaleDateString()}
                                      </span>
                                      <div className="flex items-center gap-2">
                                        {estimate.estimatedCost && (
                                          <span className="font-medium">
                                            ${estimate.estimatedCost}
                                          </span>
                                        )}
                                        <Badge className={getStatusColor(estimate.status)}>
                                          {estimate.status}
                                        </Badge>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex gap-2">
                                <Button asChild className="flex-1">
                                  <Link
                                    href={`/admin/estimates?customer=${selectedCustomer.id}`}
                                  >
                                    <FileText className="h-4 w-4 mr-2" />
                                    View Estimates
                                  </Link>
                                </Button>
                                <Button asChild variant="outline" className="flex-1">
                                  <Link
                                    href={`/admin/appointments?customer=${selectedCustomer.id}`}
                                  >
                                    <Calendar className="h-4 w-4 mr-2" />
                                    View Appointments
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      <Button variant="outline" size="icon" asChild>
                        <Link href={`/admin/customers/${customer.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
