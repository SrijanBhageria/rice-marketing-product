"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/event", label: "Event" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-[#F5F0F8] border-t border-[#D4C4E0]/40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-2xl font-heading bg-gradient-to-r from-[#5B4B8A] via-[#B57EDC] to-[#9FD9C3] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shashwat & Ishana
              </span>
            </Link>
            <p className="text-[#5C5460] text-sm leading-relaxed mb-6">
            Your love story deserves its own space in the world.
              <br />
              This is just the beginning
            </p>
            <div className="flex items-center gap-2 text-[#5B4B8A]">
              <Heart size={16} fill="currentColor" />
              <span className="text-sm font-medium">With love, Molu</span>
            </div>
          </div>

          <div>
            <h4 className="text-[#3D3636] font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#5C5460] hover:text-[#5B4B8A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#3D3636] font-semibold mb-4 text-sm uppercase tracking-wider">
              Event
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#9FD9C3] mt-0.5 flex-shrink-0" />
                <span className="text-[#5C5460] text-sm">
                  Heiwa Heaven Resort<br />
                  Jaipur, Rajasthan
                </span>
              </li>
              <li className="flex items-center gap-2 text-[#5C5460] text-sm">
                <span className="text-[#D4AF37] font-medium">Feb 8–10, 2026</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#3D3636] font-semibold mb-4 text-sm uppercase tracking-wider">
              Blessings
            </h4>
            <p className="text-[#5C5460] text-sm leading-relaxed mb-4">
              May your union be filled with joy, prosperity, and endless love.
              <br />
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#D4C4E0]/30 text-[#5B4B8A] text-xs rounded-full">Save the date</span>
              <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#8B6914] text-xs rounded-full">Feb 10, 2026</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4C4E0]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#5C5460] text-sm text-center md:text-left">
              A wedding gift for you both. With love from Molu. © 2026
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
