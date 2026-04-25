import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./SchemaMarkup";

interface BreadcrumbItem {
  name: string;
  url: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showSchema?: boolean;
  className?: string;
}

export function Breadcrumb({ items, showSchema = true, className = "" }: BreadcrumbProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://haillions.com";
  
  // Prepare schema items with full URLs
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
  }));

  return (
    <>
      {showSchema && <BreadcrumbSchema items={schemaItems} />}
      
      <nav
        aria-label="Breadcrumb"
        className={`py-4 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-[#64748b] hover:text-[#60a5fa] transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-[#1e3a5f]" />
              {item.isCurrent ? (
                <span
                  className="text-[#94a3b8] font-medium"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-[#64748b] hover:text-[#60a5fa] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

// Predefined breadcrumb configurations for common pages
export const breadcrumbConfigs = {
  services: [
    { name: "Services", url: "/services", isCurrent: true },
  ],
  "hail-damage": [
    { name: "Services", url: "/services" },
    { name: "Hail Damage Repair", url: "/services/hail-damage", isCurrent: true },
  ],
  "door-dings": [
    { name: "Services", url: "/services" },
    { name: "Door Ding Removal", url: "/services/door-dings", isCurrent: true },
  ],
  "paintless-dent-repair": [
    { name: "Services", url: "/services" },
    { name: "Paintless Dent Repair", url: "/services/paintless-dent-repair", isCurrent: true },
  ],
  "mobile-service": [
    { name: "Services", url: "/services" },
    { name: "Mobile Service", url: "/services/mobile-service", isCurrent: true },
  ],
  "bumper-repair": [
    { name: "Services", url: "/services" },
    { name: "Bumper Repair", url: "/services/bumper-repair", isCurrent: true },
  ],
  about: [
    { name: "About Us", url: "/about", isCurrent: true },
  ],
  contact: [
    { name: "Contact", url: "/contact", isCurrent: true },
  ],
  estimate: [
    { name: "Free Estimate", url: "/estimate", isCurrent: true },
  ],
  schedule: [
    { name: "Schedule Service", url: "/schedule", isCurrent: true },
  ],
  locations: (location: string) => [
    { name: "Locations", url: "/locations" },
    { name: location, url: `/locations/${location.toLowerCase().replace(/\s+/g, "-")}`, isCurrent: true },
  ],
};

// Helper function to generate location breadcrumbs
export function getLocationBreadcrumb(location: string, locationSlug: string) {
  return [
    { name: "Locations", url: "/locations" },
    { name: location, url: `/locations/${locationSlug}`, isCurrent: true },
  ];
}
