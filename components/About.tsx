"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Reveal, easeOutExpo } from "./lib/animations";

const experiences = [
  {
    period: "2024 — 2026 (2 ans)",
    title: "Chargée Marketing Digital et Formation RSE",
    place: "EDF, Paris",
    description: [
      "Conception d'outils digitaux et modules de sensibilisation",
      "Mise en place de stratégies d'acquisition interne",
      "Organisation d'évènements et actions de communications",
      "Animation des espaces web dédiés et des campagnes de l'offre",
      "Accompagnement du parcours utilisateurs",
      "Réalisation de reporting des indicateurs clés de pilotage marketing",
    ],
  },
  {
    period: "2022 — 2024 (2 ans)",
    title: "Business developer",
    place: "Manpower, Rungis",
    description: [
      "Gestion du portefeuille clients B2B",
      "Développement de l'activité auprès de prospects",
      "Optimisation de la relation client (CRM)",
    ],
  },
  {
    period: "2022 (2 mois)",
    title: "Assistante commerciale",
    place: "Manpower, Saint-Denis",
    description: [
      "Prospection téléphonique et qualification de leads B2B",
      "Suivi des indicateurs de performance",
      "Détection d'opportunités de cross-selling",
    ],
  },
  {
    period: "Depuis 2022 (4 ans)",
    title: "Chargée d'accueil spectateurs",
    place: "PSG, Paris",
    description: [
      "Placement des 40 000 visiteurs au Parc des Princes",
      "Validation des badges d'entrée",
      "Accueil de la clientèle VIP des salons du stade",
    ],
  },
  {
    period: "2021 — 2022 (1 an)",
    title: "Hôtesse évènementielle",
    place: "Maristel'O, Paris",
    description: [
      "Organisation d'une conférence ADP à l'aéroport Paris-Orly",
      "Gestion d'un salon VIP au Stade de France",
      "Accueil du public à l'hôtel Disney New York",
      "Déroulement d'un stand au Parc des expositions",
    ],
  },
];

export default function About() {
  return (
    <section id="apropos" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-20 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-tight text-foreground">
              Expériences professionnelles
            </h2>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border lg:left-1/2" />

          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: easeOutExpo }}
              className={`relative mb-12 flex gap-8 lg:gap-0 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-2 z-10 -translate-x-1/2 lg:left-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.12 + 0.2, type: "spring" }}
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface"
                >
                  <Briefcase className="h-4 w-4 text-accent" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`ml-12 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 + 0.3, duration: 0.6 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/30 hover:shadow-xl"
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    {item.period}
                  </span>
                  <h4 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {item.place}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {item.description.map((desc, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.12 + 0.4 + j * 0.08 }}
                        className="text-sm leading-relaxed text-foreground-muted"
                      >
                        • {desc}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
