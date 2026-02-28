"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import {
  Leaf,
  Shield,
  Ruler,
  Wind,
  Users,
  Droplets,
  Sun,
  Package,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const qualityFeatures = [
  {
    icon: Leaf,
    title: "Naturally Aged",
    description: "Aged 12+ months for perfect aroma and texture",
    color: "#5BB98B",
  },
  {
    icon: Shield,
    title: "Hygienically Packed",
    description: "Sealed fresh in food-grade packaging",
    color: "#5B9BD5",
  },
  {
    icon: Ruler,
    title: "Consistent Grains",
    description: "Uniform length in every single pack",
    color: "#E8B86D",
  },
  {
    icon: Wind,
    title: "Rich Aroma",
    description: "Distinctive fragrance that fills your kitchen",
    color: "#E07B67",
  },
  {
    icon: Users,
    title: "Trusted Sourcing",
    description: "Direct from India's finest farming regions",
    color: "#C17F4E",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Sun,
    title: "Farm Sourcing",
    description: "Partnering with 500+ trusted farmers across Punjab, Haryana, and Uttarakhand for the finest paddy.",
    color: "#E8B86D",
  },
  {
    step: "02",
    icon: Droplets,
    title: "Natural Aging",
    description: "Stored in climate-controlled facilities for 12+ months to develop optimal flavor and texture.",
    color: "#5B9BD5",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Precision Processing",
    description: "State-of-the-art milling and 5-stage cleaning to preserve nutrients and remove impurities.",
    color: "#5BB98B",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Quality Testing",
    description: "50+ quality checks including grain length, moisture content, and aroma testing in ISO certified labs.",
    color: "#E07B67",
  },
  {
    step: "05",
    icon: Package,
    title: "Fresh Packaging",
    description: "Nitrogen-flushed, food-grade packaging to lock in freshness and protect from contamination.",
    color: "#C17F4E",
  },
];

const stats = [
  { value: "12+", label: "Months Aged", color: "#E8B86D" },
  { value: "50+", label: "Quality Checks", color: "#5BB98B" },
  { value: "500+", label: "Farm Partners", color: "#5B9BD5" },
  { value: "100%", label: "Natural", color: "#E07B67" },
];

const certifications = [
  { name: "FSSAI", desc: "Food Safety", color: "#5BB98B" },
  { name: "ISO 22000", desc: "Quality Management", color: "#5B9BD5" },
  { name: "HACCP", desc: "Hazard Control", color: "#E8B86D" },
  { name: "Agmark", desc: "Purity Standard", color: "#E07B67" },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero Section - Our Commitment to Quality */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#FFFDF8] via-[#F0FDF4] to-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#5BB98B] text-sm font-medium uppercase tracking-[0.2em] mb-4"
            >
              The Heart of Hariom
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#2E2E2E] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Commitment to
              <br />
              <span className="bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] bg-clip-text text-transparent">Quality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#6B6B6B] text-lg md:text-xl leading-relaxed mb-6"
            >
              At the core of every grain of Hariom rice is a disciplined system of selection, evaluation, and quality assurance — designed to deliver uniform grains, dependable cooking performance, and consistent taste in every batch.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[#6B6B6B] text-lg leading-relaxed mb-6"
            >
              For us, sourcing is a carefully controlled process guided by long-term partnerships, defined quality benchmarks, and a shared responsibility to supply reliable rice across domestic and global markets.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#6B6B6B] text-lg leading-relaxed"
            >
              When you choose Hariom, you choose more than premium-quality rice. You choose a brand built on consistency, trust, and accountability — delivering grains that perform reliably, from everyday meals to large-scale kitchens.
            </motion.p>

            {/* Quality Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-8 md:gap-12"
            >
              <div>
                <span className="text-3xl md:text-4xl font-heading text-[#C17F4E] block" style={{ fontFamily: "var(--font-playfair)" }}>500+</span>
                <p className="text-sm text-[#6B6B6B]">Quality-Controlled Batches Evaluated</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-heading text-[#C17F4E] block" style={{ fontFamily: "var(--font-playfair)" }}>3</span>
                <p className="text-sm text-[#6B6B6B]">Key Grain-Sourcing Regions</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-heading text-[#C17F4E] block" style={{ fontFamily: "var(--font-playfair)" }}>10+</span>
                <p className="text-sm text-[#6B6B6B]">Years of Combined Grain Expertise</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Choose Hariom */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <span className="text-[#C17F4E] text-sm font-medium uppercase tracking-[0.2em]">
                The Difference
              </span>
              <h2
                className="text-3xl md:text-4xl font-heading text-[#2E2E2E] mt-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Why Choose Hariom
              </h2>
            </div>
            <p className="text-[#6B6B6B] max-w-md">
              Five pillars of quality that define every grain we produce.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div 
                  className="rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{ backgroundColor: `${feature.color}25` }}
                  >
                    <feature.icon size={24} style={{ color: feature.color }} />
                  </div>
                  <h3
                    className="text-lg font-heading text-[#2E2E2E] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Clean Timeline */}
      <section className="py-20 bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#5BB98B] text-sm font-medium uppercase tracking-[0.2em]">
              Farm to Table
            </span>
            <h2
              className="text-3xl md:text-4xl font-heading text-[#2E2E2E] mt-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Process
            </h2>
          </motion.div>

          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 md:left-1/2 top-20 bottom-0 w-px bg-gradient-to-b from-[#E8B86D]/30 to-[#5BB98B]/30 md:-translate-x-px" />
                )}

                <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}>
                  {/* Step number & icon */}
                  <div className="flex items-center gap-4 md:w-1/2 md:justify-end">
                    <div className={`flex items-center gap-4 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center relative z-10"
                      >
                        <step.icon size={24} style={{ color: step.color }} />
                      </motion.div>
                      <span
                        className="text-5xl font-heading"
                        style={{ fontFamily: "var(--font-playfair)", color: `${step.color}40` }}
                      >
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <h3
                      className="text-xl font-heading text-[#2E2E2E] mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C17F4E] text-sm font-medium uppercase tracking-[0.2em]">
                Our Heritage
              </span>
              <h2
                className="text-3xl md:text-4xl font-heading text-[#2E2E2E] mt-2 mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Legacy of Quality &
                <span className="text-[#5BB98B]"> Trust</span>
              </h2>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
                For generations, Indian kitchens have relied on rice that delivers consistency, aroma, and dependable cooking results. Hariom carries this legacy forward through disciplined grain selection, structured aging, and precise processing practices designed to maintain uniform quality in every batch.
              </p>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
                Each grain is carefully matured, hygienically handled, and packed with attention to detail — preserving its natural aroma, strength, and authentic taste for kitchens that value reliability every single day.
              </p>

              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{ backgroundColor: `${cert.color}15` }}
                  >
                    <CheckCircle2 size={16} style={{ color: cert.color }} />
                    <span className="text-sm font-medium text-[#2E2E2E]">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#E8B86D]/20 via-[#5BB98B]/10 to-[#5B9BD5]/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <span className="text-[#C17F4E]/40">Quality Testing Lab</span>
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#5BB98B]/20 rounded-xl flex items-center justify-center">
                    <Shield size={28} className="text-[#5BB98B]" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading text-[#2E2E2E]" style={{ fontFamily: "var(--font-playfair)" }}>
                      50+
                    </p>
                    <p className="text-sm text-[#6B6B6B]">Quality Checks</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#C17F4E] via-[#E8B86D] to-[#5BB98B]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-heading text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Experience the Hariom Difference
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust Hariom for quality rice that transforms everyday meals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/products"
                className="bg-white text-[#C17F4E] hover:bg-[#2E2E2E] hover:text-white"
              >
                Explore Products
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="border-white text-white hover:bg-white hover:text-[#C17F4E]"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
