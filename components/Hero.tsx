"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Check, Sparkles } from "lucide-react";
import Link from "next/link";

const tickerItems = [
  "147 creators switched this week",
  "4.2M clicks optimized",
  "Average CTR boost: 2.1x",
  "68% avg CTR achieved",
  "$2.4M subscriber revenue tracked",
];

export default function Hero() {
  const [domain, setDomain] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const handleCheck = () => {
    if (domain.length > 2) {
      setIsAvailable(true);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 radial-gradient" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"
      />

      {/* Social Proof Ticker - positioned below navbar */}
      <div className="relative z-10 mt-20 w-full overflow-hidden border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm">
        <div className="ticker flex items-center gap-8 py-3 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* CTR Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8"
            >
              <TrendingUp className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300">Average 2.1x CTR increase</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Turn 33% CTR into{" "}
              <span className="gradient-text-pink">70%+</span> with Psychology-Powered Bio Links
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-zinc-400 mb-8 max-w-lg">
              Most link-in-bio tools are built for everyone. Outlink is engineered for one thing: 
              getting more fans from Instagram to your OF.
            </p>

            {/* Domain Claim CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => {
                      setDomain(e.target.value.toLowerCase().replace(/[^a-z0-9.]/g, ""));
                      setIsAvailable(null);
                    }}
                    placeholder="mylinks.vip"
                    className="w-full px-4 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-600 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheck}
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition-all btn-glow flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Claim Domain
                </motion.button>
              </div>
              
              {/* Availability message */}
              {isAvailable === true && domain && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mt-3 text-green-400"
                >
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">{domain} is available!</span>
                </motion.div>
              )}
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: "70%+", label: "Avg CTR achieved" },
                { value: "2.1x", label: "Conversion boost" },
                { value: "5 min", label: "Setup time" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text-pink">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup with CTR visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-400/20 rounded-3xl blur-3xl" />
            
            {/* Phone frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative mx-auto w-[300px] h-[600px] bg-zinc-900 rounded-[3rem] border-4 border-zinc-800 shadow-2xl overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
                
                {/* Screen content - Video */}
                <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/1218.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </motion.div>

            {/* Floating CTR card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-20 -left-8 glass rounded-xl p-4 glow-pink"
            >
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-pink-400" />
                <span className="text-xs text-zinc-400">CTR</span>
              </div>
              <div className="text-2xl font-bold text-white">68%</div>
              <div className="text-xs text-green-400">+35% vs last week</div>
            </motion.div>

            {/* Floating clicks card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-32 -right-4 glass rounded-xl p-4 glow-pink"
            >
              <div className="text-2xl font-bold gradient-text-pink">2,847</div>
              <div className="text-zinc-500 text-sm">Clicks today</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="pb-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
