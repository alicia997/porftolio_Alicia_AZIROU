import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

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
  title: "Alicia Azirou — Digital Marketing & Business Specialist",
  description:
    "Chargée Marketing Digital & Formation RSE chez EDF. J'imagine, pilote et optimise des projets digitaux qui créent de la valeur pour les organisations et améliorent l'expérience des utilisateurs.",
  keywords: [
    "Alicia Azirou",
    "Marketing Digital",
    "Transformation Digitale",
    "EDF",
    "Formation RSE",
    "Gestion de Projet",
    "EPITECH",
    "Digital Marketing",
    "Business Specialist",
  ],
  authors: [{ name: "Alicia Azirou" }],
  openGraph: {
    title: "Alicia Azirou — Digital Marketing & Business Specialist",
    description:
      "Portfolio de Alicia Azirou, Chargée Marketing Digital & Formation RSE chez EDF.",
    type: "website",
    locale: "fr_FR",
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
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
