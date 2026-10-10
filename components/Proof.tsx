import { Container, Eyebrow } from "@/components/ui";
import { projects } from "@/lib/content";

const stats = [
  { value: "Off-grid", label: "Nigeria’s first fully solar-powered hospital" },
  { value: "~95%", label: "Reported drop in diesel use at TESH Nsukka" },
  {
    value: "~400%",
    label: "Reported rise in patient visits after the redesign",
  },
];

export function Proof() {
  return (
    <section className="relative isolate mt-20 overflow-hidden bg-soil text-paper sm:mt-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${projects[2].image})`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-soil/80 via-soil/70 to-soil/50"
      />

      <Container className="relative py-16 sm:py-20">
        <Eyebrow n="01" light>
          Signature proof
        </Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              At 23, she turned a dilapidated building into a hospital that
              still runs on its own power.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-paper/85">
              TESH Nsukka is the story most first-time visitors need: climate
              strategy, care for the people inside the building, and a result
              you can measure. It is the proof under everything else she builds.
            </p>
            <a
              href="#work"
              className="mt-8 inline-block text-[12px] uppercase tracking-[0.18em] text-terracotta-soft transition-all duration-300 hover:translate-x-1 hover:text-paper"
            >
              See the work →
            </a>
          </div>
          <dl className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:content-end">
            {stats.map((stat) => (
              <div key={stat.value} className="border-t border-paper/30 pt-5">
                <dt className="font-serif text-3xl sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-3 text-sm leading-6 text-paper/80">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
