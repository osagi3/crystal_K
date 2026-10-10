import { Photo } from "@/components/Photo";
import { Container, Eyebrow } from "@/components/ui";
import { projects } from "@/lib/content";

export function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="scroll-mt-24 pb-8">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow n="03">Work</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              The studio is where the argument becomes a building.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted">
            Studio COKA leads. These are the spaces a first-time visitor should
            see first.
          </p>
        </div>

        <article className="mt-12 grid gap-8 lg:grid-cols-12">
          <Photo
            src={featured.image}
            alt={featured.title}
            className="aspect-[4/5] lg:col-span-7 lg:aspect-auto lg:min-h-[560px]"
            sizes="(min-width: 1024px) 58vw, 100vw"
            objectPosition="center 40%"
          />
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-terracotta">
                {featured.tag}
              </p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{featured.meta}</p>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                {featured.body}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {featured.extra.map((src) => (
                <Photo
                  key={src}
                  src={src}
                  alt={`${featured.title} detail`}
                  className="aspect-[4/5]"
                  sizes="(min-width: 1024px) 20vw, 45vw"
                />
              ))}
            </div>
          </div>
        </article>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {rest.map((project) => (
            <article key={project.id}>
              <Photo
                src={project.image}
                alt={project.title}
                className="aspect-[4/5]"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-terracotta">
                {project.tag}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.meta}</p>
              <p className="mt-4 text-sm leading-7 text-muted">
                {project.body}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {project.extra.map((src) => (
                  <Photo
                    key={src}
                    src={src}
                    alt={`${project.title} detail`}
                    className="aspect-[4/5]"
                    sizes="(min-width: 768px) 22vw, 45vw"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
