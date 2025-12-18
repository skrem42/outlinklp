"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes Outlink different from Linktree?",
    answer: "Outlink is specifically designed for conversion optimization. While Linktree gives you basic links, we provide psychological triggers like scarcity badges, click-to-reveal mechanisms, and countdown timers that can boost your CTR from 33% to 70%+. We also offer custom domains, advanced analytics, and revenue tracking.",
  },
  {
    question: "How do the CTR mechanisms actually work?",
    answer: "Our CTR mechanisms are based on proven conversion psychology. Scarcity badges create urgency ('Only 3 spots left'), click-to-reveal gamifies the experience, countdowns build anticipation, and blur previews trigger curiosity. Each mechanism is designed to maximize the chance a visitor clicks through to your destination.",
  },
  {
    question: "Can I use my own custom domain?",
    answer: "Yes! You can connect any domain you own with one click, or purchase a new domain directly from our dashboard. Custom domains like 'yourname.fans' look more professional and can significantly improve click-through rates compared to generic subdomains.",
  },
  {
    question: "Is Outlink compliant with Instagram's terms of service?",
    answer: "Yes. Outlink operates as a standard link-in-bio tool. Our 'Whitehat' mode provides full landing pages, 'Greyhat' includes age verification gates for adult content, and you can choose the approach that works best for your content and platform requirements.",
  },
  {
    question: "What analytics do you provide?",
    answer: "We track everything: geographic location, device type, referral source (Instagram vs TikTok vs Twitter), UTM parameters, conversion funnels, and real-time engagement. Unlike basic tools that just count clicks, we help you understand which content and promotions actually drive revenue.",
  },
  {
    question: "How quickly can I get set up?",
    answer: "Most creators are up and running in under 5 minutes. Create an account, customize your page, and paste your new link into your bio. If you want to add a custom domain, that takes about 5 additional minutes.",
  },
  {
    question: "Do you offer a free plan?",
    answer: "Yes! Our free plan includes basic link-in-bio functionality with up to 3 links and basic analytics. When you're ready to unlock CTR mechanisms, custom domains, and advanced analytics, you can upgrade to Pro.",
  },
  {
    question: "Can agencies manage multiple creators?",
    answer: "Absolutely. Our Agency plan supports unlimited creators with team collaboration, white-label options, and API access. You can manage all your clients from a single dashboard with detailed reporting across all accounts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="gradient-text-pink">Questions</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Everything you need to know about Outlink.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`rounded-2xl border transition-colors ${
                openIndex === i
                  ? "border-pink-500/50 bg-pink-500/5"
                  : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-semibold pr-4 ${
                  openIndex === i ? "text-white" : "text-zinc-300"
                }`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.15 }}
                  className={`flex-shrink-0 ${
                    openIndex === i ? "text-pink-400" : "text-zinc-500"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
