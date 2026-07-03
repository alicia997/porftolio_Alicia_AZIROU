"use client";

import { motion } from "motion/react";
import { Counter, Reveal, easeOutExpo } from "./lib/animations";

const stats = [
  { value: 2, suffix: " ans", label: "chez EDF", sublabel: "Marketing Digital & RSE" },
  { value: 2, suffix: " ans", label: "chez Manpower", sublabel: "Business Developer" },
  { value: 2, suffix: <sup>e</sup>, label: "HackAudit", sublabel: "Station F — IA & Audit" },
  {  value: "+35", label: "projets réalisés", sublabel: "Digital & Business" },
  { value: "+100", label: "collaborateurs", sublabel: "Accompagnés en formation" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative pt-4 pb-32 lg:pt-6 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-16 text-center">
            
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-tight text-foreground">
              Chiffres clés
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: easeOutExpo }}
              whileHover={{ y: -12, scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-6 text-center transition-colors hover:border-accent/30"
            >
              {/* Hover gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent"
              />

              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 200 }}
                  className="font-display text-4xl font-bold text-foreground lg:text-5xl"
                >
                  <Counter to={stat.value} suffix={stat.suffix} duration={0} />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 + 0.3 }}
                  className="mt-3 text-sm font-medium text-foreground"
                >
                  {stat.label}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 + 0.4 }}
                  className="mt-1 text-xs text-foreground-muted"
                >
                  {stat.sublabel}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
