"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  showUnderline?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  showUnderline = true,
  className = "",
}: SectionHeadingProps) {
  const alignmentStyles = align === "center" ? "text-center" : "text-left";
  const underlineAlignment = align === "center" ? "mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 ${alignmentStyles} ${className}`}
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#2E2E2E] mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      
      {showUnderline && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className={`w-20 h-1 bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] rounded-full mb-4 ${underlineAlignment}`}
        />
      )}
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#6B6B6B] text-lg md:text-xl max-w-2xl leading-relaxed"
          style={{ marginLeft: align === "center" ? "auto" : undefined, marginRight: align === "center" ? "auto" : undefined }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
