"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, ArrowUp } from "lucide-react";

const testimonials = [
  {
    quote: "Switched from Linktree - CTR went from 31% to 68% in 2 weeks. The psychological triggers actually work.",
    name: "Jessica M.",
    handle: "@jessicacreates",
    role: "OnlyFans Creator",
    avatar: "JM",
    metric: { value: "31% → 68%", label: "CTR increase" },
  },
  {
    quote: "The scarcity badges alone increased my subs by 40%. Fans actually feel urgency now.",
    name: "Sarah K.",
    handle: "@sarahvip",
    role: "Content Creator",
    avatar: "SK",
    metric: { value: "+40%", label: "More subs" },
  },
  {
    quote: "Finally I can see which TikTok videos actually drive revenue. Game changer for my content strategy.",
    name: "Emma R.",
    handle: "@emmaexclusive",
    role: "Multi-platform Creator",
    avatar: "ER",
    metric: { value: "3x", label: "ROI on content" },
  },
  {
    quote: "My custom domain makes me look way more professional. Clients take me seriously now.",
    name: "Amanda L.",
    handle: "@amandalux",
    role: "Premium Creator",
    avatar: "AL",
    metric: { value: "+55%", label: "Higher conversions" },
  },
  {
    quote: "The click-to-reveal feature is genius. My CTR doubled overnight. Worth every penny.",
    name: "Mia T.",
    handle: "@miateases",
    role: "OF Creator",
    avatar: "MT",
    metric: { value: "2x", label: "CTR" },
  },
  {
    quote: "I was skeptical but the numbers don't lie. 72% CTR now. Never going back to Linktree.",
    name: "Nicole B.",
    handle: "@nicolebabe",
    role: "Full-time Creator",
    avatar: "NB",
    metric: { value: "72%", label: "Current CTR" },
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
      
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
            Creators Are Seeing{" "}
            <span className="gradient-text-pink">Results</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Real creators. Real CTR boosts. Real revenue growth.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {[
            { value: "2,500+", label: "Active creators" },
            { value: "4.2M", label: "Clicks optimized" },
            { value: "68%", label: "Avg CTR achieved" },
            { value: "$2.4M", label: "Revenue tracked" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text-pink">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-zinc-800 hover:border-pink-500/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-pink-400 text-pink-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-zinc-300 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              
              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
                <ArrowUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">{testimonial.metric.value}</span>
                <span className="text-xs text-zinc-500">{testimonial.metric.label}</span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
