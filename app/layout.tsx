import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://anu-portfolio-brown.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Anuradha Vellineni — Staff Product Designer & UX Designer",
  description:
    "Portfolio of Anuradha Vellineni, Staff Product Designer at ServiceNow. Specializing in AI-native employee experiences, enterprise design systems, and conversational UI. MS in Human Centered Design & Engineering, UW.",
  keywords: [
    "UX Designer",
    "Product Designer",
    "Staff Product Designer",
    "ServiceNow",
    "Interaction Design",
    "Design Systems",
    "AI Experience Design",
    "Conversational UI",
    "Anuradha Vellineni",
  ],
  authors: [{ name: "Anuradha Vellineni", url: BASE_URL }],
  creator: "Anuradha Vellineni",
  openGraph: {
    title: "Anuradha Vellineni — Staff Product Designer",
    description:
      "I believe that good design should be easy and delightful to use. 10+ years designing for Google, PayPal, Chase, and ServiceNow.",
    type: "website",
    url: BASE_URL,
    siteName: "Anuradha Vellineni Portfolio",
    images: [
      {
        url: "/images/anu-photo.jpg",
        width: 500,
        height: 500,
        alt: "Anuradha Vellineni — Staff Product Designer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuradha Vellineni — Staff Product Designer",
    description:
      "I believe that good design should be easy and delightful to use. 10+ years designing for Google, PayPal, Chase, and ServiceNow.",
    images: ["/images/anu-photo.jpg"],
    creator: "@anuradha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-cream text-navy">
        {children}
      </body>
    </html>
  );
}
