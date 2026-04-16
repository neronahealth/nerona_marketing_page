"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<FormStatus>("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-success" aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-foreground-muted mb-6">
          We&apos;ll get back to you within 24 hours.
        </p>
        <Button onClick={() => setStatus("idle")}>Send Another Message</Button>
      </motion.div>
    );
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 bg-emergency/10 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-emergency" aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">
          Something went wrong
        </h3>
        <p className="text-foreground-muted mb-6">
          Please try again or contact us directly at{" "}
          <a
            href="mailto:hello@neronahealth.com"
            className="text-primary hover:text-primary-600 transition-colors"
          >
            hello@neronahealth.com
          </a>
        </p>
        <Button onClick={() => setStatus("idle")}>Try Again</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name <span className="text-emergency">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(errors.name && "border-emergency")}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-emergency mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address <span className="text-emergency">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(errors.email && "border-emergency")}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-emergency mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number (Optional)
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234 800 123 4567"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(errors.phone && "border-emergency")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-emergency mt-1" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject <span className="text-emergency">*</span>
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help?"
            aria-required="true"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={cn(errors.subject && "border-emergency")}
          />
          {errors.subject && (
            <p id="subject-error" className="text-sm text-emergency mt-1" role="alert">
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-emergency">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your inquiry..."
          rows={5}
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-all duration-200 resize-none",
            errors.message && "border-emergency"
          )}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-emergency mt-1" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            <span>Send Message</span>
          </>
        )}
      </Button>
    </form>
  );
}