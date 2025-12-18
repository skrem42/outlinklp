"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown } from "lucide-react";

const stats = [
  {
    value: "33%",
    label: "Average CTR from IG bio to OnlyFans",
    icon: TrendingDown,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    value: "67%",
    label: "Fans who click your bio but never make it to OF",
    icon: AlertTriangle,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
      
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
            Your Bio Link is{" "}
            <span className="text-red-400">Costing You Money</span>
          </h2>
        </motion.div>

        {/* Stats grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className={`relative glass rounded-2xl p-8 text-center border ${stat.borderColor}`}
              >
                <div className={`w-14 h-14 mx-auto rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-zinc-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-zinc-400 leading-relaxed">
            You&apos;re spending hours creating content, building your audience, and driving traffic to your bio. 
            But your generic link-in-bio page is a{" "}
            <span className="text-white font-semibold">conversion black hole</span>. 
            No urgency. No engagement. No data on what&apos;s actually working.{" "}
            <span className="text-red-400 font-semibold">Every lost click is a lost subscriber.</span>
          </p>
        </motion.div>

        {/* Visual divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"
        />
      </div>
    </section>
  );
}
