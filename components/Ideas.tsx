import { Photo } from "@/components/Photo";
import { Container, Eyebrow } from "@/components/ui";
import { ideas, images } from "@/lib/content";

export function Ideas() {
  return (
    <section id="ideas" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow n="06">Ideas</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              Research, talks, and writing that sit under her own name.
            </h2>
          </div>
          <Photo
            src={images.podcast}
            alt="Crystal Kizor recording in her studio"
            className="aspect-[5/4] lg:col-span-6"
            sizes="(min-width: 1024px) 45vw, 100vw"
            objectPosition="center 30%"
          />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ideas.map((idea) => (
            <article
              key={idea.title}
              className="border-t border-line pt-6 transition-colors duration-300 hover:border-terracotta"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-terracotta">
                {idea.kicker}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug">
                {idea.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{idea.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
