"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, Zap, ArrowRight } from "lucide-react";

const linkTypes = [
  {
    id: "whitehat",
    icon: Shield,
    title: "Whitehat",
    subtitle: "Full Landing Page",
    description: "Fully customizable landing page with all CTR mechanisms, analytics, and conversion tools. Best for building your brand.",
    color: "green",
    features: ["Full page customization", "All CTR mechanisms", "Voice notes & media", "Complete analytics"],
  },
  {
    id: "greyhat",
    icon: AlertTriangle,
    title: "Greyhat",
    subtitle: "Age-Gated Warning",
    description: "Compliant age verification page before redirecting. Maintains some branding while meeting platform requirements.",
    color: "yellow",
    features: ["18+ age gate", "Platform compliant", "Quick redirect", "Basic tracking"],
  },
  {
    id: "blackhat",
    icon: Zap,
    title: "Blackhat",
    subtitle: "Direct Redirect",
    description: "Instant redirect to your destination. Maximum speed, zero friction. For when every millisecond counts.",
    color: "red",
    features: ["Instant redirect", "Zero load time", "No landing page", "Click tracking only"],
  },
];

export default function LinkTypes() {
  return (
    <section id="link-types" className="relative py-32 overflow-hidden">
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
            Three Link Modes for{" "}
            <span className="gradient-text-pink">Every Strategy</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the right approach for your goals. From full conversion pages to instant redirects.
          </p>
        </motion.div>

        {/* Link types grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {linkTypes.map((type, i) => {
            const Icon = type.icon;
            const colorClasses = {
              green: {
                border: "border-green-500/30 hover:border-green-500/50",
                bg: "bg-green-500/10",
                text: "text-green-400",
                glow: "hover:shadow-green-500/20",
              },
              yellow: {
                border: "border-yellow-500/30 hover:border-yellow-500/50",
                bg: "bg-yellow-500/10",
                text: "text-yellow-400",
                glow: "hover:shadow-yellow-500/20",
              },
              red: {
                border: "border-red-500/30 hover:border-red-500/50",
                bg: "bg-red-500/10",
                text: "text-red-400",
                glow: "hover:shadow-red-500/20",
              },
            }[type.color];
            
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass rounded-2xl p-6 border ${colorClasses.border} transition-all duration-300 hover:shadow-xl ${colorClasses.glow}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colorClasses.text}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1">{type.title}</h3>
                <p className={`text-sm ${colorClasses.text} font-medium mb-4`}>{type.subtitle}</p>
                
                {/* Description */}
                <p className="text-zinc-400 mb-6">{type.description}</p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-500">
                      <ArrowRight className={`w-4 h-4 ${colorClasses.text}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

