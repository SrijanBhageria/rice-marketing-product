"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Music, Sparkles, Heart } from "lucide-react";

const eventDays = [
  {
    date: "Sunday, 8 February 2026",
    dayLabel: "Day 1",
    events: [
      {
        time: "7:00 PM onwards",
        title: "Rajasthani Evening",
        venue: "Heritage Lawn",
        icon: Music,
        color: "#D4AF37",
      },
    ],
  },
  {
    date: "Monday, 9 February 2026",
    dayLabel: "Day 2",
    events: [
      {
        time: "10:30 AM onwards",
        title: "Haldi",
        venue: "Rewaz Lawn",
        icon: Sparkles,
        color: "#D4AF37",
      },
      {
        time: "12:30 PM onwards",
        title: "Mayra",
        venue: "Rewaz Lawn",
        icon: Sparkles,
        color: "#9FD9C3",
      },
      {
        time: "6:30 PM onwards",
        title: "Ring Ceremony, Tilak & Sangeet",
        venue: "Rewaz Lawn",
        icon: Music,
        color: "#B57EDC",
      },
    ],
  },
  {
    date: "Tuesday, 10 February 2026",
    dayLabel: "Day 3",
    events: [
      {
        time: "9:00 AM onwards",
        title: "Varmala & Phere",
        venue: "Rewaz Lawn",
        icon: Heart,
        color: "#5B4B8A",
      },
      {
        time: "7:00 PM onwards",
        title: "Reception",
        venue: "Rewaz Lawn",
        icon: Sparkles,
        color: "#D4AF37",
      },
    ],
  },
];

function EventCard({
  time,
  title,
  venue,
  icon: Icon,
  color,
  index,
}: {
  time: string;
  title: string;
  venue: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 rounded-2xl bg-white/80 backdrop-blur border border-[#D4C4E0]/40 shadow-lg shadow-[#D4C4E0]/10 hover:shadow-xl hover:shadow-[#D4C4E0]/15 hover:border-[#D4C4E0]/60 transition-all duration-300"
    >
      <div
        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <span style={{ color }}>
          <Icon size={24} />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-semibold mb-1"
          style={{ color, fontFamily: "var(--font-playfair)" }}
        >
          {time}
        </p>
        <h3
          className="text-xl font-heading text-[#3D3636] mb-2 group-hover:text-[#5B4B8A] transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h3>
        <div className="flex items-center gap-2 text-[#5C5460] text-sm">
          <MapPin size={14} className="flex-shrink-0 text-[#9FD9C3]" />
          <span>{venue}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#FAF8FC] via-[#F5F0F8] to-white relative overflow-hidden min-h-[55vh] flex items-center">
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4zm0 32c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z' fill='%235B4B8A' fill-opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#D4C4E0] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#9FD9C3] rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-[#D4C4E0]/30 text-[#5B4B8A] text-sm font-medium uppercase tracking-[0.2em] mb-6"
            >
              When & Where
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#3D3636] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Event Details
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-[#5B4B8A] to-[#B57EDC] rounded-full mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[#5C5460] text-lg md:text-xl max-w-2xl mx-auto"
            >
              Heiwa Heaven Resort · Jaipur, Rajasthan · Feb 8–10, 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Venue highlight */}
      <section className="py-12 bg-white border-y border-[#D4C4E0]/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#FAF8FC] to-[#F5F0F8] border border-[#D4C4E0]/40 shadow-md"
          >
            <MapPin size={24} className="text-[#5B4B8A]" />
            <div className="text-left">
              <p className="font-heading text-[#3D3636] font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                Heiwa Heaven Resort
              </p>
              <p className="text-[#5C5460] text-sm">Jaipur, Rajasthan</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule by day */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FAF8FC] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5v50M5 30h50' stroke='%235B4B8A' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          {eventDays.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                  style={{
                    backgroundColor: "#5B4B8A",
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {day.dayLabel}
                </span>
                <div>
                  <h2
                    className="text-2xl font-heading text-[#3D3636]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {day.date}
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#5B4B8A] to-[#B57EDC] rounded-full mt-1" />
                </div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <EventCard
                    key={`${day.date}-${event.title}`}
                    {...event}
                    index={dayIndex * 5 + eventIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gift closing */}
      <section className="py-24 bg-gradient-to-r from-[#5B4B8A] via-[#B57EDC] to-[#9FD9C3] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 8v24M8 20h24' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-heading text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Gift for You Both
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              With love from Molu — wishing you a lifetime of happiness. Save the date.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
