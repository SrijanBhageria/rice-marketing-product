"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/app/components/ui/Button";
import { ChevronDown, Sparkles, Leaf, Award, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

// Pre-computed deterministic values to avoid hydration mismatch
const floatingGrains = [
  { id: 0, size: 8, x: 5, delay: 0, duration: 18 },
  { id: 1, size: 6, x: 15, delay: 0.1, duration: 20 },
  { id: 2, size: 10, x: 25, delay: 0.2, duration: 16 },
  { id: 3, size: 5, x: 35, delay: 0.05, duration: 22 },
  { id: 4, size: 7, x: 45, delay: 0.3, duration: 19 },
  { id: 5, size: 9, x: 55, delay: 0.15, duration: 17 },
  { id: 6, size: 6, x: 65, delay: 0.4, duration: 21 },
  { id: 7, size: 8, x: 75, delay: 0.25, duration: 18 },
  { id: 8, size: 5, x: 85, delay: 0.08, duration: 23 },
  { id: 9, size: 7, x: 95, delay: 0.35, duration: 16 },
  { id: 10, size: 9, x: 10, delay: 0.12, duration: 20 },
  { id: 11, size: 6, x: 30, delay: 0.45, duration: 19 },
  { id: 12, size: 8, x: 50, delay: 0.22, duration: 17 },
  { id: 13, size: 5, x: 70, delay: 0.03, duration: 22 },
  { id: 14, size: 7, x: 90, delay: 0.38, duration: 15 },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF8] via-[#FFF8E7] to-[#F0FDF4]" />
        
        {/* Colorful blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-[#E8B86D]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#5BB98B]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.25, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#5B9BD5]/20 rounded-full blur-3xl"
        />

        {/* Floating grain particles */}
        {floatingGrains.map((grain) => (
          <motion.div
            key={grain.id}
            className="absolute rounded-full bg-[#E8B86D]/40"
            style={{
              width: grain.size,
              height: grain.size * 2,
              left: `${grain.x}%`,
              borderRadius: "50%",
            }}
            initial={{ y: "100vh", rotate: 0, opacity: 0 }}
            animate={{
              y: "-100vh",
              rotate: 360,
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: grain.duration,
              delay: grain.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8B86D]/30 to-[#5BB98B]/30 text-[#C17F4E] text-sm font-medium rounded-full mb-6"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} />
              </motion.span>
              Premium Indian Rice
            </motion.div>

            {/* Animated heading */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-heading text-[#2E2E2E] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Pure Grains.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] bg-clip-text text-transparent"
              >
                Honest Taste.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              From Indian fields to your table. Experience the heritage, purity,
              and everyday luxury that Hariom brings to every meal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="primary" size="lg" href="/products">
                Explore Our Rice
              </Button>
              <Button variant="outline" size="lg" href="/about">
                Why Hariom?
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center text-[#6B6B6B] cursor-pointer"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Badges Marquee - Colorful */}
      <section className="py-6 bg-gradient-to-r from-[#C17F4E] via-[#E8B86D] to-[#5BB98B] overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-white text-sm uppercase tracking-wider flex items-center gap-2">
                <Leaf size={16} /> 100% Natural
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white text-sm uppercase tracking-wider flex items-center gap-2">
                <Award size={16} /> Premium Quality
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white text-sm uppercase tracking-wider flex items-center gap-2">
                <Shield size={16} /> FSSAI Certified
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white text-sm uppercase tracking-wider">
                Trusted by 50L+ Families
              </span>
              <span className="text-white/60">•</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#5BB98B] text-sm font-medium uppercase tracking-[0.2em]"
              >
                Our Heritage
              </motion.span>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#2E2E2E] mt-4 mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Legacy of
                <br />
                <span className="text-[#C17F4E]">Quality & Trust</span>
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-20 h-1 bg-gradient-to-r from-[#E8B86D] to-[#5BB98B] mb-6 origin-left"
              />

              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
                For generations, Indian kitchens have been built on the foundation of quality rice. 
                Hariom continues this legacy by sourcing the finest grains from trusted farmers 
                across India&apos;s most fertile regions.
              </p>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
                Every grain is naturally aged, carefully processed, and hygienically packed 
                to preserve its authentic aroma and taste.
              </p>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#C17F4E] font-medium group"
                >
                  Learn more about our story
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/3] bg-gradient-to-br from-[#E8B86D]/30 to-[#5BB98B]/20 rounded-2xl flex items-center justify-center overflow-hidden relative"
              >
                <span className="text-[#C17F4E]/40 text-lg">Rice Field Image</span>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#5BB98B]/20 rounded-full flex items-center justify-center">
                      <Leaf size={20} className="text-[#5BB98B]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2E2E2E]">Farm Fresh</p>
                      <p className="text-xs text-[#6B6B6B]">Direct from farmers</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#C17F4E] text-sm font-medium uppercase tracking-[0.2em]">
              Our Collection
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#2E2E2E] mt-4 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Rice Range
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-1 bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] rounded-full mx-auto mb-4"
            />
            <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection of premium rice varieties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Hariom Ridhi Sidhi", 
                desc: "Best-selling premium long-grain with rich aroma & fluffy texture",
                tag: "Best Seller",
                color: "#E8B86D",
                bgGradient: "from-[#E8B86D]/20 to-[#C17F4E]/10"
              },
              { 
                name: "Hariom Royal", 
                desc: "Perfect balance of aroma, grain length & taste for daily meals",
                tag: "Popular",
                color: "#5BB98B",
                bgGradient: "from-[#5BB98B]/20 to-[#5B9BD5]/10"
              },
              { 
                name: "Hariom Gold Extra Long", 
                desc: "Superior grain length & rich aroma for biryani & special occasions",
                tag: "Chef's Choice",
                color: "#E07B67",
                bgGradient: "from-[#E07B67]/20 to-[#E8B86D]/10"
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                >
                  {/* Tag */}
                  <motion.span
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.tag}
                  </motion.span>

                  {/* Product image area */}
                  <div className={`aspect-square bg-gradient-to-br ${product.bgGradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-[#C17F4E]/30">Product Image</span>
                    
                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: `${product.color}E6` }}
                    >
                      <span className="text-white font-medium">View Details</span>
                    </motion.div>
                  </div>

                  <h3
                    className="text-xl font-heading text-[#2E2E2E] mb-2 group-hover:text-[#C17F4E] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm">{product.desc}</p>

                  {/* Arrow indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <ArrowRight size={20} style={{ color: product.color }} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="primary" href="/products">
              View All Products
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#C17F4E] via-[#E8B86D] to-[#5BB98B] relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Sparkles size={28} className="text-white" />
            </motion.div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Taste the Difference
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience thoughtfully sourced rice that transforms every meal into something special.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="secondary" 
                size="lg" 
                href="/contact"
                className="bg-white text-[#C17F4E] hover:bg-[#2E2E2E] hover:text-white"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
