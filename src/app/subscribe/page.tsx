import type { Metadata } from "next";

import SubscribePageClient from "@/components/subscribe/SubscribePageClient";

export const metadata: Metadata = {
  title: "Subscribe | Reagan Remedies Limited",
  description:
    "Subscribe to pharmaceutical research updates, product announcements, and corporate news from Reagan Remedies Limited."
};

export default function SubscribePage() {
  return <SubscribePageClient />;
}
