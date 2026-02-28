"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/app/components/ui/Button";
import { Heart, Target, Eye, Sprout, Users, Award, Truck } from "lucide-react";

// Story chapters data
const storyChapters = [
  {
    chapter: "Chapter 1",
    title: "The Beginning",
    year: "",
    content:
      "Hariom was born from a vision to create a rice brand that people could trust blindly — for daily meals, festive cooking, and large-scale kitchens alike. The goal was never just to sell rice, but to deliver consistency, purity, and honest value in every grain.",
    image: "The Beginning",
    align: "right",
  },
  {
    chapter: "Chapter 2",
    title: "The First Step",
    year: "",
    content:
      "The early days were defined by disciplined selection, careful evaluation, and a refusal to compromise on grain standards. Quantity was never the focus — uniformity, aroma, and reliable cooking performance were. Each batch carried a single promise: If it carries the Hariom name, it must perform perfectly on the plate.",
    image: "The First Step",
    align: "left",
  },
  {
    chapter: "Chapter 3",
    title: "Growing Through Trust",
    year: "",
    content:
      "Over time, trust travelled quietly — from one retailer to another, from one kitchen to the next. Families appreciated the consistency. Chefs valued the uniform grains. Bulk buyers relied on its dependable cooking results. Hariom gradually became known not just as a rice brand, but as a reliable kitchen staple.",
    image: "Growing Through Trust",
    align: "right",
  },
  {
    chapter: "Chapter 4",
    title: "The Hariom Way",
    year: "",
    content:
      "Great rice is not rushed — it is refined with patience and discipline. With structured aging and controlled processing practices, each grain is allowed to develop improved texture, better elongation, and enhanced aroma. This approach became our internal benchmark — a way of working where tradition meets quality control and time becomes an invisible ingredient.",
    image: "Aging Facility",
    align: "left",
  },
  {
    chapter: "Chapter 5",
    title: "Today & Tomorrow",
    year: "",
    content:
      "Today, Hariom rice serves homes, retailers, HoReCa kitchens, and distribution partners across domestic and international markets. Yet the philosophy remains unchanged — consistent quality, honest value, and dependable performance in every pack. As we grow, every grain continues to represent the same founding vision: to deliver rice that people can trust without a second thought.",
    image: "Modern Facility",
    align: "right",
  },
];

const values = [
  {
    icon: Sprout,
    title: "Rooted in Grain Heritage",
    description: "We respect the long-standing legacy of Indian rice while applying modern quality practices to ensure purity, consistency, and dependable performance in every batch.",
  },
  {
    icon: Heart,
    title: "Crafted with Discipline",
    description: "From careful grain selection to hygienic final packing, every stage is managed with precision, responsibility, and strict quality control.",
  },
  {
    icon: Target,
    title: "Consistency You Can Rely On",
    description: "We focus on delivering uniform grains, stable cooking results, and predictable performance — whether for daily meals or large-scale kitchens.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "We follow one clear rule: if a batch does not meet our benchmarks for grain strength, aroma, and cooking excellence, it does not carry the name Hariom.",
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLElement>(null);
  const chaptersRef = useRef<HTMLDivElement>(null);

  // Tie progress to the whole Story Timeline (Opening + chapters) so the line fills 0→100%
  // as you scroll through the section; progress starts when this section hits the viewport top.
  const { scrollYProgress } = useScroll({
    target: timelineSectionRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef}>
      {/* About Us Intro */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#FFFDF8] relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#C17F4E] text-sm font-medium uppercase tracking-[0.2em]"
          >
            About Us
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 space-y-6 text-lg md:text-xl text-[#6B6B6B] leading-relaxed"
          >
            <p>
              At the heart of every perfect meal lies a grain chosen with care.
            </p>
            <p>
              Adhra Amrit Agro Products LLP was established with a simple yet powerful purpose — to deliver pure, high-quality rice that meets the expectations of households, retailers, HoReCa kitchens, and global buyers alike. From careful selection to hygienic packaging, every stage is governed by precision, discipline, and an uncompromising commitment to quality.
            </p>
            <p>
              Operating from our advanced processing facility at HSIIDC Mega Food Park, Barhi, we combine deep grain expertise with modern milling and controlled aging practices. This ensures consistency, dependable cooking performance, and the authentic aroma and taste that define every pack of Hariom rice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Section - Book Cover */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FAF7F2] to-[#FFFDF8]">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#E8B86D]/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#5BB98B]/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-8 bg-[#C17F4E]/10 rounded-full flex items-center justify-center"
            >
              <Sprout size={36} className="text-[#C17F4E]" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block text-[#C17F4E] text-sm font-medium uppercase tracking-[0.3em] mb-4"
            >
              The Story of
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading text-[#2E2E2E] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hariom
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-32 h-1 bg-[#E8B86D] mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xl md:text-2xl text-[#6B6B6B] italic max-w-2xl mx-auto mb-16"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;A journey of a thousand meals begins with a single grain&rdquo;
            </motion.p>

            {/* Scroll indicator - now part of the content flow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex flex-col items-center text-[#C17F4E]"
              >
                <span className="text-sm mb-2 tracking-wider">Scroll to read</span>
                <motion.div
                  animate={{ scaleY: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-px h-8 bg-[#C17F4E]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline */}
      <section ref={timelineSectionRef} className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Opening */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              Every brand has an origin. Ours did not begin in a boardroom presentation — it began with a simple thought:
            </p>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-3xl text-[#C17F4E] mt-6 italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why shouldn&apos;t premium quality rice be dependable and accessible every single day?
            </motion.p>
          </motion.div>

          {/* Story Chapters */}
          <div ref={chaptersRef} className="space-y-32 relative">
            {/* Progress line - now inside chapters container */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E8B86D]/20 hidden lg:block -translate-x-1/2">
              <motion.div
                style={{ height: progressHeight }}
                className="w-full bg-[#C17F4E] origin-top"
              />
            </div>
            {storyChapters.map((chapter, index) => (
              <StoryChapter key={chapter.chapter} chapter={chapter} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Book Pages Style */}
      <section className="py-32 bg-[#FAF7F2] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 180, 131, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(111, 175, 152, 0.1) 0%, transparent 50%)`,
          }}
        />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#C17F4E] text-sm font-medium uppercase tracking-[0.2em]">
              What We Believe
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-1 bg-[#E8B86D] mx-auto mt-6"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#E8B86D]/10 to-transparent" />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-[#C17F4E]/10 rounded-2xl flex items-center justify-center mb-6"
                >
                  <value.icon size={28} className="text-[#C17F4E]" />
                </motion.div>

                <h3
                  className="text-2xl font-heading text-[#2E2E2E] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value.title}
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement - Full Page */}
      <section className="min-h-screen flex items-center justify-center bg-[#C17F4E] relative overflow-hidden">
        {/* Animated background pattern */}
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 mx-auto mb-8 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <Target size={28} className="text-white" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-sm uppercase tracking-[0.3em]"
            >
              Our Mission
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mt-6 leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              To bring the joy of
              <br />
              <span className="text-[#E8B86D]">premium quality rice</span>
              <br />
              to every Indian table
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-24 h-px bg-white/30 mx-auto mt-10"
            />
          </motion.div>
        </div>
      </section>

      {/* The People Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#5BB98B] text-sm font-medium uppercase tracking-[0.2em]">
                The Heart of Hariom
              </span>
              <h2
                className="text-4xl md:text-5xl font-heading text-[#2E2E2E] mt-4 mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Commitment to
                <span className="text-[#5BB98B]"> Quality</span>
              </h2>

              <div className="space-y-6 text-[#6B6B6B] text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  At the core of every grain of Hariom rice is a disciplined system of selection, evaluation, and quality assurance — designed to deliver uniform grains, dependable cooking performance, and consistent taste in every batch.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  For us, sourcing is a carefully controlled process guided by long-term partnerships, defined quality benchmarks, and a shared responsibility to supply reliable rice across domestic and global markets.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  When you choose Hariom, you choose more than premium-quality rice. You choose a brand built on consistency, trust, and accountability — delivering grains that perform reliably, from everyday meals to large-scale kitchens.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="aspect-[3/4] bg-gradient-to-br from-[#5BB98B]/20 to-[#C17F4E]/10 rounded-2xl flex items-center justify-center"
                >
                  <span className="text-[#C17F4E]/40 text-sm">Farmer Portrait</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="aspect-[3/4] bg-gradient-to-br from-[#E8B86D]/20 to-[#5BB98B]/10 rounded-2xl flex items-center justify-center mt-8"
                >
                  <span className="text-[#C17F4E]/40 text-sm">Field Work</span>
                </motion.div>
              </div>

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 flex gap-8"
              >
                <div className="text-center">
                  <span className="text-3xl font-heading text-[#C17F4E]" style={{ fontFamily: "var(--font-playfair)" }}>
                    500+
                  </span>
                  <p className="text-sm text-[#6B6B6B]">Quality-Controlled Batches Evaluated</p>
                </div>
                <div className="w-px bg-[#E8B86D]/20" />
                <div className="text-center">
                  <span className="text-3xl font-heading text-[#C17F4E]" style={{ fontFamily: "var(--font-playfair)" }}>
                    3
                  </span>
                  <p className="text-sm text-[#6B6B6B]">Key Grain-Sourcing Regions</p>
                </div>
                <div className="w-px bg-[#E8B86D]/20" />
                <div className="text-center">
                  <span className="text-3xl font-heading text-[#C17F4E]" style={{ fontFamily: "var(--font-playfair)" }}>
                    10+
                  </span>
                  <p className="text-sm text-[#6B6B6B]">Years of Combined Grain Expertise</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA - Book Ending */}
      <section className="py-32 bg-gradient-to-b from-white to-[#FFFDF8] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E8B86D]/10 rounded-full blur-3xl"
        />

        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
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
              className="text-6xl mb-8"
            >
              🌾
            </motion.div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#2E2E2E] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Story Continues — With You
            </h2>

            <p className="text-xl text-[#6B6B6B] mb-10 leading-relaxed">
              Every meal prepared with Hariom rice becomes a new chapter in our journey. Your trust drives our commitment, and your table completes our purpose. Guided by the values of Adhra Amrit Agro Products LLP, we continue to grow with the same focus — consistent quality, disciplined processes, and grains that deliver reliability in every serving.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="primary" size="lg" href="/products">
                Explore Our Rice
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Say Hello
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Story Chapter Component
function StoryChapter({
  chapter,
  index,
}: {
  chapter: (typeof storyChapters)[0];
  index: number;
}) {
  const isLeft = chapter.align === "left";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${isLeft ? "" : "lg:flex-row-reverse"}`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={isLeft ? "lg:order-1" : "lg:order-2"}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="aspect-[4/3] bg-gradient-to-br from-[#E8B86D]/20 to-[#C17F4E]/10 rounded-2xl flex items-center justify-center relative overflow-hidden"
        >
          <span className="text-[#C17F4E]/40">{chapter.image}</span>

          {/* Year badge - only when year is set */}
          {chapter.year ? (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute top-4 right-4 bg-[#C17F4E] text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {chapter.year}
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={isLeft ? "lg:order-2" : "lg:order-1"}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[#E8B86D] text-sm font-medium uppercase tracking-[0.2em]"
        >
          {chapter.chapter}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-heading text-[#2E2E2E] mt-2 mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {chapter.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-lg text-[#6B6B6B] leading-relaxed"
        >
          {chapter.content}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="w-16 h-0.5 bg-[#E8B86D] mt-8 origin-left"
        />
      </motion.div>
    </motion.div>
  );
}
