"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Container, Section } from "@/components/common";

type SubscribeFormValues = {
  fullName: string;
  email: string;
  organization?: string;
  role: string;
  preferences: {
    research: boolean;
    product: boolean;
    corporate: boolean;
    regulatory: boolean;
  };
};

const roles = [
  "Healthcare Professional",
  "Pharmacist",
  "Distributor",
  "Investor",
  "Researcher",
  "General Public"
];

const preferenceOptions = [
  {
    key: "research",
    label: "Research & Clinical Updates"
  },
  {
    key: "product",
    label: "Product Announcements"
  },
  {
    key: "corporate",
    label: "Corporate & Investor News"
  },
  {
    key: "regulatory",
    label: "Regulatory & Safety Alerts"
  }
] as const;

export default function SubscribePageClient() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<SubscribeFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      role: "",
      preferences: {
        research: true,
        product: false,
        corporate: false,
        regulatory: false
      }
    }
  });

  const onSubmit = async (data: SubscribeFormValues) => {
    setSuccessMessage(null);
    await new Promise((resolve) => setTimeout(resolve, 600));
    reset();
    setSuccessMessage(
      "Thank you for subscribing. A confirmation email will be sent shortly."
    );
  };

  return (
    <main className="bg-white text-brand-navy">
      <Section className="relative overflow-hidden bg-gradient-to-br from-brand-soft/40 via-white to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.12),_transparent_55%)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Subscription Center
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-brand-navy md:text-5xl">
                Stay Informed With Reagan Remedies
              </h1>
              <p className="text-base text-brand-neutral md:text-lg">
                Subscribe to receive pharmaceutical research updates, product
                announcements, and healthcare insights directly to your inbox.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-soft/60 bg-white p-8 shadow-lg">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Subscription Benefits
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-soft/40 p-5">
                    <p className="text-sm font-semibold text-brand-navy">
                      Research Updates
                    </p>
                    <p className="mt-2 text-sm text-brand-neutral">
                      Clinical insights and pharmaceutical advancements.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-brand-soft/40 p-5">
                    <p className="text-sm font-semibold text-brand-navy">
                      Corporate & Regulatory News
                    </p>
                    <p className="mt-2 text-sm text-brand-neutral">
                      Governance updates and compliance alerts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="subscription-form-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm"
              noValidate
            >
              <div className="space-y-6">
                <div>
                  <h2
                    id="subscription-form-heading"
                    className="text-2xl font-semibold text-brand-navy"
                  >
                    Subscription Form
                  </h2>
                  <p className="mt-2 text-sm text-brand-neutral">
                    Required fields are marked with an asterisk.
                  </p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">
                      Full Name <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName", {
                        required: "Full name is required."
                      })}
                      aria-invalid={Boolean(errors.fullName)}
                      className="w-full rounded-md border border-brand-soft px-4 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">
                      Email Address <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email address is required.",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Enter a valid email address."
                        }
                      })}
                      aria-invalid={Boolean(errors.email)}
                      className="w-full rounded-md border border-brand-soft px-4 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">
                      Organization
                    </label>
                    <input
                      type="text"
                      {...register("organization")}
                      className="w-full rounded-md border border-brand-soft px-4 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-navy">
                      Role <span className="text-brand-primary">*</span>
                    </label>
                    <select
                      {...register("role", {
                        required: "Select your role."
                      })}
                      aria-invalid={Boolean(errors.role)}
                      className="w-full rounded-md border border-brand-soft bg-white px-4 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
                    >
                      <option value="">Select your role</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    {errors.role && (
                      <p className="text-xs text-red-600">
                        {errors.role.message}
                      </p>
                    )}
                  </div>
                </div>

                <fieldset className="space-y-3">
                  <legend className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    Subscription Preferences
                  </legend>
                  <div className="space-y-3">
                    {preferenceOptions.map((option) => (
                      <label
                        key={option.key}
                        className="flex items-start gap-3 rounded-lg border border-brand-soft bg-white px-4 py-3"
                      >
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 rounded border-brand-soft text-brand-primary focus:ring-brand-primary"
                          {...register(`preferences.${option.key}`)}
                        />
                        <span className="text-sm font-semibold text-brand-navy">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Subscribe
                </button>
                <p className="text-xs text-brand-neutral">
                  Your information is handled in accordance with healthcare
                  data privacy standards. You may unsubscribe at any time.
                </p>
                {successMessage && (
                  <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    {successMessage}
                  </p>
                )}
              </div>
            </form>

            <div className="rounded-3xl border border-brand-soft bg-white p-8 shadow-sm">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Subscription Coverage
                </p>
                <h3 className="text-2xl font-semibold text-brand-navy">
                  Information tailored for regulated healthcare stakeholders
                </h3>
                <p className="text-sm text-brand-neutral">
                  Subscribers receive curated updates on pharmaceutical research,
                  clinical trial announcements, product launches, and corporate
                  communications.
                </p>
                <ul className="space-y-3 text-sm text-brand-neutral">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                    Research updates and clinical milestones
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                    Product launch notifications and availability
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                    Investor and corporate updates
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                    Regulatory and safety alerts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
