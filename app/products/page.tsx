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
    id: "royal-basmati",
    name: "Royal Basmati",
    tagline: "The King of Rice",
    description: "Our flagship product featuring extra-long grains that elongate beautifully when cooked. Naturally aged for 12+ months to develop its signature aroma and fluffy texture. Perfect for pulao, biryani, and special occasions.",
    features: ["Extra-long grains", "Aged 12+ months", "Rich aroma", "Non-sticky texture"],
    badge: "Best Seller",
    badgeColor: "#E8B86D",
    bgGradient: "from-[#E8B86D]/20 to-[#C17F4E]/10",
    rating: 4.9,
    reviews: 2847,
    icon: Crown,
    number: "01",
  },
  {
    id: "classic-basmati",
    name: "Classic Basmati",
    tagline: "Everyday Excellence",
    description: "Premium basmati for daily cooking that doesn't compromise on quality. Perfect balance of aroma, texture, and value for your everyday meals. A trusted choice for millions of Indian households.",
    features: ["Long grains", "Aged 6+ months", "Fluffy texture", "Great value"],
    badge: "Popular",
    badgeColor: "#5BB98B",
    bgGradient: "from-[#5BB98B]/20 to-[#E8B86D]/10",
    rating: 4.8,
    reviews: 4521,
    icon: Star,
    number: "02",
  },
  {
    id: "biryani-special",
    name: "Biryani Special",
    tagline: "Celebration Ready",
    description: "Handpicked for uniformity and aged to perfection. Each grain separates beautifully, making it the choice of master chefs for authentic biryanis and festive dishes.",
    features: ["Uniform length", "Non-sticky", "Perfect separation", "Premium quality"],
    badge: "Chef's Choice",
    badgeColor: "#E07B67",
    bgGradient: "from-[#E07B67]/20 to-[#E8B86D]/10",
    rating: 4.9,
    reviews: 1893,
    icon: ChefHat,
    number: "03",
  },
  {
    id: "everyday-rice",
    name: "Everyday Rice",
    tagline: "Daily Nourishment",
    description: "Versatile rice for all your daily cooking needs. Quick to cook and consistently delicious. Ideal for dal-chawal, fried rice, khichdi, and all your comfort food favorites.",
    features: ["Quick cooking", "Versatile use", "Consistent quality", "Family pack sizes"],
    badge: "Family Favorite",
    badgeColor: "#5B9BD5",
    bgGradient: "from-[#5B9BD5]/20 to-[#5BB98B]/10",
    rating: 4.7,
    reviews: 5234,
    icon: Heart,
    number: "04",
  },
  {
    id: "golden-sella",
    name: "Golden Sella",
    tagline: "Parboiled Perfection",
    description: "Steam-treated basmati that retains more vitamins and minerals. The parboiling process ensures non-sticky, separate grains every time. A healthier choice for your family.",
    features: ["Parboiled", "Extra nutritious", "Non-sticky", "Golden color"],
    badge: "Healthy Choice",
    badgeColor: "#5BB98B",
    bgGradient: "from-[#5BB98B]/20 to-[#5B9BD5]/10",
    rating: 4.8,
    reviews: 2156,
    icon: Leaf,
    number: "05",
  },
  {
    id: "steam-rice",
    name: "Steam Rice",
    tagline: "Quick & Easy",
    description: "Pre-processed for faster cooking without compromising on taste. Perfect for busy households. Ready in just 10 minutes while maintaining authentic taste and texture.",
    features: ["10-min cooking", "Easy prep", "Consistent results", "Time saver"],
    badge: "Time Saver",
    badgeColor: "#C17F4E",
    bgGradient: "from-[#C17F4E]/20 to-[#E8B86D]/10",
    rating: 4.6,
    reviews: 3421,
    icon: Timer,
    number: "06",
  },
  {
    id: "organic-basmati",
    name: "Organic Basmati",
    tagline: "Pure & Natural",
    description: "Certified organic rice grown without pesticides or chemicals. For health-conscious families who want the purest, most natural rice. Sustainably farmed with care for the environment.",
    features: ["100% organic", "Chemical-free", "Certified pure", "Eco-friendly"],
    badge: "Organic",
    badgeColor: "#5BB98B",
    bgGradient: "from-[#5BB98B]/20 to-[#C17F4E]/10",
    rating: 4.9,
    reviews: 1567,
    icon: Shield,
    number: "07",
  },
  {
    id: "premium-kolam",
    name: "Premium Kolam",
    tagline: "South Indian Favorite",
    description: "Short-grain rice perfect for idli, dosa, and authentic South Indian cuisine. Soft, fluffy texture when cooked. A staple in traditional South Indian kitchens.",
    features: ["Short grain", "Soft texture", "Traditional taste", "Idli & dosa perfect"],
    badge: "Regional Special",
    badgeColor: "#E8B86D",
    bgGradient: "from-[#E8B86D]/20 to-[#5BB98B]/10",
    rating: 4.8,
    reviews: 2890,
    icon: Sparkles,
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
              <Button variant="primary" href="/event">
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
            8 Premium Varieties
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
              href="/event"
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
