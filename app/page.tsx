import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Domains from "@/components/Domains";
import Analytics from "@/components/Analytics";
import Builder from "@/components/Builder";
import LinkTypes from "@/components/LinkTypes";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Comparison />
      <Domains />
      <Analytics />
      <Builder />
      <LinkTypes />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
