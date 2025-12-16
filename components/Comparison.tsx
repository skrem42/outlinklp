"use client";

import { motion } from "framer-motion";
import { Check, X, AlertTriangle, Minus } from "lucide-react";

const competitors = [
  {
    name: "Outlink",
    isUs: true,
    features: {
      customDomain: { value: true, note: "Full custom domain support" },
      deepLinks: { value: true, note: "Opens apps directly" },
      ctrMechanisms: { value: true, note: "Scarcity, reveals, countdowns" },
      analytics: { value: true, note: "Full funnel tracking" },
      builtForOf: { value: true, note: "Designed for adult creators" },
      domainBanned: { value: "safe", note: "Clean domain reputation" },
      speed: { value: true, note: "Edge-optimized CDN" },
    },
  },
  {
    name: "Linktree",
    isUs: false,
    features: {
      customDomain: { value: true, note: "Pro plan only" },
      deepLinks: { value: false, note: "Opens in-app browser" },
      ctrMechanisms: { value: false, note: "No conversion tools" },
      analytics: { value: "partial", note: "Basic clicks only" },
      builtForOf: { value: false, note: "Generic platform" },
      domainBanned: { value: "safe", note: "Clean reputation" },
      speed: { value: "partial", note: "Average load times" },
    },
  },
  {
    name: "AllMyLinks",
    isUs: false,
    features: {
      customDomain: { value: false, note: "Not available" },
      deepLinks: { value: false, note: "No deep linking" },
      ctrMechanisms: { value: false, note: "No conversion tools" },
      analytics: { value: "partial", note: "Limited data" },
      builtForOf: { value: true, note: "Adult-friendly" },
      domainBanned: { value: "banned", note: "Domain frequently blocked" },
      speed: { value: "partial", note: "Slow load times" },
    },
  },
  {
    name: "Link.me",
    isUs: false,
    features: {
      customDomain: { value: false, note: "Not supported" },
      deepLinks: { value: false, note: "In-app browser only" },
      ctrMechanisms: { value: false, note: "No CTR tools" },
      analytics: { value: "partial", note: "Basic only" },
      builtForOf: { value: false, note: "Not OF-focused" },
      domainBanned: { value: "safe", note: "Clean reputation" },
      speed: { value: true, note: "Fast loading" },
    },
  },
  {
    name: "Beacons",
    isUs: false,
    features: {
      customDomain: { value: true, note: "Paid plans" },
      deepLinks: { value: false, note: "No deep links" },
      ctrMechanisms: { value: false, note: "No urgency tools" },
      analytics: { value: true, note: "Good analytics" },
      builtForOf: { value: false, note: "Creator-general" },
      domainBanned: { value: "safe", note: "Clean reputation" },
      speed: { value: "partial", note: "Heavy pages" },
    },
  },
  {
    name: "Stan Store",
    isUs: false,
    features: {
      customDomain: { value: true, note: "Available" },
      deepLinks: { value: false, note: "No deep linking" },
      ctrMechanisms: { value: false, note: "No CTR features" },
      analytics: { value: true, note: "Revenue tracking" },
      builtForOf: { value: false, note: "E-commerce focus" },
      domainBanned: { value: "safe", note: "Clean domain" },
      speed: { value: "partial", note: "Store overhead" },
    },
  },
];

const featureRows = [
  { key: "customDomain", label: "Custom Domain", description: "Use your own branded URL" },
  { key: "deepLinks", label: "Deep Linking", description: "Opens apps directly, skips in-app browser" },
  { key: "ctrMechanisms", label: "CTR Mechanisms", description: "Scarcity, countdowns, click-to-reveal" },
  { key: "analytics", label: "Advanced Analytics", description: "Full funnel & revenue tracking" },
  { key: "builtForOf", label: "Built for OF", description: "Designed for adult content creators" },
  { key: "domainBanned", label: "Domain Status", description: "Not blocked by platforms" },
  { key: "speed", label: "Fast Loading", description: "Edge-optimized for speed" },
];

function FeatureCell({ value, note }: { value: boolean | string; note: string }) {
  if (value === true) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-green-400" />
        </div>
        <span className="text-xs text-zinc-500 text-center hidden lg:block">{note}</span>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
          <X className="w-4 h-4 text-red-400" />
        </div>
        <span className="text-xs text-zinc-500 text-center hidden lg:block">{note}</span>
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <Minus className="w-4 h-4 text-yellow-400" />
        </div>
        <span className="text-xs text-zinc-500 text-center hidden lg:block">{note}</span>
      </div>
    );
  }
  if (value === "banned") {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
          <AlertTriangle className="w-4 h-4 text-red-400" />
        </div>
        <span className="text-xs text-red-400 text-center hidden lg:block">{note}</span>
      </div>
    );
  }
  if (value === "safe") {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-green-400" />
        </div>
        <span className="text-xs text-zinc-500 text-center hidden lg:block">{note}</span>
      </div>
    );
  }
  return null;
}

export default function Comparison() {
  return (
    <section id="compare" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We{" "}
            <span className="gradient-text-pink">Stack Up</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Not all link-in-bio tools are created equal. See why creators are switching to Outlink.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* Header row */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="p-4" /> {/* Empty cell for feature labels */}
              {competitors.map((competitor, i) => (
                <motion.div
                  key={competitor.name}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className={`p-4 rounded-t-xl text-center ${
                    competitor.isUs
                      ? "bg-gradient-to-b from-pink-500/20 to-transparent border-t-2 border-x-2 border-pink-500/50"
                      : "bg-zinc-900/50"
                  }`}
                >
                  <div className={`font-bold ${competitor.isUs ? "text-pink-400 text-lg" : "text-white"}`}>
                    {competitor.name}
                  </div>
                  {competitor.isUs && (
                    <span className="text-xs text-pink-300">That&apos;s us!</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Feature rows */}
            {featureRows.map((row, rowIndex) => (
              <motion.div
                key={row.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + rowIndex * 0.05 }}
                className={`grid grid-cols-7 gap-2 ${
                  rowIndex % 2 === 0 ? "bg-zinc-900/30" : "bg-transparent"
                }`}
              >
                {/* Feature label */}
                <div className="p-4">
                  <div className="font-semibold text-white">{row.label}</div>
                  <div className="text-xs text-zinc-500">{row.description}</div>
                </div>
                
                {/* Competitor cells */}
                {competitors.map((competitor) => {
                  const feature = competitor.features[row.key as keyof typeof competitor.features];
                  return (
                    <div
                      key={`${competitor.name}-${row.key}`}
                      className={`p-4 flex items-center justify-center ${
                        competitor.isUs ? "bg-pink-500/5 border-x border-pink-500/20" : ""
                      }`}
                    >
                      <FeatureCell value={feature.value} note={feature.note} />
                    </div>
                  );
                })}
              </motion.div>
            ))}

            {/* Bottom row with CTA for Outlink column */}
            <div className="grid grid-cols-7 gap-2 mt-4">
              <div className="p-4" />
              {competitors.map((competitor) => (
                <div
                  key={`${competitor.name}-cta`}
                  className={`p-4 rounded-b-xl ${
                    competitor.isUs
                      ? "bg-gradient-to-t from-pink-500/20 to-transparent border-b-2 border-x-2 border-pink-500/50"
                      : "bg-zinc-900/50"
                  }`}
                >
                  {competitor.isUs && (
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full py-2 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white text-center font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Get Started
                    </motion.a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile summary cards */}
        <div className="lg:hidden mt-12 space-y-4">
          <p className="text-center text-zinc-500 text-sm mb-6">
            Scroll the table above to compare all platforms, or see highlights below:
          </p>
          
          {/* Key differentiators */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4 border border-pink-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-white">Deep Linking</span>
              </div>
              <p className="text-sm text-zinc-400">Only Outlink opens apps directly - others trap users in in-app browsers.</p>
            </div>
            
            <div className="glass rounded-xl p-4 border border-pink-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-white">CTR Mechanisms</span>
              </div>
              <p className="text-sm text-zinc-400">Scarcity badges, countdowns, and reveals - features no other platform offers.</p>
            </div>
            
            <div className="glass rounded-xl p-4 border border-pink-500/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-white">AllMyLinks Domain</span>
              </div>
              <p className="text-sm text-zinc-400">AllMyLinks domain is frequently blocked - your links may not even work.</p>
            </div>
            
            <div className="glass rounded-xl p-4 border border-pink-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-white">Built for OF</span>
              </div>
              <p className="text-sm text-zinc-400">Outlink is specifically designed for OnlyFans creators and adult content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

