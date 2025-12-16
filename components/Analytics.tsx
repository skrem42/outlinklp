"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Share2, 
  Target, 
  TrendingUp, 
  Activity, 
  ShieldCheck, 
  Gauge 
} from "lucide-react";

const analyticsFeatures = [
  {
    icon: Globe,
    title: "Geographic Tracking",
    description: "Which countries convert best",
  },
  {
    icon: Smartphone,
    title: "Device Breakdown",
    description: "Mobile vs desktop behavior",
  },
  {
    icon: Share2,
    title: "Referrer Analytics",
    description: "IG vs TikTok vs Twitter performance",
  },
  {
    icon: Target,
    title: "UTM Tracking",
    description: "Measure campaign effectiveness",
  },
  {
    icon: TrendingUp,
    title: "Conversion Funnel",
    description: "Views → Clicks → Conversions",
  },
  {
    icon: Activity,
    title: "Real-Time Dashboard",
    description: "Watch fans engage live",
  },
  {
    icon: ShieldCheck,
    title: "Bot Detection",
    description: "Know your real traffic vs fake clicks",
  },
  {
    icon: Gauge,
    title: "Link Health Scores",
    description: "Optimization recommendations",
  },
];

export default function Analytics() {
  return (
    <section id="analytics" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
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
            Analytics That{" "}
            <span className="gradient-text-pink">Actually Matter</span>
          </h2>
        </motion.div>

        {/* Pain point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Basic bio link tools show you click counts. That&apos;s it.{" "}
            <span className="text-pink-400 font-semibold">Outlink shows you everything.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {analyticsFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/30 hover:bg-zinc-900 transition-all group"
                >
                  <Icon className="w-6 h-6 text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-zinc-500">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-400/20 rounded-3xl blur-3xl" />
            
            <div className="relative glass rounded-3xl p-6 glow-pink">
              {/* Mini dashboard */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-zinc-500">Live Analytics</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400">Live</span>
                </div>
              </div>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Today", value: "2,847", change: "+23%" },
                  { label: "CTR", value: "68%", change: "+12%" },
                  { label: "Conversions", value: "142", change: "+18%" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="text-center p-3 rounded-lg bg-zinc-900/50"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-zinc-500">{stat.label}</div>
                    <div className="text-xs text-green-400">{stat.change}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mini chart */}
              <div className="h-32 flex items-end justify-between gap-1 p-4 rounded-xl bg-zinc-900/50">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-pink-500 to-orange-400 opacity-80"
                  />
                ))}
              </div>
              
              {/* Top sources */}
              <div className="mt-6">
                <div className="text-sm text-zinc-500 mb-3">Top Sources</div>
                <div className="space-y-2">
                  {[
                    { source: "Instagram", percent: 68, color: "bg-pink-500" },
                    { source: "TikTok", percent: 22, color: "bg-purple-500" },
                    { source: "Twitter", percent: 10, color: "bg-blue-400" },
                  ].map((source) => (
                    <div key={source.source} className="flex items-center gap-3">
                      <span className="text-sm text-zinc-400 w-20">{source.source}</span>
                      <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${source.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className={`h-full ${source.color}`}
                        />
                      </div>
                      <span className="text-sm text-white w-10 text-right">{source.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500 text-lg">
            Finally understand which promo strategies{" "}
            <span className="text-pink-400">actually drive revenue</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

