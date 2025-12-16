import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Outlink.bio | Turn Bio Clicks Into Paying Subs",
  description: "The most advanced link in bio tool. Custom domains, deep linking, smart analytics, and monetization tools to convert followers into paying subscribers.",
  keywords: ["link in bio", "creator tools", "monetization", "custom domain", "analytics"],
  openGraph: {
    title: "Outlink.bio | Turn Bio Clicks Into Paying Subs",
    description: "The most advanced link in bio tool. Custom domains, deep linking, smart analytics, and monetization tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
