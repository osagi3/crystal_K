import { Photo } from "@/components/Photo";
import { btnGhost, btnPrimary, Container } from "@/components/ui";
import { images, strip } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative pt-24 sm:pt-28">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-7 lg:pb-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Architect · Designer · Founder, Studio COKA
            </p>
            <h1 className="mt-6 max-w-[12ch] font-serif text-[3.15rem] leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.25rem]">
              Architecture, objects, and ideas for how we live in this climate.
            </h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-muted sm:text-lg">
              Crystal Kizor builds climate responsive spaces and the education,
              products, and communities that make better living possible.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#enquire" className={btnPrimary}>
                Start a project
              </a>
              <a href="#enquire" className={btnGhost}>
                Invite her to speak
              </a>
            </div>
          </div>

          <div
            className="reveal lg:col-span-5"
            style={{ animationDelay: "120ms" }}
          >
            <Photo
              src={images.office}
              alt="Crystal Kizor in her studio"
              priority
              objectPosition="center 18%"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted">
              Enugu, Nigeria · TEDx Port Harcourt 2025
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-2 sm:mt-20 sm:gap-3">
          {strip.map((item) => (
            <Photo
              key={item.src}
              src={item.src}
              alt={item.alt}
              className="aspect-[4/5] sm:aspect-[5/4]"
              sizes="33vw"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
