"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Reveal, easeOutExpo } from "./lib/animations";

const education = [
  {
    year: "2026",
    title: "Master of Science Business & Technology Manager",
    place: "EPITECH",
    description: "Spécialités : marketing digital et influence",
  },
  {
    year: "2024",
    title: "BUT Techniques de commercialisation",
    place: "IUT DE PARIS-EST CRÉTEIL",
    description: "Spécialités : marketing, négociation et communication",
  },
];

export default function Education() {
  return (
    <section id="formation" className="relative pt-4 pb-32 lg:pt-6 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-20 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-tight text-foreground">
              Diplômes et formations
            </h2>
          </Reveal>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: easeOutExpo }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-2xl border border-border bg-surface/50 p-8 transition-all hover:border-accent/30 hover:shadow-xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.3 }}
                className="mb-4 flex items-start justify-between"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-2 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-bold text-accent">{item.year}</span>
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground-muted">
                {item.place}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
