"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FileText,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";

interface DashboardStats {
  totalCustomers: number;
  pendingEstimates: number;
  todayAppointments: number;
  monthlyRevenue: number;
  recentEstimates: any[];
  upcomingAppointments: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalCustomers: 0,
    pendingEstimates: 0,
    todayAppointments: 0,
    monthlyRevenue: 0,
    recentEstimates: [],
    upcomingAppointments: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/admin/dashboard");
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Customers",
      value: stats.totalCustomers,
      icon: Users,
      href: "/admin/customers",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Pending Estimates",
      value: stats.pendingEstimates,
      icon: FileText,
      href: "/admin/estimates",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Today's Appointments",
      value: stats.todayAppointments,
      icon: Calendar,
      href: "/admin/appointments",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Monthly Revenue",
      value: `$${stats.monthlyRevenue.toLocaleString()}`,
      icon: DollarSign,
      href: "#",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button asChild>
          <Link href="/admin/estimates">Review Estimates</Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <Card key={card.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{card.title}</p>
                  <p className="text-2xl font-bold mt-1">
                    {loading ? "-" : card.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${card.bgColor}`}>
                  <card.icon className={`h-5 w-5 ${card.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Estimates */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Estimates</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/estimates">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {stats.recentEstimates.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                No recent estimates
              </p>
            ) : (
              <div className="space-y-4">
                {stats.recentEstimates.map((estimate: any) => (
                  <div
                    key={estimate.id}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div>
                      <p className="font-medium">
                        {estimate.customer.firstName} {estimate.customer.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {estimate.vehicle?.year} {estimate.vehicle?.make}{" "}
                        {estimate.vehicle?.model}
                      </p>
                    </div>
                    <Badge
                      variant={
                        estimate.status === "PENDING"
                          ? "secondary"
                          : estimate.status === "APPROVED"
                          ? "default"
                          : "outline"
                      }
                    >
                      {estimate.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/appointments">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {stats.upcomingAppointments.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                No upcoming appointments
              </p>
            ) : (
              <div className="space-y-4">
                {stats.upcomingAppointments.map((appointment: any) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div>
                      <p className="font-medium">
                        {appointment.customer.firstName}{" "}
                        {appointment.customer.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(appointment.scheduledDate).toLocaleDateString()}{" "}
                        at {appointment.startTime}
                      </p>
                    </div>
                    <Badge>{appointment.serviceType}</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
