import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Qipa — AI Property Management Software for Hospitality Businesses",
    template: "%s · Qipa",
  },
  description:
    "Qipa is the AI operating system for hospitality businesses. Property management, channel management, guest messaging, revenue, operations, and owner reporting in one platform.",
  keywords: [
    "AI Property Management Software",
    "Property Management Software",
    "Property Management System",
    "Hospitality Management Software",
    "Vacation Rental Software",
    "Short-Term Rental Software",
    "Channel Manager",
    "Hospitality Operating System",
    "AI Hospitality Software",
    "Qipa",
  ],
  authors: [{ name: "Qipa" }],
  openGraph: {
    title: "Qipa — The AI Operating System for Hospitality Businesses",
    description:
      "Manage properties, sync every booking channel, automate guest communication, and run operations from one intelligent platform.",
    type: "website",
    locale: "en_GB",
    siteName: "Qipa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qipa — The AI Operating System for Hospitality Businesses",
    description:
      "Manage properties, sync every booking channel, automate guest communication, and run operations from one intelligent platform.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy font-body text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
