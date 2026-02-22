"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { Button, Container, Section } from "@/components/common";
import NewsletterPreferences from "@/components/auth/NewsletterPreferences";

type SignupFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  preferences: {
    caseStudies: boolean;
    researchTrials: boolean;
    corporateUpdates: boolean;
    regulatoryAnnouncements: boolean;
  };
};

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignupFormValues>({
    defaultValues: {
      preferences: {
        caseStudies: true,
        researchTrials: true,
        corporateUpdates: false,
        regulatoryAnnouncements: false
      }
    }
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log("Signup form submitted", data);
  };

  const passwordValue = watch("password");

  return (
    <Section aria-labelledby="signup-heading" className="bg-brand-soft/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-brand-soft bg-white p-8 shadow-sm md:p-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
                Account Access
              </p>
              <h1
                id="signup-heading"
                className="text-3xl font-semibold text-brand-navy md:text-4xl"
              >
                Subscribe to Reagan Remedies Updates
              </h1>
              <p className="text-sm text-brand-neutral">
                Receive curated clinical insights, research publications, and
                regulatory updates.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
              noValidate
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-brand-navy"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full rounded-md border border-brand-soft px-4 py-3 text-sm text-brand-navy shadow-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    placeholder="Jane Cooper"
                    {...register("fullName", {
                      required: "Full name is required"
                    })}
                    aria-invalid={errors.fullName ? "true" : "false"}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName ? (
                    <p
                      id="fullName-error"
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {errors.fullName.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-brand-navy"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-brand-soft px-4 py-3 text-sm text-brand-navy shadow-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    placeholder="email@reaganremedies.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Enter a valid email address"
                      }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-brand-navy"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full rounded-md border border-brand-soft px-4 py-3 text-sm text-brand-navy shadow-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    placeholder="Create a password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                      }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    aria-describedby={errors.password ? "password-error" : undefined}
                  />
                  {errors.password ? (
                    <p
                      id="password-error"
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {errors.password.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-brand-navy"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="w-full rounded-md border border-brand-soft px-4 py-3 text-sm text-brand-navy shadow-sm transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    placeholder="Confirm password"
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                      validate: (value) =>
                        value === passwordValue || "Passwords do not match"
                    })}
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                  />
                  {errors.confirmPassword ? (
                    <p
                      id="confirmPassword-error"
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {errors.confirmPassword.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <NewsletterPreferences register={register} errors={errors} />

              <Button type="submit" variant="primary" className="w-full">
                Create Account
              </Button>
            </form>

            <p className="mt-6 text-xs text-brand-neutral">
              By subscribing, you agree to our
              {" "}
              <Link href="/terms" className="text-brand-primary">
                Terms of Use
              </Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-brand-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
