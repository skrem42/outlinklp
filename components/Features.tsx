"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Eye, Sparkles, Lock, Award, PartyPopper } from "lucide-react";

const features = [
  {
    id: "scarcity",
    icon: Clock,
    title: "Scarcity Badges",
    boost: "+12-18% CTR",
    description: '"Only 3 spots left!" badges that create urgency. Live viewer counts showing social proof. Limited availability triggers immediate action.',
    preview: {
      type: "scarcity",
      badge: "🔥 Only 3 spots left!",
      viewers: "47 viewing now",
    },
  },
  {
    id: "reveal",
    icon: Eye,
    title: "Click-to-Reveal",
    boost: "+15-22% CTR",
    description: "Gamified unlocking mechanism. Fans tap 3-5 times to reveal your OF link. Creates investment and curiosity that drives clicks.",
    preview: {
      type: "reveal",
      taps: 3,
      text: "Tap 3x to unlock",
    },
  },
  {
    id: "countdown",
    icon: Clock,
    title: "Countdown Reveals",
    boost: "+8-14% CTR",
    description: '"Link unlocking in 5...4...3..." Builds anticipation before redirecting. The delay creates tension that maximizes click intent.',
    preview: {
      type: "countdown",
      seconds: 5,
    },
  },
  {
    id: "blur",
    icon: Lock,
    title: "Blur Preview",
    boost: "+10-16% CTR",
    description: "Teaser text over blurred content. \"Click to see exclusive content.\" The curiosity gap demands action.",
    preview: {
      type: "blur",
      text: "Click to reveal exclusive...",
    },
  },
  {
    id: "badges",
    icon: Award,
    title: "Exclusive Access Badges",
    boost: "+5-10% CTR",
    description: "VIP, Members Only, Premium tags. Elevates perceived value and makes fans feel special for accessing your content.",
    preview: {
      type: "badge",
      badges: ["VIP", "Premium", "Exclusive"],
    },
  },
  {
    id: "effects",
    icon: PartyPopper,
    title: "Visual Effects",
    boost: "+3-7% CTR",
    description: "Confetti celebrations on reveal. Pulse and glow effects that draw attention. Micro-interactions that delight and engage.",
    preview: {
      type: "effects",
    },
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Psychological Triggers That{" "}
            <span className="gradient-text-pink">Convert</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            We studied what makes fans click. Then we built tools to automate it.
          </p>
        </motion.div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <p className="text-zinc-500">
            Outlink isn&apos;t another Linktree clone. It&apos;s a conversion machine built with one metric in mind:{" "}
            <span className="text-pink-400 font-semibold">CTR</span>. Every feature is backed by conversion psychology.
          </p>
        </motion.div>

        {/* Features tabs */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tab list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature.id === feature.id;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group ${
                    isActive
                      ? "border-pink-500/50 bg-pink-500/10 glow-pink"
                      : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-gradient-to-br from-pink-500 to-orange-400"
                          : "bg-zinc-800 group-hover:bg-zinc-700"
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`font-semibold text-lg transition-colors ${
                        isActive ? "text-white" : "text-zinc-300"
                      }`}>
                        {feature.title}
                      </h3>
                    </div>
                    {/* CTR badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      isActive 
                        ? "bg-pink-500/20 text-pink-300" 
                        : "bg-zinc-800 text-zinc-500"
                    }`}>
                      {feature.boost}
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Feature content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-8 glow-strong"
              >
                {/* Feature icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center mb-6">
                  <activeFeature.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Feature title & boost */}
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-white">
                    {activeFeature.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                    {activeFeature.boost}
                  </span>
                </div>
                
                {/* Feature description */}
                <p className="text-lg text-zinc-400 mb-8">
                  {activeFeature.description}
                </p>
                
                {/* Feature preview mockup */}
                <div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-zinc-700/50 overflow-hidden relative p-6 flex items-center justify-center">
                  <FeaturePreview feature={activeFeature} />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturePreview({ feature }: { feature: typeof features[0] }) {
  const preview = feature.preview;
  
  if (preview.type === "scarcity") {
    return (
      <div className="w-full max-w-[240px]">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative p-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-orange-400/20 border border-pink-500/40"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-3 right-2 px-3 py-1 rounded-full bg-pink-500 text-xs text-white font-bold"
          >
            {preview.badge}
          </motion.div>
          <div className="text-white font-semibold text-center mb-2">VIP OnlyFans</div>
          <div className="text-xs text-zinc-400 text-center flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {preview.viewers}
          </div>
        </motion.div>
      </div>
    );
  }
  
  if (preview.type === "reveal") {
    return (
      <div className="w-full max-w-[240px] text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl bg-zinc-800 border border-zinc-700 cursor-pointer"
        >
          <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-3" />
          <div className="text-white font-semibold mb-2">{preview.text}</div>
          <div className="flex justify-center gap-2">
            {[...Array(preview.taps)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
                className="w-3 h-3 rounded-full bg-pink-500"
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }
  
  if (preview.type === "countdown") {
    return (
      <div className="w-full max-w-[240px] text-center">
        <div className="p-6 rounded-xl bg-zinc-800 border border-zinc-700">
          <div className="text-zinc-400 text-sm mb-3">Link unlocking in...</div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-5xl font-bold gradient-text-pink"
          >
            {preview.seconds}
          </motion.div>
        </div>
      </div>
    );
  }
  
  if (preview.type === "blur") {
    return (
      <div className="w-full max-w-[240px]">
        <div className="relative p-6 rounded-xl bg-zinc-800 border border-zinc-700 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-400/20 blur-xl" />
          <div className="relative text-center">
            <Lock className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <div className="text-white font-semibold blur-sm mb-2">Secret content here...</div>
            <div className="text-xs text-pink-400">Click to reveal</div>
          </div>
        </div>
      </div>
    );
  }
  
  if (preview.type === "badge") {
    return (
      <div className="w-full max-w-[240px]">
        <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {preview.badges?.map((badge, i) => (
              <motion.span
                key={badge}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-bold"
              >
                {badge}
              </motion.span>
            ))}
          </div>
          <div className="text-white font-semibold text-center text-sm">Premium Access</div>
        </div>
      </div>
    );
  }
  
  // Effects
  return (
    <div className="w-full max-w-[240px]">
      <motion.div
        animate={{ boxShadow: ["0 0 20px rgba(255,107,157,0.3)", "0 0 40px rgba(255,107,157,0.6)", "0 0 20px rgba(255,107,157,0.3)"] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="p-6 rounded-xl bg-zinc-800 border border-pink-500/30"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          className="text-4xl text-center mb-2"
        >
          🎉
        </motion.div>
        <div className="text-white font-semibold text-center">Link Revealed!</div>
        <div className="text-xs text-zinc-400 text-center mt-1">+ confetti effect</div>
      </motion.div>
    </div>
  );
}
