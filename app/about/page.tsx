"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/app/components/ui/Button";
import { Heart, Sparkles } from "lucide-react";

const storyChapters = [
  {
    year: "2020",
    title: "The First Hello",
    content:
      "We met through mutual friends at a small gathering. What started as a casual conversation turned into hours of talking about everything under the sun.",
  },
  {
    year: "2021",
    title: "First Date",
    content:
      "Our first official date was at a cozy café. We knew there was something special — the kind of connection you don't find every day.",
  },
  {
    year: "2023",
    title: "The Proposal",
    content:
      "Under the stars, surrounded by the people we love most, we said yes to forever. It was the beginning of our next chapter.",
  },
  {
    year: "2026",
    title: "Our Wedding Day",
    content:
      "And now we're here — ready to celebrate with you. We couldn't imagine this day without the love and support of our family and friends.",
  },
];

export default function AboutPage() {
  const chaptersRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: chaptersRef,
    offset: ["start center", "end center"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#FAF8FC] via-[#F5F0F8] to-[#FAF8FC]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z' fill='%235B4B8A'/%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#D4C4E0]/40 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#9FD9C3]/30 rounded-full blur-3xl"
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
              className="w-20 h-20 mx-auto mb-8 bg-[#D4C4E0]/30 rounded-full flex items-center justify-center"
            >
              <Heart size={36} className="text-[#5B4B8A]" fill="currentColor" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block text-[#5B4B8A] text-sm font-medium uppercase tracking-[0.3em] mb-4"
            >
              Our Story
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-7xl font-heading text-[#3D3636] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Shashwat & Ishana
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-32 h-1 bg-[#D4C4E0] mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xl md:text-2xl text-[#5C5460] italic max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;The best thing to hold onto in life is each other.&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline – scroll-linked progress */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-[#9FD9C3] text-sm font-medium uppercase tracking-[0.2em]">
              Our Journey
            </span>
            <h2
              className="text-3xl md:text-4xl font-heading text-[#3D3636] mt-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              How We Got Here
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-20 h-1 bg-gradient-to-r from-[#5B4B8A] to-[#B57EDC] rounded-full mx-auto mt-6 origin-center"
            />
          </motion.div>

          <div ref={chaptersRef} className="space-y-32 relative">
            {/* Track line (full height, subtle) */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#D4C4E0]/30 md:left-1/2 md:-translate-x-px hidden sm:block" />
            {/* Progress line – fills as you scroll */}
            <motion.div
              style={{ height: progressHeight }}
              className="absolute left-8 top-0 w-px bg-gradient-to-b from-[#5B4B8A] to-[#B57EDC] origin-top hidden sm:block md:left-1/2 md:-translate-x-px"
            />
            {storyChapters.map((chapter, index) => (
              <motion.div
                key={chapter.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-10 md:gap-16 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 1 ? "md:text-right md:pl-12" : "md:pr-12"}`}>
                  <span
                    className="inline-block px-4 py-2 bg-[#5B4B8A] text-white text-sm font-medium rounded-full mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {chapter.year}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-heading text-[#3D3636] mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {chapter.title}
                  </h3>
                  <p className="text-[#5C5460] leading-relaxed text-lg">{chapter.content}</p>
                </div>
                {/* Timeline dot – centered on the vertical line */}
                <div
                  className="absolute left-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#B57EDC] border-4 border-white shadow-lg z-10 md:left-1/2 md:-translate-x-1/2"
                />
                <div className="md:w-[calc(50%-2rem)] flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 bg-gradient-to-b from-[#FAF8FC] to-[#F5F0F8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
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
              className="text-5xl mb-8"
            >
              <Sparkles className="inline text-[#D4AF37]" size={48} />
            </motion.div>

            <h2
              className="text-3xl md:text-4xl font-heading text-[#3D3636] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Thank You for Being Part of Our Story
            </h2>

            <p className="text-xl text-[#5C5460] mb-10 leading-relaxed">
              We can&apos;t wait to celebrate with you on our wedding day.
            </p>

            <Button variant="primary" size="lg" href="/event">
              Event Details
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
