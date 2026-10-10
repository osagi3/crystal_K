import { Photo } from "@/components/Photo";
import { Container, Eyebrow } from "@/components/ui";
import { images } from "@/lib/content";

export function Positioning() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Eyebrow n="02">Who she is</Eyebrow>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <Photo
            src={images.outside}
            alt="Crystal Kizor"
            className="aspect-[5/4] lg:col-span-6 lg:aspect-[4/5]"
            sizes="(min-width: 1024px) 45vw, 100vw"
            objectPosition="center 30%"
          />
          <div className="lg:col-span-6 lg:pt-4">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              One practice. Several expressions. The same question.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-muted">
              <p>
                Crystal Kizor is an architect and designer working from Enugu.
                She is the founder and Design Director of Studio COKA, a curator
                at The Effective Architect, and a speaker on climate-responsive
                design.
              </p>
              <p>
                The question underneath the work is simple:{" "}
                <span className="text-ink">
                  how do people live well here — in this climate, in these
                  cities, with this identity?
                </span>{" "}
                Buildings answer it. So do objects, teaching, writing, and the
                communities she helps grow.
              </p>
              <p>
                That is why the brands sit together. Studio COKA makes the
                spaces. ELEvated makes the objects. TEA and her speaking raise
                the standard of the profession. AKO Alliance and Alive and Free
                invest in people. Research and writing hold the ideas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
