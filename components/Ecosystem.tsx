import { Photo } from "@/components/Photo";
import { MarkPlaceholder } from "@/components/Placeholder";
import { Container, Eyebrow } from "@/components/ui";
import { ecosystem } from "@/lib/content";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Eyebrow n="04">Ecosystem</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Spaces, objects, practice, people.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          Not a list of unrelated businesses. A set of ways Crystal works on
          how we live — weighted so you can see what is central, and what sits
          beside it.
        </p>

        <article className="mt-12 overflow-hidden rounded-2xl border border-line bg-paper-deep/60">
          <div className="grid lg:grid-cols-2">
            <Photo
              src={ecosystem.primary.image}
              alt="Studio COKA interior"
              className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px] lg:rounded-none"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <div className="flex items-start gap-4">
                <MarkPlaceholder
                  letters={ecosystem.primary.letters}
                  name={ecosystem.primary.name}
                />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-terracotta">
                    {ecosystem.primary.kind} · Primary
                  </p>
                  <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
                    {ecosystem.primary.name}
                  </h3>
                </div>
              </div>
              <p className="mt-6 max-w-md text-base leading-7 text-muted">
                {ecosystem.primary.summary}
              </p>
              <a
                href={ecosystem.primary.href}
                className="mt-6 inline-block text-[12px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:translate-x-1 hover:text-terracotta"
                target="_blank"
                rel="noreferrer"
              >
                {ecosystem.primary.hrefLabel} →
              </a>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {ecosystem.secondary.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-line p-6 transition-colors duration-300 hover:border-ink/40 hover:bg-paper-deep/40 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <MarkPlaceholder letters={item.letters} name={item.name} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                    {item.kind}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl">{item.name}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted">{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {ecosystem.tertiary.map((item) => (
            <article key={item.name} className="border-t border-line pt-6">
              <div className="flex items-center gap-3">
                <MarkPlaceholder letters={item.letters} name={item.name} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                    {item.kind}
                  </p>
                  <h3 className="font-serif text-xl">{item.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
