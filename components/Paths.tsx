import { Container, Eyebrow } from "@/components/ui";
import { paths } from "@/lib/content";

export function Paths() {
  return (
    <section className="bg-paper-deep py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow n="05">Find your way</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Different visitors. Clear next steps.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              You do not have to take in the whole ecosystem. Start where you
              actually are.
            </p>
          </div>
          <ol className="divide-y divide-line border-y border-line lg:col-span-8">
            {paths.map((path, i) => (
              <li key={path.who}>
                <a
                  href={path.href}
                  className="group flex flex-col gap-2 py-5 transition-all duration-300 hover:pl-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="flex min-w-0 gap-4 text-base sm:text-lg">
                    <span className="text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="group-hover:text-terracotta">
                      {path.who}
                    </span>
                  </span>
                  <span className="pl-8 text-[12px] uppercase tracking-[0.16em] text-muted group-hover:text-ink sm:pl-0 sm:text-right">
                    {path.next} →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
