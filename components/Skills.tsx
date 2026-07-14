"use client";

import { motion } from "motion/react";
import { Reveal, easeOutExpo } from "./lib/animations";

const skills = [
  {
    title: "Outils",
    subtitle: "Marketing digital",
    items: [
      "Figma",
      "Canva",
      "WordPress",
      "Visual Studio Code",
      "Salesforce",
      "Power BI",
      "Locker Studio",
    ],
  },
  {
    title: "Hard Skills",
    subtitle: "Marketing digital & expérience utilisateur",
    items: [
      "Marketing Digital",
      "Gestion de Projet",
      "Transformation Digitale",
      "Learning Experience Design",
      "Analyse de données & KPI",
      "UX / Expérience Utilisateur",
    ],
  },
  {
    title: "Soft Skills",
    subtitle: "Qualités professionnelles",
    items: [
      "Esprit d'analyse",
      "Organisation",
      "Communication",
      "Rigueur",
      "Autonomie",
      "Esprit d'équipe",
    ],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="relative pt-4 pb-32 lg:pt-6 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-tight text-foreground">
              Compétences
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: easeOutExpo }}
              className="min-h-[360px] rounded-[2.5rem] border border-border bg-gradient-to-br from-surface/90 to-accent/5 p-8 shadow-2xl shadow-accent/10 backdrop-blur-xl transition-all hover:-translate-y-2 hover:border-accent/40 hover:shadow-accent/20"
            >
              <div className="mb-6 flex items-center justify-between gap-4 rounded-3xl border border-accent/10 bg-surface-2/90 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/90">
                    {skill.title}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">
                    {skill.title}
                  </h3>
                </div>
                <div className="rounded-3xl bg-accent/10 p-4 text-accent">
                  <span className="text-sm font-bold">{skill.subtitle}</span>
                </div>
              </div>

              <ul className="grid gap-3 text-sm text-foreground-muted md:grid-cols-1 lg:grid-cols-1">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-3xl border border-border bg-surface/70 px-4 py-3 shadow-sm"
                  >
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[0.55rem] font-bold text-surface">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
