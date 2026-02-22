import type { Metadata } from "next";

import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Reagan Remedies Limited",
  description:
    "Contact Reagan Remedies Limited for product inquiries, distribution partnerships, regulatory information, and appointment bookings."
};

export default function ContactPage() {
  return <ContactPageClient />;
}
