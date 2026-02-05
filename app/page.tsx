"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/app/components/ui/Button";
import { ChevronDown, Heart, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

// Save the date – wedding palette
const floatingHearts = [
  { id: 0, size: 12, x: 8, delay: 0, duration: 18 },
  { id: 1, size: 8, x: 22, delay: 0.2, duration: 20 },
  { id: 2, size: 10, x: 38, delay: 0.1, duration: 16 },
  { id: 3, size: 6, x: 55, delay: 0.3, duration: 22 },
  { id: 4, size: 14, x: 72, delay: 0.05, duration: 19 },
  { id: 5, size: 8, x: 88, delay: 0.25, duration: 17 },
  { id: 6, size: 10, x: 15, delay: 0.4, duration: 21 },
  { id: 7, size: 12, x: 45, delay: 0.15, duration: 18 },
  { id: 8, size: 6, x: 78, delay: 0.35, duration: 23 },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8FC] via-[#F5F0F8] to-[#EDE8F5]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q70 50 50 90 Q30 50 50 10' stroke='%235B4B8A' fill='none' stroke-width='0.5'/%3E%3Cpath d='M10 50 Q50 30 90 50 Q50 70 10 50' stroke='%235B4B8A' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-[#D4C4E0]/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#9FD9C3]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#B57EDC]/20 rounded-full blur-3xl"
        />

        {floatingHearts.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-[#B57EDC]/25"
            style={{
              width: item.size,
              height: item.size,
              left: `${item.x}%`,
            }}
            initial={{ y: "100vh", rotate: 0, opacity: 0 }}
            animate={{
              y: "-100vh",
              rotate: 360,
              opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart size={item.size} className="w-full h-full" fill="currentColor" />
          </motion.div>
        ))}

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4C4E0]/30 text-[#5B4B8A] text-sm font-medium rounded-full mb-6 uppercase tracking-[0.2em]"
            >
              From vows to URLs.
            </motion.div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-heading text-[#3D3636] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                We&apos;re Getting
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block bg-gradient-to-r from-[#5B4B8A] via-[#B57EDC] to-[#9FD9C3] bg-clip-text text-transparent"
              >
                Married
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-[#3D3636] font-heading mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Shashwat & Ishana
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-[#5C5460] max-w-xl mx-auto mb-10"
            >
              Together with their families, they invite you to celebrate their Indian wedding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
            >
              <div className="flex items-center gap-2 text-[#5B4B8A]">
                <Calendar size={20} />
                <span className="font-medium">Feb 8–10, 2026</span>
              </div>
              <span className="hidden sm:inline text-[#D4C4E0]">•</span>
              <div className="flex items-center gap-2 text-[#5C5460]">
                <MapPin size={20} />
                <span>Heiwa Heaven Resort, Jaipur, Rajasthan</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="primary" size="lg" href="/event">
                Event Details
              </Button>
              <Button variant="outline" size="lg" href="/about">
                Our Story
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center text-[#5C5460] cursor-pointer"
            >
              <span className="text-sm mb-2">Scroll</span>
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Save the date marquee */}
      <section className="py-5 bg-gradient-to-r from-[#9FD9C3] via-[#D4C4E0] to-[#B57EDC] overflow-hidden border-y border-white/30 shadow-inner">
        <motion.div
          animate={{ x: [0, -800] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-[#3D3636]/90 text-sm uppercase tracking-[0.3em] flex items-center gap-2">
                <Heart size={14} fill="currentColor" /> Save the date
              </span>
              <span className="text-[#3D3636]/60">•</span>
              <span className="text-[#3D3636]/90 text-sm uppercase tracking-[0.3em]">
                Feb 8–10, 2026
              </span>
              <span className="text-[#3D3636]/60">•</span>
              <span className="text-[#3D3636]/90 text-sm uppercase tracking-[0.3em] flex items-center gap-2">
                <Heart size={14} fill="currentColor" /> Shashwat & Ishana
              </span>
              <span className="text-[#3D3636]/60">•</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Our Story teaser */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#D4C4E0]/30">
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-30"
          style={{ background: "linear-gradient(90deg, transparent, #D4C4E0, transparent)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#9FD9C3] text-sm font-medium uppercase tracking-[0.2em]">
                Our Story
              </span>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#3D3636] mt-4 mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                How We Met
                <br />
                <span className="text-[#5B4B8A]">& Fell in Love</span>
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B57EDC] mb-6 origin-left"
              />

              <p className="text-[#5C5460] text-lg leading-relaxed mb-6">
                From our first conversation to this moment — we&apos;re so grateful to be
                surrounded by the people who have been with us every step of the way.
              </p>
              <p className="text-[#5C5460] text-lg leading-relaxed mb-8">
                We can&apos;t wait to celebrate the next chapter of our story with you.
              </p>

              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#5B4B8A] font-medium group"
                >
                  Read our story
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    →
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
                className="aspect-[4/3] bg-gradient-to-br from-[#D4C4E0]/40 to-[#9FD9C3]/30 rounded-2xl flex items-center justify-center overflow-hidden relative border-2 border-[#D4C4E0]/50 shadow-xl shadow-[#D4C4E0]/10"
              >
                <span className="text-[#5B4B8A]/40 text-lg">Your photo here</span>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 right-6 bg-white/95 backdrop-blur rounded-xl shadow-xl p-4 border-2 border-[#D4C4E0]/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#9FD9C3]/30 rounded-full flex items-center justify-center">
                      <Heart size={20} className="text-[#5B4B8A]" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#3D3636]">Shashwat & Ishana</p>
                      <p className="text-xs text-[#5C5460]">Est. 2026</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event teaser */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FAF8FC] to-[#F5F0F8] relative overflow-hidden border-t border-[#D4C4E0]/30">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5v50M5 30h50' stroke='%235B4B8A' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#5B4B8A] text-sm font-medium uppercase tracking-[0.2em]">
              When & Where
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#3D3636] mt-4 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Celebration Details
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-1 bg-gradient-to-r from-[#5B4B8A] to-[#B57EDC] rounded-full mx-auto mb-4"
            />
            <p className="text-[#5C5460] text-lg max-w-2xl mx-auto">
              Rajasthani Evening, Haldi, Mayra, Sangeet, Varmala, Phere & Reception — Feb 8–10.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-[#D4C4E0]/10 hover:shadow-xl hover:shadow-[#D4C4E0]/15 transition-all duration-300 text-center border-2 border-[#D4C4E0]/40 card-lift"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-[#D4C4E0]/30 rounded-full flex items-center justify-center ring-2 ring-[#5B4B8A]/10">
                <Calendar size={28} className="text-[#5B4B8A]" />
              </div>
              <h3 className="text-xl font-heading text-[#3D3636] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                Feb 8–10, 2026
              </h3>
              <p className="text-[#5C5460]">Three days of celebration</p>
              <p className="text-[#3D3636] font-medium mt-1">Rajasthani Evening · Haldi · Sangeet · Phere · Reception</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-[#D4C4E0]/10 hover:shadow-xl hover:shadow-[#D4C4E0]/15 transition-all duration-300 text-center border-2 border-[#D4C4E0]/40 card-lift"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-[#9FD9C3]/30 rounded-full flex items-center justify-center ring-2 ring-[#5B4B8A]/10">
                <MapPin size={28} className="text-[#5B7A6B]" />
              </div>
              <h3 className="text-xl font-heading text-[#3D3636] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                Heiwa Heaven Resort
              </h3>
              <p className="text-[#5C5460]">Heritage Lawn · Rewaz Lawn</p>
              <p className="text-[#3D3636] font-medium mt-1">Jaipur, Rajasthan</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="primary" href="/event">
              Full Event Details
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gift closing – no RSVP */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#5B4B8A] via-[#B57EDC] to-[#9FD9C3] relative overflow-hidden border-t border-white/20">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <Heart size={28} className="text-white" fill="currentColor" />
            </motion.div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A small space online for your big forever.
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            For the two people who found home in each other — here’s a place to hold your memories.
            </p>

            <p className="text-white/80 text-sm uppercase tracking-[0.2em]">
            With love always, Molu
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
