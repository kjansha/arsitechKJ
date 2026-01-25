"use client";

import { useState, FormEvent } from "react";
import { BUSINESS_TYPES, SERVICE_INTERESTS } from "@/lib/constants";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  serviceInterest: string;
  message: string;
  contactPreference: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    serviceInterest: "",
    message: "",
    contactPreference: "either",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // For now, log to console - ready for Supabase integration
      console.log("Form submission:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessName: "",
        businessType: "",
        serviceInterest: "",
        message: "",
        contactPreference: "either",
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (status === "success") {
    return (
      <div className="bg-success/10 border border-success rounded-2xl p-8 text-center">
        <svg
          className="h-16 w-16 text-success mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-text-light mb-6">
          Thanks! We&apos;ll be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent hover:text-accent-dark font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-text-dark mb-2">
            First Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-text-dark mb-2">
            Last Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="Last name"
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
            Email <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="you@practice.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Business Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-text-dark mb-2">
            Business Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
            placeholder="Your practice name"
          />
        </div>
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-text-dark mb-2">
            Business Type
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors bg-white"
          >
            <option value="">Select type...</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-medium text-text-dark mb-2">
          How can we help?
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors bg-white"
        >
          <option value="">Select a service...</option>
          {SERVICE_INTERESTS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
          placeholder="Tell us about your practice and compliance needs..."
        />
      </div>

      {/* Contact Preference */}
      <div>
        <label className="block text-sm font-medium text-text-dark mb-3">
          Preferred contact method
        </label>
        <div className="flex flex-wrap gap-4">
          {[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "either", label: "Either" },
          ].map((option) => (
            <label
              key={option.value}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="radio"
                name="contactPreference"
                value={option.value}
                checked={formData.contactPreference === option.value}
                onChange={handleChange}
                className="w-4 h-4 text-accent border-gray-300 focus:ring-accent"
              />
              <span className="ml-2 text-text-dark">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="bg-error/10 border border-error rounded-lg p-4 text-error">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
