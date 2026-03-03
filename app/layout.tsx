import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anuradha Vellineni — Staff Product Designer",
  description:
    "Portfolio of Anuradha Vellineni, Staff Product Designer specializing in AI-native employee experiences, enterprise design systems, and conversational UI.",
  openGraph: {
    title: "Anuradha Vellineni — Staff Product Designer",
    description:
      "Love everything about Design and Technology. I believe that good design should be easy and delightful to use.",
    type: "website",
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
