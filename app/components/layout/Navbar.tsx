"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/event", label: "Event" },
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
            ? "bg-[#FAF8FC]/98 backdrop-blur-md shadow-md border-b border-[#D4C4E0]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-xl md:text-2xl font-heading bg-gradient-to-r from-[#5B4B8A] via-[#B57EDC] to-[#9FD9C3] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-playfair)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Shashwat & Ishana
              </motion.span>
            </Link>

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

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#3D3636] hover:text-[#5B4B8A] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#FAF8FC] z-50 md:hidden shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#D4C4E0]/30">
                  <span
                    className="text-xl font-heading bg-gradient-to-r from-[#5B4B8A] to-[#B57EDC] bg-clip-text text-transparent"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Wedding Gift
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#3D3636] hover:text-[#5B4B8A] transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

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
                          className={`block py-3 text-lg transition-colors border-b border-[#D4C4E0]/20 ${
                            pathname === link.href
                              ? "text-[#5B4B8A] font-medium"
                              : "text-[#3D3636] hover:text-[#5B4B8A]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                <div className="p-6 border-t border-[#D4C4E0]/30">
                  <p className="text-sm text-[#5C5460]">
                    With love from Molu — for your new beginning.
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
          isActive ? "text-[#5B4B8A]" : "text-[#3D3636] hover:text-[#5B4B8A]"
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#5B4B8A] to-[#B57EDC] transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
