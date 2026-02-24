"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/app/components/ui/Button";
import { 
  Check, 
  Star, 
  Sparkles, 
  ChefHat, 
  Heart, 
  Award,
  ArrowRight,
  Wheat,
  Crown,
  Leaf,
  Timer,
  Shield
} from "lucide-react";

const products = [
  {
    id: "ridhi-sidhi",
    name: "Hariom Ridhi Sidhi – Basmati Rice",
    tagline: "Best Seller",
    description:
      "Hariom Ridhi Sidhi Basmati Rice is our most trusted and best-selling premium long-grain variety, known for its rich natural aroma, extra-long grains, and perfectly fluffy texture after cooking. Carefully milled and hygienically packed, it ensures consistent quality, superior taste, and elegant presentation. Ideal for biryani, pulao, and premium daily meals.",
    features: [
      "Extra-long slender grains with excellent elongation",
      "Strong authentic basmati aroma",
      "Non-sticky, fluffy & separate grains after cooking",
      "Preferred choice for homes, restaurants & bulk buyers",
    ],
    badge: "Best Seller",
    badgeColor: "#E8B86D",
    bgGradient: "from-[#E8B86D]/20 to-[#C17F4E]/10",
    rating: 4.9,
    reviews: 2847,
    icon: Crown,
    number: "01",
  },
  {
    id: "gold-extra-long",
    name: "Hariom Gold Extra Long – Basmati Rice",
    tagline: "Premium Length",
    description:
      "Hariom Gold Extra Long Basmati Rice offers superior grain length, rich aroma, and premium cooking performance. Each grain cooks long, separate, and aromatic, making it perfect for biryani, festive dishes, and restaurant use.",
    features: [
      "Extra-long grain length after cooking",
      "Rich aroma & premium appearance",
      "Ideal for biryani and special occasions",
      "Uniform grain size and consistent quality",
    ],
    badge: "Chef's Choice",
    badgeColor: "#E07B67",
    bgGradient: "from-[#E07B67]/20 to-[#E8B86D]/10",
    rating: 4.9,
    reviews: 1893,
    icon: ChefHat,
    number: "02",
  },
  {
    id: "royal-basmati",
    name: "Hariom Royal – Basmati Rice",
    tagline: "Everyday Premium",
    description:
      "Hariom Royal Basmati Rice delivers a perfect balance of aroma, grain length, and taste. Specially processed for everyday premium consumption with reliable quality and soft, fluffy texture after cooking.",
    features: [
      "Long aromatic grains",
      "Soft and fluffy cooked texture",
      "Suitable for daily meals and pulao",
      "Consistent premium quality",
    ],
    badge: "Popular",
    badgeColor: "#5BB98B",
    bgGradient: "from-[#5BB98B]/20 to-[#E8B86D]/10",
    rating: 4.8,
    reviews: 4521,
    icon: Star,
    number: "03",
  },
  {
    id: "special-choice",
    name: "Hariom Special Choice – Basmati Rice",
    tagline: "Value Premium",
    description:
      "Hariom Special Choice Basmati Rice provides good grain length and pleasant aroma at an economical range. A smart choice for regular consumption while maintaining authentic basmati taste and quality.",
    features: [
      "Good grain length with mild aroma",
      "Value-for-money premium option",
      "Ideal for daily cooking",
      "Reliable and consistent quality",
    ],
    badge: "Value Pick",
    badgeColor: "#5B9BD5",
    bgGradient: "from-[#5B9BD5]/20 to-[#5BB98B]/10",
    rating: 4.7,
    reviews: 5234,
    icon: Heart,
    number: "04",
  },
  {
    id: "tibar-supreme",
    name: "Hariom Tibar Supreme",
    tagline: "Classic Tradition",
    description:
      "Hariom Tibar Supreme is a classic basmati variety with medium-long grains and traditional flavor. Suitable for simple meals, khichdi, and regular household cooking with dependable results.",
    features: [
      "Medium-long grains",
      "Traditional basmati taste",
      "Consistent cooking performance",
      "Ideal for regular household use",
    ],
    badge: "Household Favorite",
    badgeColor: "#C17F4E",
    bgGradient: "from-[#C17F4E]/20 to-[#E8B86D]/10",
    rating: 4.7,
    reviews: 3421,
    icon: Leaf,
    number: "05",
  },
  {
    id: "super-dubar",
    name: "Hariom Super Dubar – Basmati Rice",
    tagline: "Budget Friendly",
    description:
      "Hariom Super Dubar Basmati Rice offers soft texture and light aroma at a budget-friendly price point. A practical option for homes, mess kitchens, and bulk cooking requirements.",
    features: [
      "Soft and tender cooked texture",
      "Light pleasant aroma",
      "Cost-effective bulk option",
      "Suitable for daily rice dishes",
    ],
    badge: "Bulk Option",
    badgeColor: "#5BB98B",
    bgGradient: "from-[#5BB98B]/20 to-[#5B9BD5]/10",
    rating: 4.6,
    reviews: 2156,
    icon: Timer,
    number: "06",
  },
  {
    id: "mogra-supreme",
    name: "Hariom Mogra Supreme – Basmati Rice",
    tagline: "Aromatic & Economical",
    description:
      "Hariom Mogra Supreme is an aromatic mogra variety known for its distinct fragrance and satisfying taste. Perfect for everyday meals where aroma and affordability both matter.",
    features: [
      "Aromatic mogra grains",
      "Soft and tasty after cooking",
      "Economical premium option",
      "Great for regular consumption",
    ],
    badge: "Economical",
    badgeColor: "#E8B86D",
    bgGradient: "from-[#E8B86D]/20 to-[#5BB98B]/10",
    rating: 4.7,
    reviews: 2890,
    icon: Sparkles,
    number: "07",
  },
  {
    id: "mini-mogra",
    name: "Hariom Mini Mogra – Basmati Rice",
    tagline: "Most Economical",
    description:
      "Hariom Mini Mogra Basmati Rice is a compact grain variety offering good taste and aroma at the most economical range. Ideal for bulk usage, catering, and routine meals.",
    features: [
      "Small aromatic grains",
      "Quick and easy cooking",
      "Most economical basmati option",
      "Perfect for bulk and daily use",
    ],
    badge: "Bulk & Catering",
    badgeColor: "#E07B67",
    bgGradient: "from-[#E07B67]/20 to-[#C17F4E]/10",
    rating: 4.6,
    reviews: 1567,
    icon: Wheat,
    number: "08",
  },
];

function ProductSection({ product, index }: { product: typeof products[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const imageX = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    [index % 2 === 0 ? -100 : 100, 0, 0, index % 2 === 0 ? -100 : 100]
  );
  const contentX = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    [index % 2 === 0 ? 100 : -100, 0, 0, index % 2 === 0 ? 100 : -100]
  );

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* Background number */}
      <motion.span
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.05, 0.05, 0]),
          fontFamily: "var(--font-playfair)",
          color: product.badgeColor,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-heading pointer-events-none select-none"
      >
        {product.number}
      </motion.span>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          style={{ opacity, y, scale }}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isEven ? "" : "lg:grid-flow-dense"
          }`}
        >
          {/* Product Image */}
          <motion.div
            style={{ x: imageX }}
            className={isEven ? "" : "lg:col-start-2"}
          >
            <div className={`aspect-square bg-gradient-to-br ${product.bgGradient} rounded-3xl flex items-center justify-center relative overflow-hidden`}>
              {/* Badge */}
              <motion.span
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 right-6 px-4 py-2 text-sm font-medium rounded-full text-white shadow-lg"
                style={{ backgroundColor: product.badgeColor }}
              >
                {product.badge}
              </motion.span>

              {/* Product Number */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 left-6 text-6xl font-heading opacity-20"
                style={{ fontFamily: "var(--font-playfair)", color: product.badgeColor }}
              >
                {product.number}
              </motion.span>

              {/* Large Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="w-40 h-40 rounded-full bg-white/80 flex items-center justify-center shadow-2xl"
              >
                <product.icon size={72} style={{ color: product.badgeColor }} />
              </motion.div>

              {/* Rating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "text-[#E8B86D] fill-[#E8B86D]" : "text-gray-200"}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-[#2E2E2E]">{product.rating}</span>
                  <span className="text-[#6B6B6B] text-sm">({product.reviews.toLocaleString()})</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            style={{ x: contentX }}
            className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium uppercase tracking-[0.2em] mb-3"
              style={{ color: product.badgeColor }}
            >
              {product.tagline}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#2E2E2E] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {product.name}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-24 h-1 rounded-full mb-6 origin-left"
              style={{ backgroundColor: product.badgeColor }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-[#6B6B6B] text-lg leading-relaxed mb-8"
            >
              {product.description}
            </motion.p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {product.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${product.badgeColor}20` }}
                  >
                    <Check size={16} style={{ color: product.badgeColor }} />
                  </div>
                  <span className="text-[#2E2E2E]">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <Button variant="primary" href="/contact">
                Inquire Now
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#FFFDF8] via-[#FFF8E7] to-[#F0FDF4] relative overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8B86D]/30 to-[#5BB98B]/30 text-[#C17F4E] text-sm font-medium rounded-full mb-6"
          >
            <Wheat size={16} />
            8 Hariom Basmati Varieties
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-[#2E2E2E] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Rice{" "}
            <span className="bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] bg-clip-text text-transparent">
              Collection
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#6B6B6B] text-xl max-w-2xl mx-auto mb-10"
          >
            Scroll to discover our carefully curated selection of premium rice varieties
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[#C17F4E]"
            >
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="mx-auto">
                <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2"/>
                <motion.circle
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  cx="12" cy="12" r="4" fill="currentColor"
                />
              </svg>
              <span className="text-sm mt-2 block">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Sections */}
      <div className="bg-white">
        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-[#C17F4E] via-[#E8B86D] to-[#5BB98B] relative overflow-hidden">
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
              className="w-20 h-20 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Award size={40} className="text-white" />
            </motion.div>

            <h2
              className="text-4xl md:text-5xl font-heading text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Found Your Perfect Rice?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Get in touch with us to learn more about our products, pricing, and distribution options.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              href="/contact"
              className="bg-white text-[#C17F4E] hover:bg-[#2E2E2E] hover:text-white"
            >
              Contact Us Today
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
