"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import { Button, Container, Section } from "@/components/common";

type SigninFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SigninFormValues>({
    defaultValues: {
      rememberMe: true
    }
  });

  const onSubmit = async (data: SigninFormValues) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/"
    });
  };

  return (
    <Section aria-labelledby="signin-heading" className="bg-brand-soft/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl"
        >
          <div className="rounded-2xl border border-brand-soft bg-white p-8 shadow-sm md:p-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
                Account Access
              </p>
              <h1
                id="signin-heading"
                className="text-3xl font-semibold text-brand-navy md:text-4xl"
              >
                Sign in to your account
              </h1>
              <p className="text-sm text-brand-neutral">
                Access your research subscriptions, saved updates, and clinical
                insights.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
              noValidate
            >
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
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required"
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

              <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2 text-brand-neutral">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-brand-soft text-brand-primary focus:ring-brand-primary"
                    {...register("rememberMe")}
                  />
                  Remember me
                </label>
                <Link href="/auth/forgot-password" className="text-brand-primary">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Sign In
              </Button>
            </form>

            <p className="mt-6 text-xs text-brand-neutral">
              By signing in, you agree to our
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
