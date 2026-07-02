"use client";

import { motion } from "motion/react";
import { Mail, Globe, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal, TextReveal, Magnetic, easeOutExpo } from "./lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#F8F5F1] pt-16 pb-8 lg:pt-20 lg:pb-10">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-gradient-shift absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="animate-gradient-shift absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" style={{ animationDelay: "7s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: Photo & intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Contact
              </span>
            </Reveal>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-tight text-foreground">
              <TextReveal text="Travaillons" />
              <br />
              <TextReveal text="ensemble." delay={0.15} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground-muted">
                Ouverte à de nouvelles opportunités. Discutons
                de la façon dont je peux contribuer à vos projets digitaux.
              </p>
            </Reveal>
          </div>

          {/* Right: Contact cards */}
          <div className="flex flex-col justify-center gap-4 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            >
              <Magnetic strength={0.15}>
                <motion.a
                  href="mailto:alicia.azirou@gmail.com"
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-xl"
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10"
                    >
                      <Mail className="h-6 w-6 text-accent" />
                    </motion.div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-foreground-muted">Email</p>
                      <p className="mt-1 font-display text-lg font-medium text-foreground">
                        alicia.azirou@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground-muted transition-all group-hover:text-accent group-hover:rotate-45" />
                </motion.a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
            >
              <Magnetic strength={0.15}>
                <motion.a
                  href="https://www.linkedin.com/in/alicia-a-28a44a232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-xl"
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10"
                    >
                      <Globe className="h-6 w-6 text-accent" />
                    </motion.div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-foreground-muted">LinkedIn</p>
                      <p className="mt-1 font-display text-lg font-medium text-foreground">
                        Accéder à mon profil LinkedIn
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground-muted transition-all group-hover:text-accent group-hover:rotate-45" />
                </motion.a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
            >
              <Magnetic strength={0.15}>
                <motion.a
                  href="/cvAliciaAZIROU1.pdf"
                  download="cvAliciaAZIROU1.pdf"
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-xl"
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10"
                    >
                      <Download className="h-6 w-6 text-accent" />
                    </motion.div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-foreground-muted">CV</p>
                      <p className="mt-1 font-display text-lg font-medium text-foreground">
                        Télécharger mon CV
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground-muted transition-all group-hover:text-accent group-hover:rotate-45" />
                </motion.a>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <Reveal delay={0.5}>
        <div className="mt-32 flex justify-center border-t border-border pt-10">
            <p className="text-sm text-foreground-muted">
              © {new Date().getFullYear()} Alicia Azirou — Tous droits réservés.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
