"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  Truck,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const contactReasons = [
  { id: "general", label: "General Inquiry", icon: MessageSquare },
  { id: "distribution", label: "Distribution Partnership", icon: Truck },
  { id: "bulk", label: "Bulk Orders", icon: Building2 },
  { id: "feedback", label: "Feedback", icon: Users },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["123 Rice Mill Road,", "Karol Bagh, New Delhi", "India - 110001"],
    color: "#C17F4E",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 123 456 7890", "+91 123 456 7891"],
    href: ["tel:+911234567890", "tel:+911234567891"],
    color: "#5BB98B",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@tamaal.in", "sales@tamaal.in"],
    href: ["mailto:hello@tamaal.in", "mailto:sales@tamaal.in"],
    color: "#E8B86D",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    color: "#C17F4E",
  },
];

const partnerBenefits = [
  {
    icon: CheckCircle2,
    title: "Consistent Quality",
    description: "Every batch meets our strict quality standards.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Strong supply chain for uninterrupted deliveries.",
  },
  {
    icon: Users,
    title: "Marketing Support",
    description: "POS materials and promotional assistance.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [selectedReason, setSelectedReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSelectedReason("");
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#FFFDF8] to-white relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#E8B86D] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#5BB98B] rounded-full blur-3xl"
        />

        {/* Floating icons */}
        {[Mail, Phone, MessageSquare].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:block"
            style={{
              top: `${25 + i * 20}%`,
              left: i % 2 === 0 ? "8%" : "88%",
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <div className="w-14 h-14 bg-white/80 backdrop-blur rounded-2xl shadow-lg flex items-center justify-center">
              <Icon size={24} className="text-[#C17F4E]" />
            </div>
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 bg-[#E8B86D]/20 rounded-full flex items-center justify-center"
            >
              <MessageSquare size={36} className="text-[#E8B86D]" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-[#E8B86D]/20 text-[#C17F4E] text-sm font-medium rounded-full mb-6"
            >
              Get in Touch
            </motion.span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#2E2E2E] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block"
              >
                Let&apos;s Start a
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-[#C17F4E]"
              >
                Conversation
              </motion.span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-24 h-1 bg-[#E8B86D] mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[#6B6B6B] text-lg md:text-xl max-w-2xl mx-auto"
            >
              Have questions about our products or interested in distribution? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-2xl md:text-3xl font-heading text-[#2E2E2E] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Send Us a Message
              </h2>
              <p className="text-[#6B6B6B] mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {/* Reason Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-[#2E2E2E] mb-3">
                  What can we help you with?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {contactReasons.map((reason) => (
                    <motion.button
                      key={reason.id}
                      type="button"
                      onClick={() => setSelectedReason(reason.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                        selectedReason === reason.id
                          ? "border-[#C17F4E] bg-[#C17F4E]/5"
                          : "border-[#E8B86D]/20 hover:border-[#E8B86D]/50"
                      }`}
                    >
                      <reason.icon
                        size={20}
                        className={selectedReason === reason.id ? "text-[#C17F4E]" : "text-[#6B6B6B]"}
                      />
                      <span
                        className={`text-sm font-medium ${
                          selectedReason === reason.id ? "text-[#C17F4E]" : "text-[#2E2E2E]"
                        }`}
                      >
                        {reason.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-[#5BB98B]/10 rounded-2xl p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 mx-auto mb-6 bg-[#5BB98B] rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 size={40} className="text-white" />
                    </motion.div>
                    <h3
                      className="text-2xl font-heading text-[#2E2E2E] mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-[#6B6B6B]">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <motion.label
                          animate={{
                            y: focusedField === "name" || formData.name ? -24 : 0,
                            scale: focusedField === "name" || formData.name ? 0.85 : 1,
                            color: focusedField === "name" ? "#C17F4E" : "#6B6B6B",
                          }}
                          className="absolute left-4 top-3 text-sm font-medium origin-left pointer-events-none"
                        >
                          Your Name
                        </motion.label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 pt-5 rounded-xl border-2 border-[#E8B86D]/30 bg-[#FFFDF8] focus:outline-none focus:border-[#C17F4E] transition-all"
                        />
                      </div>
                      <div className="relative">
                        <motion.label
                          animate={{
                            y: focusedField === "email" || formData.email ? -24 : 0,
                            scale: focusedField === "email" || formData.email ? 0.85 : 1,
                            color: focusedField === "email" ? "#C17F4E" : "#6B6B6B",
                          }}
                          className="absolute left-4 top-3 text-sm font-medium origin-left pointer-events-none"
                        >
                          Email Address
                        </motion.label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 pt-5 rounded-xl border-2 border-[#E8B86D]/30 bg-[#FFFDF8] focus:outline-none focus:border-[#C17F4E] transition-all"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focusedField === "phone" || formData.phone ? -24 : 0,
                          scale: focusedField === "phone" || formData.phone ? 0.85 : 1,
                          color: focusedField === "phone" ? "#C17F4E" : "#6B6B6B",
                        }}
                        className="absolute left-4 top-3 text-sm font-medium origin-left pointer-events-none"
                      >
                        Phone Number (Optional)
                      </motion.label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 pt-5 rounded-xl border-2 border-[#E8B86D]/30 bg-[#FFFDF8] focus:outline-none focus:border-[#C17F4E] transition-all"
                      />
                    </div>

                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focusedField === "message" || formData.message ? -24 : 0,
                          scale: focusedField === "message" || formData.message ? 0.85 : 1,
                          color: focusedField === "message" ? "#C17F4E" : "#6B6B6B",
                        }}
                        className="absolute left-4 top-3 text-sm font-medium origin-left pointer-events-none"
                      >
                        Your Message
                      </motion.label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className="w-full px-4 py-3 pt-5 rounded-xl border-2 border-[#E8B86D]/30 bg-[#FFFDF8] focus:outline-none focus:border-[#C17F4E] transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C17F4E] text-white font-medium rounded-full hover:bg-[#7A5230] transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2
                className="text-2xl md:text-3xl font-heading text-[#2E2E2E] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Contact Information
              </h2>
              <p className="text-[#6B6B6B] mb-8">
                Reach out to us through any of these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FAF7F2] transition-colors"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${info.color}15` }}
                    >
                      <info.icon size={24} style={{ color: info.color }} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-[#2E2E2E] mb-1">{info.title}</h3>
                      {info.lines.map((line, i) =>
                        info.href ? (
                          <a
                            key={i}
                            href={info.href[i]}
                            className="block text-[#6B6B6B] hover:text-[#C17F4E] transition-colors text-sm"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-[#6B6B6B] text-sm">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video bg-gradient-to-br from-[#E8B86D]/20 to-[#C17F4E]/10 rounded-2xl flex items-center justify-center relative overflow-hidden cursor-pointer group"
                >
                  <div className="text-center">
                    <MapPin size={40} className="text-[#C17F4E]/40 mx-auto mb-2" />
                    <span className="text-[#C17F4E]/60">View on Google Maps</span>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#C17F4E]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-white font-medium flex items-center gap-2">
                      Open Maps <ArrowRight size={18} />
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 mx-auto mb-6 bg-[#C17F4E]/10 rounded-full flex items-center justify-center"
            >
              <Sparkles size={28} className="text-[#C17F4E]" />
            </motion.div>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-heading text-[#2E2E2E] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why Partner with Tamaal?
            </h2>
            <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
              Join hundreds of retailers and distributors who trust Tamaal for quality and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 h-full text-center relative overflow-hidden group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-6 bg-[#C17F4E]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#C17F4E] transition-colors"
                  >
                    <benefit.icon
                      size={28}
                      className="text-[#C17F4E] group-hover:text-white transition-colors"
                    />
                  </motion.div>
                  <h3
                    className="text-xl font-heading text-[#2E2E2E] mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B6B6B]">{benefit.description}</p>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#E8B86D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#C17F4E] to-[#6B4423] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl mb-6"
            >
              🤝
            </motion.div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Partner?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Let&apos;s discuss how Tamaal can add value to your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="tel:+911234567890"
                className="bg-white text-[#C17F4E] hover:bg-[#E8B86D] hover:text-white"
              >
                <Phone size={18} className="mr-2" />
                Call Us Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="mailto:sales@tamaal.in"
                className="border-white text-white hover:bg-white hover:text-[#C17F4E]"
              >
                <Mail size={18} className="mr-2" />
                Email Sales Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
