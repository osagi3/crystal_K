"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";
import { Photo } from "@/components/Photo";
import { btnLight, Container, Eyebrow } from "@/components/ui";
import { images, intents } from "@/lib/content";

const initial: EnquiryState = { success: false, error: null };

export function Enquire() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  return (
    <section id="enquire" className="scroll-mt-24 bg-soil py-20 text-paper sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Photo
              src={images.confident}
              alt="Crystal Kizor"
              className="mb-8 aspect-[5/4]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              objectPosition="center 20%"
            />
            <Eyebrow n="07" light>
              Enquire
            </Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Tell us why you are here.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-paper/70">
              One form. The intent field routes you toward the right part of the
              practice — studio, speaking, TEA, products, or partnership.
            </p>
          </div>

          <div className="lg:col-span-7">
            {state.success ? (
              <p className="border border-paper/20 p-8 font-serif text-3xl leading-snug">
                Received. Thank you — we will reply with the right next step.
              </p>
            ) : (
              <form action={action} className="grid gap-5">
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-paper/60">
                  Name
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    className="border-b border-paper/25 bg-transparent py-3 text-base tracking-normal text-paper outline-none placeholder:text-paper/30 focus:border-terracotta-soft"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-paper/60">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="border-b border-paper/25 bg-transparent py-3 text-base tracking-normal text-paper outline-none placeholder:text-paper/30 focus:border-terracotta-soft"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-paper/60">
                  I am here because
                  <select
                    name="intent"
                    required
                    defaultValue=""
                    className="border-b border-paper/25 bg-soil py-3 text-base tracking-normal text-paper outline-none focus:border-terracotta-soft"
                  >
                    <option value="" disabled>
                      Choose a path
                    </option>
                    {intents.map((intent) => (
                      <option key={intent.value} value={intent.value}>
                        {intent.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-paper/60">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="border border-paper/25 bg-transparent px-3 py-3 text-base tracking-normal text-paper outline-none placeholder:text-paper/30 focus:border-terracotta-soft"
                    placeholder="A short note on the project, event, or partnership."
                  />
                </label>
                {state.error ? (
                  <p className="text-sm text-terracotta-soft" role="alert">
                    {state.error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={pending}
                  className={`mt-2 justify-self-start ${btnLight}`}
                >
                  {pending ? "Sending…" : "Send enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
