"use client";

import { motion } from "framer-motion";
import { 
  Image, 
  Mic, 
  BadgeCheck, 
  MousePointer, 
  Video, 
  Palette, 
  ShieldAlert,
  Play
} from "lucide-react";

const builderFeatures = [
  {
    icon: Image,
    title: "Header Modes",
    description: "Full-width images or avatar modes",
  },
  {
    icon: Mic,
    title: "Voice Notes",
    description: "Add a personal touch with audio messages",
  },
  {
    icon: BadgeCheck,
    title: "Verified Badges",
    description: "Display follower counts & verification",
  },
  {
    icon: MousePointer,
    title: "CTA Buttons",
    description: "Brand logos for OnlyFans, Fansly & more",
  },
  {
    icon: Video,
    title: "Video Backgrounds",
    description: "Dynamic video & image backgrounds",
  },
  {
    icon: Palette,
    title: "Theme Options",
    description: "Light/dark themes with full customization",
  },
  {
    icon: ShieldAlert,
    title: "Age Verification",
    description: "Auto 18+ gates for adult platforms",
  },
];

// Static waveform bars to avoid jitter
const waveformBars = [6, 12, 8, 16, 10, 14, 8, 18, 12, 10, 14, 8];

export default function Builder() {
  return (
    <section id="builder" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      
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
            Pages That Look Premium,{" "}
            <span className="gradient-text-pink">Convert Like Crazy</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Build stunning bio pages in minutes with our drag-and-drop builder. 
            Every element designed to maximize your conversions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Page preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-400/20 rounded-3xl blur-3xl" />
            
            {/* Phone mockup */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mx-auto w-[280px]"
            >
              <div className="relative bg-zinc-900 rounded-[2.5rem] border-4 border-zinc-800 shadow-2xl overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-20" />
                
                {/* Screen content */}
                <div className="pt-8">
                  {/* Header image */}
                  <div className="h-32 bg-gradient-to-br from-pink-500 to-orange-400 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <div className="w-20 h-20 rounded-full border-4 border-black bg-gradient-to-br from-pink-400 to-orange-300" />
                    </div>
                  </div>
                  
                  {/* Profile info */}
                  <div className="pt-12 px-4 pb-6 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <h3 className="text-white font-bold">Jessica</h3>
                      <BadgeCheck className="w-4 h-4 text-pink-400" />
                    </div>
                    <p className="text-xs text-zinc-500 mb-3">47.2k followers</p>
                    
                    {/* Voice note - Fixed height waveform */}
                    <div className="flex items-center justify-center gap-2 mb-4 p-2 rounded-lg bg-zinc-800/50 h-12">
                      <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                        <Play className="w-3 h-3 text-white ml-0.5" />
                      </div>
                      <div className="flex items-center gap-0.5 h-5">
                        {waveformBars.map((height, i) => (
                          <div
                            key={i}
                            className="w-1 bg-pink-400 rounded-full"
                            style={{ height: `${height}px` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-zinc-500 flex-shrink-0">0:08</span>
                    </div>
                    
                    {/* Links */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-orange-400/20 border border-pink-500/30"
                      >
                        <div className="absolute -top-1 right-2 px-2 py-0.5 rounded-full bg-pink-500 text-[10px] text-white font-bold">
                          VIP
                        </div>
                        <div className="text-white text-sm font-medium">OnlyFans</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50"
                      >
                        <div className="text-white text-sm font-medium">Free Preview</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50"
                      >
                        <div className="text-white text-sm font-medium">Instagram</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4">
              {builderFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-orange-400/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-zinc-500">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
