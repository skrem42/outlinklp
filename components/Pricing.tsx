"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Get started with the basics",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Basic link in bio",
      "Up to 3 links",
      "Basic click analytics",
      "Standard templates",
      "Outlink subdomain",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious creators",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "Everything in Free",
      "Unlimited links",
      "All CTR mechanisms",
      "Custom domain",
      "Voice notes",
      "Advanced analytics",
      "Full page customization",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Agency",
    description: "For teams & managers",
    monthlyPrice: 79,
    yearlyPrice: 63,
    features: [
      "Everything in Pro",
      "Unlimited creators",
      "Team collaboration",
      "White-label options",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "Priority feature requests",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Creator-Friendly{" "}
            <span className="gradient-text-pink">Pricing</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Start free. Upgrade when you&apos;re ready to maximize conversions.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm ${!isYearly ? "text-white" : "text-zinc-500"}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-8 rounded-full bg-zinc-800 transition-colors"
          >
            <motion.div
              animate={{ x: isYearly ? 24 : 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"
            />
          </button>
          <span className={`text-sm ${isYearly ? "text-white" : "text-zinc-500"}`}>
            Yearly{" "}
            <span className="text-pink-400 font-semibold">(-20%)</span>
          </span>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? "bg-gradient-to-b from-pink-500/20 to-transparent border-2 border-pink-500/50 glow-pink"
                  : "glass border border-zinc-800"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center pt-4 pb-6 border-b border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-zinc-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-zinc-500">/mo</span>
                  )}
                </div>
                {isYearly && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-zinc-500 mt-1">
                    Billed annually (${(isYearly ? plan.yearlyPrice : plan.monthlyPrice) * 12}/yr)
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="py-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-zinc-300">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-pink-500/20" : "bg-zinc-800"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-pink-400" : "text-zinc-500"}`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white btn-glow"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500">
            14-day free trial on Pro. No credit card required to start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
