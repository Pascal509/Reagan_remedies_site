"use client";

import Link from "next/link";
import {
  Building2,
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Container, Section } from "../common";

const subjects = [
  "General Inquiry",
  "Product Information",
  "Distribution Partnership",
  "Regulatory Inquiry",
  "Complaint / Pharmacovigilance"
];

const appointmentTypes = [
  "Medical Consultation",
  "Distribution Meeting",
  "Regulatory Discussion",
  "Corporate Partnership"
];

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  subject: string;
  message: string;
};

type AppointmentFormValues = {
  fullName: string;
  email: string;
  phone: string;
  appointmentType: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
};

export default function ContactPageClient() {
  const {
    register: registerContact,
    handleSubmit: handleContactSubmit,
    formState: { errors: contactErrors, isSubmitting: isContactSubmitting },
    reset: resetContact
  } = useForm<ContactFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: ""
    }
  });

  const {
    register: registerAppointment,
    handleSubmit: handleAppointmentSubmit,
    formState: {
      errors: appointmentErrors,
      isSubmitting: isAppointmentSubmitting
    },
    reset: resetAppointment
  } = useForm<AppointmentFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      appointmentType: "",
      preferredDate: "",
      preferredTime: "",
      notes: ""
    }
  });

  const onSubmitContact = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    resetContact();
  };

  const onSubmitAppointment = async (data: AppointmentFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    resetAppointment();
  };

  return (
    <main className="bg-white text-brand-navy">
      <Section className="relative overflow-hidden bg-gradient-to-br from-brand-soft/40 via-white to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.12),_transparent_55%)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Corporate Contact
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-brand-navy md:text-5xl">
                Contact Reagan Remedies Limited
              </h1>
              <p className="text-base text-brand-neutral md:text-lg">
                We are committed to providing responsive support to healthcare
                professionals, distribution partners, and patients across
                Nigeria and West Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90"
                >
                  Explore Our Products
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md border border-brand-soft px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-soft/60"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-brand-soft/60 bg-white p-8 shadow-lg">
              <div className="space-y-6">
                <div className="rounded-2xl border border-dashed border-brand-soft bg-brand-soft/30 px-6 py-8 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    Support Availability
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-brand-navy">
                    Dedicated corporate response team
                  </p>
                  <p className="mt-2 text-sm text-brand-neutral">
                    Every inquiry is routed to the appropriate compliance unit.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-soft/40 p-5">
                    <p className="text-sm font-semibold text-brand-navy">
                      Response Time
                    </p>
                    <p className="mt-2 text-sm text-brand-neutral">
                      24–48 hours for standard requests.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-brand-soft/40 p-5">
                    <p className="text-sm font-semibold text-brand-navy">
                      Compliance Desk
                    </p>
                    <p className="mt-2 text-sm text-brand-neutral">
                      Regulatory, pharmacovigilance and ethics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/60 text-brand-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    Address
                  </p>
                  <p className="mt-2 text-sm text-brand-neutral">
                    No 24 Musa Yar&apos;Adua Drive<br />
                    New Owerri, Owerri<br />
                    Imo State, Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/60 text-brand-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Phone</p>
                  <a
                    href="tel:+2349031244371"
                    className="mt-2 block text-sm font-semibold text-brand-primary"
                  >
                    +2349031244371
                  </a>
                  <div className="mt-2 flex items-center gap-2 text-xs text-brand-neutral">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Mon–Fri, 9:00am – 5:00pm WAT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/60 text-brand-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    Emails
                  </p>
                  <a
                    href="mailto:info@reaganremedies.com"
                    className="mt-2 block text-sm font-semibold text-brand-primary"
                  >
                    info@reaganremedies.com
                  </a>
                  <a
                    href="mailto:admin@reaganremedies.com"
                    className="mt-1 block text-sm font-semibold text-brand-primary"
                  >
                    admin@reaganremedies.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <form
            onSubmit={handleContactSubmit(onSubmitContact)}
            className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm"
            aria-labelledby="contact-form-title"
            noValidate
          >
            <div className="space-y-6">
              <div>
                <p
                  id="contact-form-title"
                  className="text-2xl font-semibold text-brand-navy"
                >
                  Send a Message
                </p>
                <p className="mt-2 text-sm text-brand-neutral">
                  Required fields are marked with an asterisk.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Full Name <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      {...registerContact("fullName", {
                        required: "Full name is required."
                      })}
                      aria-invalid={Boolean(contactErrors.fullName)}
                      className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                  {contactErrors.fullName && (
                    <p className="text-xs text-red-600">
                      {contactErrors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Email Address <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      {...registerContact("email", {
                        required: "Email address is required.",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Enter a valid email address."
                        }
                      })}
                      aria-invalid={Boolean(contactErrors.email)}
                      className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                  {contactErrors.email && (
                    <p className="text-xs text-red-600">
                      {contactErrors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Phone Number <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <input
                      type="tel"
                      {...registerContact("phone", {
                        required: "Phone number is required."
                      })}
                      aria-invalid={Boolean(contactErrors.phone)}
                      className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                  {contactErrors.phone && (
                    <p className="text-xs text-red-600">
                      {contactErrors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Organization
                  </label>
                  <div className="relative">
                    <Building2
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      {...registerContact("organization")}
                      className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy">
                  Subject <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                    aria-hidden="true"
                  />
                  <select
                    {...registerContact("subject", {
                      required: "Please select a subject."
                    })}
                    aria-invalid={Boolean(contactErrors.subject)}
                    className="w-full rounded-md border border-brand-soft bg-white px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
                {contactErrors.subject && (
                  <p className="text-xs text-red-600">
                    {contactErrors.subject.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy">
                  Message <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-3 h-4 w-4 text-brand-neutral"
                    aria-hidden="true"
                  />
                  <textarea
                    rows={5}
                    {...registerContact("message", {
                      required: "Please enter your message."
                    })}
                    aria-invalid={Boolean(contactErrors.message)}
                    className="w-full resize-none rounded-md border border-brand-soft px-10 py-3 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                  />
                </div>
                {contactErrors.message && (
                  <p className="text-xs text-red-600">
                    {contactErrors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isContactSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>
            </div>
          </form>

          <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-2xl font-semibold text-brand-navy">
                  Book an Appointment
                </p>
                <p className="mt-2 text-sm text-brand-neutral">
                  Schedule a conversation with our corporate team.
                </p>
              </div>
              <form
                onSubmit={handleAppointmentSubmit(onSubmitAppointment)}
                className="space-y-5"
                aria-labelledby="appointment-form-title"
                noValidate
              >
                <span id="appointment-form-title" className="sr-only">
                  Book an Appointment
                </span>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Full Name <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      {...registerAppointment("fullName", {
                        required: "Full name is required."
                      })}
                      aria-invalid={Boolean(appointmentErrors.fullName)}
                      className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                  {appointmentErrors.fullName && (
                    <p className="text-xs text-red-600">
                      {appointmentErrors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Email <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      {...registerAppointment("email", {
                        required: "Email is required.",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Enter a valid email address."
                        }
                      })}
                      aria-invalid={Boolean(appointmentErrors.email)}
                      className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                  {appointmentErrors.email && (
                    <p className="text-xs text-red-600">
                      {appointmentErrors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Phone <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <input
                      type="tel"
                      {...registerAppointment("phone", {
                        required: "Phone is required."
                      })}
                      aria-invalid={Boolean(appointmentErrors.phone)}
                      className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                  {appointmentErrors.phone && (
                    <p className="text-xs text-red-600">
                      {appointmentErrors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Appointment Type <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <CalendarCheck
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <select
                      {...registerAppointment("appointmentType", {
                        required: "Select an appointment type."
                      })}
                      aria-invalid={Boolean(appointmentErrors.appointmentType)}
                      className="w-full rounded-md border border-brand-soft bg-white px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    >
                      <option value="">Select a type</option>
                      {appointmentTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  {appointmentErrors.appointmentType && (
                    <p className="text-xs text-red-600">
                      {appointmentErrors.appointmentType.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">
                      Preferred Date <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <CalendarCheck
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                        aria-hidden="true"
                      />
                      <input
                        type="date"
                        {...registerAppointment("preferredDate", {
                          required: "Select a preferred date."
                        })}
                        aria-invalid={Boolean(appointmentErrors.preferredDate)}
                        className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                      />
                    </div>
                    {appointmentErrors.preferredDate && (
                      <p className="text-xs text-red-600">
                        {appointmentErrors.preferredDate.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">
                      Preferred Time <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <Clock
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-neutral"
                        aria-hidden="true"
                      />
                      <input
                        type="time"
                        {...registerAppointment("preferredTime", {
                          required: "Select a preferred time."
                        })}
                        aria-invalid={Boolean(appointmentErrors.preferredTime)}
                        className="w-full rounded-md border border-brand-soft px-10 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                      />
                    </div>
                    {appointmentErrors.preferredTime && (
                      <p className="text-xs text-red-600">
                        {appointmentErrors.preferredTime.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-3 top-3 h-4 w-4 text-brand-neutral"
                      aria-hidden="true"
                    />
                    <textarea
                      rows={4}
                      {...registerAppointment("notes")}
                      className="w-full resize-none rounded-md border border-brand-soft px-10 py-3 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isAppointmentSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Request Appointment
                </button>
                <p className="text-xs text-brand-neutral">
                  This appointment request does not replace medical emergency
                  services. In case of emergency, contact your nearest
                  healthcare provider.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-soft/30">
        <Container>
          <div className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm">
            <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-brand-soft bg-brand-soft/30">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Google Maps Placeholder
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-navy">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Healthcare Commitment
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Committed to Excellence in Healthcare
              </h2>
              <p className="text-base text-white/75 md:text-lg">
                Partner with Reagan Remedies Limited to expand access to quality
                therapies and strengthen healthcare outcomes across Africa.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white/90"
              >
                View Products
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                About Us
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
