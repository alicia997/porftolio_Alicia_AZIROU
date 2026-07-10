"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { TextReveal, Magnetic, easeOutExpo } from "./lib/animations";
import { MapPin } from "lucide-react";


const badges = [
  "Marketing Digital",
  "Transformation Digitale",
  "Gestion de Projet",
  "Performance Business",
  "Formation Digitale",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.95]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="accueil"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-gradient-shift absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div
          className="animate-gradient-shift absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="animate-gradient-shift absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px]"
          style={{ animationDelay: "10s" }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10"
      >
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-border"
            />

            <div className="relative h-[clamp(200px,30vw,350px)] w-[clamp(200px,30vw,350px)] overflow-hidden rounded-[2rem] border border-border">
              <Image
                src="/imagemoi.png"
                alt="Alicia Azirou"
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 350px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <h1 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tight text-foreground">
            <TextReveal text="Alicia" delay={0.4} />{" "}
            <TextReveal text="Azirou" delay={0.6} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: easeOutExpo }}
            className="mt-5 text-lg font-medium text-accent md:text-xl"
          >
            Chargée Marketing Digital & Formation RSE
          </motion.p>
          <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
  className="mt-6 flex justify-center"
>
  <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/80 px-6 py-3 shadow-lg backdrop-blur-md">
    <MapPin className="h-5 w-5 text-accent" />
    <span className="text-base font-medium text-foreground-muted">
      Paris, France
    </span>
  </div>
</motion.div>


<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8, ease: easeOutExpo }}
  className="mx-auto mt-16 mb-10 max-w-4xl text-left"
 
>
  <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">
    À PROPOS
  </span>

  <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
    Qui suis-je ?
  </h2>

  <div className="mt-5 h-1 w-20 rounded-full bg-accent/80" />
</motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: easeOutExpo }}
            style={{ opacity: descriptionOpacity }}
            className="mx-auto mt-8 max-w-4xl space-y-4 text-justify text-base leading-relaxed text-foreground-muted lg:text-lg"
          >
            <p>
              Actuellement Chargée Marketing Digital & Formation RSE chez EDF,
              j'accompagne le déploiement de projets digitaux, la conception de
              dispositifs de formation innovants et le développement de
              stratégies de communication interne.
            </p>
            <p>
              Diplômée d'EPITECH, je suis spécialisée en marketing digital,
              performance business, transformation digitale et gestion de projet.
            </p>
            <p>
              Mon approche combine vision stratégique, créativité, analyse des
              données et orientation utilisateur afin de concevoir des solutions
              digitales efficaces et mesurables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: easeOutExpo }}
            className="mt-6 hidden flex-wrap justify-center gap-2 md:flex"
          >
            {badges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                whileHover={{ y: -2 }}
                className="rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium text-foreground-muted backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-foreground"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

        <hr/>
        </div>
      </motion.div>
    </section>
  );
}