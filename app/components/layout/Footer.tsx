"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-[#FAF7F2] border-t border-[#E8B86D]/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-3xl font-heading bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Tamaal
              </span>
            </Link>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
              Pure Grains. Honest Taste.
              <br />
              From Indian fields to your table, we bring you the finest quality rice crafted with care and tradition.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#C17F4E]/10 flex items-center justify-center text-[#C17F4E] hover:bg-[#C17F4E] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#2E2E2E] font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6B6B6B] hover:text-[#C17F4E] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#2E2E2E] font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#5BB98B] mt-0.5 flex-shrink-0" />
                <span className="text-[#6B6B6B] text-sm">
                  123 Rice Mill Road,<br />
                  New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#5B9BD5] flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-[#6B6B6B] hover:text-[#C17F4E] transition-colors text-sm"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#E07B67] flex-shrink-0" />
                <a
                  href="mailto:hello@tamaal.in"
                  className="text-[#6B6B6B] hover:text-[#C17F4E] transition-colors text-sm"
                >
                  hello@tamaal.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Trust */}
          <div>
            <h4 className="text-[#2E2E2E] font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Promise
            </h4>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
              Every grain of Tamaal rice is sourced from trusted farmers, naturally aged, and hygienically packed to bring you the best quality.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#C17F4E]/10 text-[#C17F4E] text-xs rounded-full">
                100% Natural
              </span>
              <span className="px-3 py-1 bg-[#5BB98B]/10 text-[#5BB98B] text-xs rounded-full">
                Farm Fresh
              </span>
              <span className="px-3 py-1 bg-[#5B9BD5]/10 text-[#5B9BD5] text-xs rounded-full">
                Premium Quality
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E8B86D]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6B6B] text-sm">
              © 2026 Tamaal. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-[#6B6B6B] hover:text-[#C17F4E] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[#6B6B6B] hover:text-[#C17F4E] transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
