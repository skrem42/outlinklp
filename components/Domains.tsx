"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Shield, Sparkles } from "lucide-react";

const domainFeatures = [
  {
    icon: Zap,
    title: "One-Click Connection",
    description: "Connect your existing domain in seconds. No technical setup required.",
  },
  {
    icon: Sparkles,
    title: "Buy In-App",
    description: "Purchase domains directly from our dashboard.",
  },
  {
    icon: Shield,
    title: "Free SSL",
    description: "Automatic SSL certificates for all custom domains. Always secure.",
  },
  {
    icon: Globe,
    title: "Multiple TLDs",
    description: "Choose from .fans, .link, .bio, .vip and more.",
  },
];

export default function Domains() {
  return (
    <section id="domains" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Brand.{" "}
              <span className="gradient-text-pink">Your Domain.</span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-8">
              Generic link-in-bio URLs scream &quot;I use free tools.&quot; Custom domains like{" "}
              <span className="text-pink-400 font-semibold">jessica.fans</span> or{" "}
              <span className="text-pink-400 font-semibold">mylinks.vip</span>{" "}
              position you as premium.
            </p>
            
            {/* Domain features grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {domainFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
                  >
                    <Icon className="w-6 h-6 text-pink-400 mb-3" />
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-zinc-500">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-400/20 rounded-3xl blur-3xl" />
            
            {/* Domain examples */}
            <div className="relative glass rounded-3xl p-8 glow-pink">
              <div className="text-sm text-zinc-500 mb-4">Your custom domains</div>
              
              <div className="space-y-4">
                {[
                  { domain: "jessica.fans", status: "active", clicks: "12.4k" },
                  { domain: "mylinks.vip", status: "active", clicks: "8.2k" },
                  { domain: "jessicavip.link", status: "pending", clicks: "—" },
                ].map((domain, i) => (
                  <motion.div
                    key={domain.domain}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-pink-400" />
                      <span className="text-white font-medium">{domain.domain}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-zinc-500">{domain.clicks} clicks</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        domain.status === "active" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {domain.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Add domain button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-3 rounded-xl border border-dashed border-zinc-700 text-zinc-500 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
              >
                + Add custom domain
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
