"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Flame } from "lucide-react";

const linkModes = [
  {
    id: "whitehat",
    icon: Shield,
    name: "Whitehat",
    description: "Standard links for maximum platform compliance. Safe for all social platforms.",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    features: ["Platform compliant", "Direct linking", "No restrictions"],
  },
  {
    id: "greyhat",
    icon: Zap,
    name: "Greyhat",
    description: "Smart redirects and cloaking for sensitive content. Balances reach with safety.",
    color: "from-yellow-500 to-orange-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    features: ["Smart cloaking", "Safe redirects", "18+ warning gates"],
  },
  {
    id: "blackhat",
    icon: Flame,
    name: "Blackhat",
    description: "Maximum evasion for restricted content. Bypass link checkers and shadow bans.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    features: ["Link evasion", "Anti-detection", "Maximum stealth"],
  },
];

export default function LinkTypes() {
  return (
    <section id="link-types" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three Link{" "}
            <span className="gradient-text-pink">Modes</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose your risk level. From fully compliant to maximum evasion.
          </p>
        </motion.div>

        {/* Link modes grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {linkModes.map((mode, i) => {
            const Icon = mode.icon;
            
            return (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border ${mode.borderColor} ${mode.bgColor} hover:scale-[1.02] transition-transform`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {mode.name}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 mb-6">
                  {mode.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${mode.color}`} />
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
