import { Logo } from "@/components/Logo";
import { MarkPlaceholder } from "@/components/Placeholder";
import { Container } from "@/components/ui";
import { ecosystem, site } from "@/lib/content";

const marks = [
  { letters: ecosystem.primary.letters, name: ecosystem.primary.name },
  ...ecosystem.secondary.map((item) => ({
    letters: item.letters,
    name: item.name,
  })),
  ...ecosystem.tertiary.map((item) => ({
    letters: item.letters,
    name: item.name,
  })),
];

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 text-sm text-muted">{site.location}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-[12px] uppercase tracking-[0.16em] text-muted">
              <a
                href="https://studiocoka.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-terracotta"
              >
                Studio COKA
              </a>
              <a
                href="https://linkedin.com/in/crystal-kizor"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-terracotta"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <img src="/mark.png" alt="" className="h-12 w-12 rounded-full" />
            {marks.map((mark) => (
              <MarkPlaceholder
                key={mark.name}
                letters={mark.letters}
                name={mark.name}
              />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
