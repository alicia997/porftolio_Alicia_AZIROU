import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Alicia Azirou — Chargée de Projet Digital & Formation",
  description:
    "Chargée de Projet Digital & Formation chez EDF. Je pilote des projets digitaux, conçois des contenus et parcours de formation et accompagne la transformation digitale.",
  keywords: [
    "Alicia Azirou",
    "Projet Digital",
    "Transformation Digitale",
    "EDF",
    "Formation RSE",
    "Gestion de Projet",
    "EPITECH",
    "Chargée de Projet Digital",
    "Formation Digitale",
  ],
  authors: [{ name: "Alicia Azirou" }],
  openGraph: {
    title: "Alicia Azirou — Chargée de Projet Digital & Formation",
    description:
      "Portfolio de Alicia Azirou, Chargée de Projet Digital & Formation chez EDF.",
    type: "website",
    locale: "fr_FR",
    url: "/",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio d’Alicia Azirou — Marketing digital, Data et gestion de projet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alicia Azirou | Portfolio",
    description:
      "Portfolio de Alicia Azirou, Chargée de Projet Digital & Formation chez EDF.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
     <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function () {
          try {
            var theme = localStorage.getItem("theme");

            document.documentElement.classList.remove("dark");

            if (theme === "dark") {
              document.documentElement.classList.add("dark");
            }
          } catch (error) {}
        })();
      `,
    }}
  />
</head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Footer />
      </body>
    </html>
  );
}
