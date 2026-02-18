 "use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Build at the speed of a thought.",
    description:
      "Orchids can see your screen and hear your voice. Tell Orchids what you want and it understands your intent, edits your code, and fixes issues in real time—so you can stay in flow instead of fighting the syntax.",
    bgImage: "/assets/feature-1bg.png",
    video: "/assets/hero-chatbuild-compressed.mp4",
  },
  {
    title: "See it, grab it, ship it",
    description:
      "Spot a beautiful interface on the web, select any element, and pull it straight into your project. Orchids understands the structure behind the pixels, so you can borrow great UI instead of rebuilding it from scratch.",
    bgImage: "/assets/feature-2bg.png",
    video: "/assets/hero-select-compressed.mp4",
  },
  {
    title: "Go full-stack without the setup tax",
    description:
      "Orchids is your full-stack teammate, from first sketch to live product. Auth, database, and payments are wired up for you with native Supabase and Stripe support.",
    bgImage: "/assets/feature-3bg.png",
    video: "/assets/hero-record-compressed.mp4",
  },
] as const;

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export function Features() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const featureCount = features.length;
  const activeFeature = features[Math.min(Math.max(activeIndex, 0), featureCount - 1)];

  const mobileScrollRootRef = useRef<HTMLDivElement | null>(null);
  const mobileItemRefs = useRef<Array<HTMLLIElement | null>>([]);

  const desktopStepRefs = useRef<Array<HTMLDivElement | null>>([]);

  const observerThresholds = useMemo(() => [0.45, 0.55, 0.65, 0.75], []);

  // Mobile: observe which card is most visible inside the scroll-snap container.
  useEffect(() => {
    const root = mobileScrollRootRef.current;
    if (!root) return;

    const items = mobileItemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { idx: number; ratio: number } | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = Number((entry.target as HTMLElement).dataset.featureIndex);
          if (Number.isNaN(idx)) continue;
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { idx, ratio: entry.intersectionRatio };
          }
        }
        if (best) setActiveIndex(best.idx);
      },
      { root, threshold: observerThresholds }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [observerThresholds]);

  // Desktop: observe which step is most visible in the viewport.
  useEffect(() => {
    const steps = desktopStepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (steps.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { idx: number; ratio: number } | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = Number((entry.target as HTMLElement).dataset.featureIndex);
          if (Number.isNaN(idx)) continue;
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { idx, ratio: entry.intersectionRatio };
          }
        }
        if (best) setActiveIndex(best.idx);
      },
      {
        threshold: observerThresholds,
        // Bias toward center viewport to reduce "early" switching.
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    steps.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [observerThresholds]);

  const scrollToDesktopStep = (idx: number) => {
    const el = desktopStepRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const shouldAutoplay = !prefersReducedMotion;

  return (
    <section
      className="flex w-full flex-col gap-8 pt-14 sm:pt-14 lg:pt-18 pb-14 sm:pb-14 lg:pb-24"
      aria-label="Features"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <h2 className="max-w-3xl text-3xl text-balance font-serif font-bold tracking-tight text-foreground">
            Orchids is the AI coding partner you&apos;ve been waiting for
          </h2>

          {/* Mobile / small tablets: focused, one card at a time (scroll-snap) */}
          <div className="lg:hidden">
            <div className="sticky top-2 z-10 flex items-center justify-between rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
              <div className="text-sm font-medium text-foreground">Features</div>
              <div className="text-sm font-medium text-muted-foreground">
                <span className="tabular-nums">{activeIndex + 1}</span> / {featureCount}
              </div>
            </div>

            <div
              ref={mobileScrollRootRef}
              className={cn(
                "mt-3 h-[78vh] overflow-y-auto pr-1",
                "snap-y snap-mandatory",
                "[scrollbar-gutter:stable]"
              )}
              aria-label="Feature cards"
            >
              <ul className="flex flex-col gap-6 pb-10" role="list">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    ref={(el) => {
                      mobileItemRefs.current[index] = el;
                    }}
                    data-feature-index={index}
                    className={cn(
                      "snap-center",
                      "min-h-[74vh]",
                      "flex flex-col gap-6 rounded-lg border border-border overflow-hidden",
                      index === activeIndex && "ring-2 ring-ring/40"
                    )}
                    role="listitem"
                    aria-current={index === activeIndex ? "true" : undefined}
                  >
                    <div className="flex flex-col justify-center gap-3 px-4 pt-6 sm:px-6">
                      <h3 className="text-2xl font-serif font-bold tracking-tight text-foreground text-balance">
                        {feature.title}
                      </h3>
                      <p className="text-base leading-relaxed font-medium text-pretty font-sans text-muted-foreground">
                        {feature.description}
                      </p>
                      <Button variant="outline" size="lg" asChild className="w-fit">
                        <a href="#">Learn more</a>
                      </Button>
                    </div>

                    <div
                      className="mt-auto w-full flex items-center justify-center bg-cover bg-center overflow-hidden py-8 sm:py-10"
                      style={{ backgroundImage: `url('${feature.bgImage}')` }}
                      aria-hidden
                    >
                      <div className="w-full max-w-4xl px-4">
                        <div className="w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                          <video
                            key={feature.video}
                            src={feature.video}
                            autoPlay={shouldAutoplay && index === activeIndex}
                            muted
                            loop={shouldAutoplay}
                            playsInline
                            preload={index === activeIndex ? "auto" : "metadata"}
                            className="w-full h-auto block object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop: focused stepper + sticky media */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-6">
                <div className="sticky top-24">
                  <div
                    className="w-full rounded-2xl border border-border bg-cover bg-center overflow-hidden p-8"
                    style={{ backgroundImage: `url('${activeFeature.bgImage}')` }}
                    aria-label="Active feature preview"
                  >
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-background">
                      <video
                        key={activeFeature.video}
                        src={activeFeature.video}
                        autoPlay={shouldAutoplay}
                        muted
                        loop={shouldAutoplay}
                        playsInline
                        preload="auto"
                        className="w-full h-auto block object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-muted-foreground">
                      Scroll to explore
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      <span className="tabular-nums">{activeIndex + 1}</span> / {featureCount}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          desktopStepRefs.current[index] = el;
                        }}
                        data-feature-index={index}
                        className="scroll-mt-28 py-16 xl:py-20"
                      >
                        <button
                          type="button"
                          onClick={() => scrollToDesktopStep(index)}
                          className={cn(
                            "w-full text-left rounded-xl border px-6 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                            index === activeIndex
                              ? "border-foreground/20 bg-muted"
                              : "border-border bg-background hover:bg-muted/60"
                          )}
                          aria-current={index === activeIndex ? "true" : undefined}
                        >
                          <div className="flex items-center justify-between gap-6">
                            <h3 className="text-2xl font-serif font-bold tracking-tight text-foreground text-balance">
                              {feature.title}
                            </h3>
                            <span
                              className={cn(
                                "shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium tabular-nums",
                                index === activeIndex
                                  ? "border-foreground/20 text-foreground"
                                  : "border-border text-muted-foreground"
                              )}
                            >
                              {index + 1}
                            </span>
                          </div>
                          <p className="mt-3 text-lg font-medium text-pretty font-sans text-muted-foreground">
                            {feature.description}
                          </p>
                          <div className="mt-5">
                            <Button variant="outline" size="lg" asChild className="w-fit">
                              <a href="#">Learn more</a>
                            </Button>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
