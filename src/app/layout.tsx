import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer, Navbar } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reaganremedies.com"),
  title: {
    default: "Reagan Remedies",
    template: "%s | Reagan Remedies"
  },
  description:
    "Reagan Remedies delivers innovative research and high-quality pharmaceutical solutions.",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
