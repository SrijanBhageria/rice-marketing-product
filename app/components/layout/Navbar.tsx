"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFDF8]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-2xl md:text-3xl font-heading bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-playfair)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Tamaal
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2E2E2E] hover:text-[#C17F4E] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#FFFDF8] z-50 md:hidden shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#E8B86D]/20">
                  <span
                    className="text-2xl font-heading bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] bg-clip-text text-transparent"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Tamaal
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#2E2E2E] hover:text-[#C17F4E] transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1 p-6">
                  <motion.ul
                    className="space-y-4"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.07,
                          delayChildren: 0.1,
                        },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    {navLinks.map((link) => (
                      <motion.li
                        key={link.href}
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              y: { stiffness: 1000, velocity: -100 },
                            },
                          },
                          closed: {
                            y: 20,
                            opacity: 0,
                            transition: {
                              y: { stiffness: 1000 },
                            },
                          },
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-3 text-lg transition-colors border-b border-[#E8B86D]/10 ${
                            pathname === link.href
                              ? "text-[#C17F4E] font-medium"
                              : "text-[#2E2E2E] hover:text-[#C17F4E]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-[#E8B86D]/20">
                  <p className="text-sm text-[#6B6B6B]">
                    Pure Grains. Honest Taste.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link href={href} className="relative group">
      <span
        className={`transition-colors text-sm font-medium tracking-wide ${
          isActive ? "text-[#C17F4E]" : "text-[#2E2E2E] hover:text-[#C17F4E]"
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#C17F4E] to-[#E8B86D] transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
