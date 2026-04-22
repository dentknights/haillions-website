"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Phone,
  Mail,
  Car,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Appointment {
  id: string;
  status: string;
  scheduledDate: string;
  startTime: string;
  endTime: string;
  serviceType: string;
  location: string | null;
  isMobile: boolean;
  notes: string | null;
  customer: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  estimate?: {
    id: string;
    damageType: string[];
    photos: { url: string }[];
  } | null;
}

const statusOptions = [
  { value: "ALL", label: "All Statuses" },
  { value: "SCHEDULED", label: "Scheduled" },
  { value: "CONFIRMED", label: "Confirmed" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "COMPLETED", label: "Completed" },
  { value: "CANCELLED", label: "Cancelled" },
];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    fetchAppointments();
  }, [selectedDate]);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(`/api/appointments?date=${selectedDate}`);
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments || []);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchAppointments();
        setSelectedAppointment(null);
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  const filteredAppointments = appointments.filter(
    (apt) => statusFilter === "ALL" || apt.status === statusFilter
  );

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      SCHEDULED: "bg-blue-100 text-blue-800",
      CONFIRMED: "bg-green-100 text-green-800",
      IN_PROGRESS: "bg-yellow-100 text-yellow-800",
      COMPLETED: "bg-gray-100 text-gray-800",
      CANCELLED: "bg-red-100 text-red-800",
      NO_SHOW: "bg-orange-100 text-orange-800",
    };
    return variants[status] || "bg-gray-100 text-gray-800";
  };

  // Group appointments by time slot
  const timeSlots = Array.from({ length: 11 }, (_, i) => i + 8); // 8 AM to 6 PM

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Appointment Schedule</h1>
          <p className="text-muted-foreground">
            Manage daily schedule and technician assignments
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/appointments/new">
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Link>
        </Button>
      </div>

      {/* Date Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              variant="outline"
              onClick={() => {
                const date = new Date(selectedDate);
                date.setDate(date.getDate() - 1);
                setSelectedDate(date.toISOString().split('T')[0]);
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full sm:w-auto"
            />
            <Button
              variant="outline"
              onClick={() => {
                const date = new Date(selectedDate);
                date.setDate(date.getDate() + 1);
                setSelectedDate(date.toISOString().split('T')[0]);
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
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

      {/* Daily Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Appointments</p>
            <p className="text-2xl font-bold">{filteredAppointments.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Confirmed</p>
            <p className="text-2xl font-bold text-green-600">
              {filteredAppointments.filter((a) => a.status === "CONFIRMED").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">
              {filteredAppointments.filter((a) => a.status === "SCHEDULED").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold text-blue-600">
              {filteredAppointments.filter((a) => a.status === "COMPLETED").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Schedule View */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto" />
        </div>
      ) : filteredAppointments.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No appointments</h3>
            <p className="text-muted-foreground">
              No appointments scheduled for this date
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredAppointments
            .sort((a, b) => a.startTime.localeCompare(b.startTime))
            .map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Time */}
                    <div className="lg:w-32 flex-shrink-0">
                      <div className="text-2xl font-bold">
                        {appointment.startTime}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        to {appointment.endTime}
                      </div>
                      <Badge className={`mt-2 ${getStatusBadge(appointment.status)}`}>
                        {appointment.status}
                      </Badge>
                    </div>

                    {/* Customer Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">
                        {appointment.customer.firstName}{" "}
                        {appointment.customer.lastName}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {appointment.customer.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {appointment.customer.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="outline">{appointment.serviceType}</Badge>
                        {appointment.isMobile && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Mobile
                          </Badge>
                        )}
                      </div>
                      {appointment.location && (
                        <p className="text-sm text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4 inline mr-1" />
                          {appointment.location}
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex lg:flex-col gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            onClick={() => setSelectedAppointment(appointment)}
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Appointment Details</DialogTitle>
                          </DialogHeader>
                          {selectedAppointment && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-muted-foreground">Time</Label>
                                  <p className="font-medium">
                                    {selectedAppointment.startTime} -{" "}
                                    {selectedAppointment.endTime}
                                  </p>
                                </div>
                                <div>
                                  <Label className="text-muted-foreground">Status</Label>
                                  <Badge className={getStatusBadge(selectedAppointment.status)}>
                                    {selectedAppointment.status}
                                  </Badge>
                                </div>
                              </div>
                              <div>
                                <Label className="text-muted-foreground">Customer</Label>
                                <p className="font-medium">
                                  {selectedAppointment.customer.firstName}{" "}
                                  {selectedAppointment.customer.lastName}
                                </p>
                                <p className="text-sm">{selectedAppointment.customer.phone}</p>
                              </div>
                              <div>
                                <Label className="text-muted-foreground">Service</Label>
                                <p>{selectedAppointment.serviceType}</p>
                              </div>
                              {selectedAppointment.notes && (
                                <div>
                                  <Label className="text-muted-foreground">Notes</Label>
                                  <p className="text-sm">{selectedAppointment.notes}</p>
                                </div>
                              )}
                              <div className="flex gap-2 pt-4">
                                <Button
                                  onClick={() =>
                                    updateAppointmentStatus(selectedAppointment.id, "COMPLETED")
                                  }
                                  className="flex-1 bg-green-600 hover:bg-green-700"
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Complete
                                </Button>
                                <Button
                                  onClick={() =>
                                    updateAppointmentStatus(selectedAppointment.id, "CANCELLED")
                                  }
                                  variant="destructive"
                                  className="flex-1"
                                >
                                  <XCircle className="h-4 w-4 mr-2" />
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      {appointment.status === "SCHEDULED" && (
                        <Button
                          variant="outline"
                          onClick={() => updateAppointmentStatus(appointment.id, "CONFIRMED")}
                        >
                          Confirm
                        </Button>
                      )}
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
