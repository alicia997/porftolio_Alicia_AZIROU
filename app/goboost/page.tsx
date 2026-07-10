import Link from "next/link";

export default function GoBoostPage() {
  return (
    <section className="relative min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Prototype</p>
            <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold">
              GoBoost
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex rounded-full border border-accent bg-accent/5 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
          >
            Retour à l'accueil
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
          <iframe
            src="/goboost/index.html"
            title="Prototype GoBoost"
            className="h-[calc(100vh-10rem)] w-full border-none"
          />
        </div>
      </div>
    </section>
  );
}
