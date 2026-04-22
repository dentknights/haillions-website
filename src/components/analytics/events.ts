// Google Analytics Event Tracking Utilities
// Use these to track user interactions throughout the site

import { event as gaEvent } from "./GoogleAnalytics";

// Common event categories
export const CATEGORIES = {
  ENGAGEMENT: "engagement",
  CONVERSION: "conversion",
  NAVIGATION: "navigation",
  FORM: "form",
  ESTIMATE: "estimate",
  APPOINTMENT: "appointment",
  CONTACT: "contact",
  ADMIN: "admin",
} as const;

// Engagement Events
export function trackButtonClick(buttonName: string, location: string) {
  gaEvent("button_click", {
    category: CATEGORIES.ENGAGEMENT,
    label: buttonName,
    location,
  });
}

export function trackPhoneClick(phoneNumber: string) {
  gaEvent("phone_click", {
    category: CATEGORIES.CONTACT,
    label: phoneNumber,
  });
}

export function trackEmailClick(email: string) {
  gaEvent("email_click", {
    category: CATEGORIES.CONTACT,
    label: email,
  });
}

export function trackSocialClick(platform: string) {
  gaEvent("social_click", {
    category: CATEGORIES.ENGAGEMENT,
    label: platform,
  });
}

// Form Events
export function trackFormStart(formName: string) {
  gaEvent("form_start", {
    category: CATEGORIES.FORM,
    label: formName,
  });
}

export function trackFormSubmit(formName: string, success: boolean = true) {
  gaEvent("form_submit", {
    category: CATEGORIES.FORM,
    label: formName,
    success: success ? "true" : "false",
  });
}

export function trackFormError(formName: string, errorMessage: string) {
  gaEvent("form_error", {
    category: CATEGORIES.FORM,
    label: formName,
    error: errorMessage,
  });
}

// Estimate Events
export function trackEstimateStart() {
  gaEvent("estimate_start", {
    category: CATEGORIES.ESTIMATE,
  });
}

export function trackEstimatePhotoUpload(photoCount: number) {
  gaEvent("estimate_photo_upload", {
    category: CATEGORIES.ESTIMATE,
    value: photoCount,
  });
}

export function trackEstimateSubmit(success: boolean) {
  gaEvent("estimate_submit", {
    category: CATEGORIES.ESTIMATE,
    success: success ? "true" : "false",
  });
}

// Appointment Events
export function trackAppointmentStart() {
  gaEvent("appointment_start", {
    category: CATEGORIES.APPOINTMENT,
  });
}

export function trackAppointmentDateSelect(date: string) {
  gaEvent("appointment_date_select", {
    category: CATEGORIES.APPOINTMENT,
    label: date,
  });
}

export function trackAppointmentSubmit(success: boolean) {
  gaEvent("appointment_submit", {
    category: CATEGORIES.APPOINTMENT,
    success: success ? "true" : "false",
  });
}

// Conversion Events
export function trackConversion(
  conversionType: string,
  value?: number,
  currency: string = "USD"
) {
  gaEvent("conversion", {
    category: CATEGORIES.CONVERSION,
    label: conversionType,
    value,
    currency,
  });
}

export function trackLeadGenerated(source: string) {
  gaEvent("generate_lead", {
    category: CATEGORIES.CONVERSION,
    label: source,
  });
}

// Admin Events
export function trackAdminLogin(success: boolean) {
  gaEvent("admin_login", {
    category: CATEGORIES.ADMIN,
    success: success ? "true" : "false",
  });
}

export function trackEstimateReview(estimateId: string, action: "approved" | "rejected") {
  gaEvent("estimate_review", {
    category: CATEGORIES.ADMIN,
    label: action,
    estimate_id: estimateId,
  });
}

// Scroll Events
export function trackScrollDepth(depth: number) {
  gaEvent("scroll_depth", {
    category: CATEGORIES.ENGAGEMENT,
    value: depth,
  });
}

// Time on Page
export function trackTimeOnPage(seconds: number) {
  gaEvent("time_on_page", {
    category: CATEGORIES.ENGAGEMENT,
    value: seconds,
  });
}

// Service Interest
export function trackServiceInterest(serviceName: string) {
  gaEvent("service_interest", {
    category: CATEGORIES.ENGAGEMENT,
    label: serviceName,
  });
}

// FAQ Interaction
export function trackFAQExpand(question: string) {
  gaEvent("faq_expand", {
    category: CATEGORIES.ENGAGEMENT,
    label: question,
  });
}

// External Link Click
export function trackExternalLink(url: string, label: string) {
  gaEvent("external_link_click", {
    category: CATEGORIES.NAVIGATION,
    label,
    url,
  });
}
