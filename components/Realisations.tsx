"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal, easeOutExpo } from "./lib/animations";

const achievements = [
  {
    title: "Campagne digitale",
    description:
      "Mise en place d'une stratégie de contenu et d'automatisation pour augmenter l'engagement de 35%.",
    image: "/Lanepp.jpg",
    url: "https://lanep-web.vercel.app/",
  },
  {
    title: "Refonte UX",
    description:
      "Amélioration du tunnel de conversion grâce à un design centré utilisateur et une navigation simplifiée.",
    image: "/Canopee.jpg",
    url: "#",
  },
  {
    title: "Formation digitale",
    description:
      "Accompagnement de plus de 100 collaborateurs sur les outils digitaux, le marketing et la transformation.",
    image: "/Goboost.jpg",
    url: "#",
  },
];

export default function Realisations() {
  return (
    <section id="realisations" className="relative pt-4 pb-32 lg:pt-6 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-tight text-foreground">
              Mes réalisations
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: easeOutExpo }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-3xl border border-border bg-surface/60 p-6 shadow-2xl shadow-accent/5 transition-all hover:border-accent/30 hover:shadow-accent/20"
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-surface">
                  <Image
                    src={item.image}
                    alt={`Aperçu de ${item.title}`}
                    width={1200}
                    height={720}
                    loading="eager"
                    className="h-[280px] sm:h-[320px] w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex justify-end">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-accent bg-accent/5 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
                  >
                    Voir le projet
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
