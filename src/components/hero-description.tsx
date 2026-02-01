"use client";

import {
  AppWindow,
  Gamepad2,
  Globe,
  PanelsTopLeft,
  SquareDashedMousePointer,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

const TERMS: {
  term: string;
  video: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { term: "apps", video: "/assets/hero-appdemo.mp4", icon: AppWindow },
  { term: "games", video: "/assets/hero-gamedemo.mp4", icon: Gamepad2 },
  { term: "tools", video: "/assets/hero-tooldemo.mp4", icon: SquareDashedMousePointer },
  { term: "websites", video: "/assets/hero-website.mp4", icon: Globe },
  { term: "UI", video: "/assets/hero-uidemo.mp4", icon: PanelsTopLeft },
];

function useHasHover(): boolean {
  const [hasHover, setHasHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setHasHover(mq.matches);
    const handler = () => setHasHover(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return hasHover;
}

function TermTrigger({
  term,
  video,
  icon: Icon,
  onOpenModal,
  hasHover,
}: {
  term: string;
  video: string;
  icon: React.ComponentType<{ className?: string }>;
  onOpenModal: (src: string) => void;
  hasHover: boolean;
}) {
  const trigger = (
    <button
      type="button"
      onClick={() => onOpenModal(video)}
      className={cn(
        "inline-flex items-center gap-1 rounded px-0.5 py-0 border-b-2 border-dotted border-muted-foreground/60",
        "text-lg font-medium font-sans text-muted-foreground",
        "hover:text-foreground hover:border-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
      aria-label={`Play ${term} demo`}
    >
      <Icon className="size-4 shrink-0" aria-hidden />
      <span>{term}</span>
    </button>
  );

  if (hasHover) {
    return (
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-90 overflow-hidden p-0"
        >
          <video
            src={video}
            muted
            loop
            playsInline
            autoPlay
            className="h-auto w-full object-contain"
          />
        </HoverCardContent>
      </HoverCard>
    );
  }

  return trigger;
}

export function HeroDescription() {
  const hasHover = useHasHover();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const openModal = useCallback((src: string) => {
    setModalVideo(src);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalVideo(null);
  }, []);

  return (
    <>
      <p className="max-w-3xl text-lg font-medium text-balance font-sans text-muted-foreground">
        Orchids collaborates with you like a human developer to capture the full
        context to turn your ideas into code. Orchids is the best way to build{" "}
        {TERMS.map(({ term, video, icon }, i) => (
          <span key={term}>
            <TermTrigger
              term={term}
              video={video}
              icon={icon}
              onOpenModal={openModal}
              hasHover={hasHover}
            />
            {i < TERMS.length - 1 ? ", " : ""}
          </span>
        ))}
        , anything with AI.
      </p>

      <Dialog open={modalOpen} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent
          showCloseButton={true}
          className="max-w-2xl border-0 bg-transparent p-4 sm:p-6 shadow-none"
        >
          <DialogTitle className="sr-only">Demo video</DialogTitle>
          {modalVideo && (
            <div className="overflow-hidden rounded-lg ring-1 ring-black/10 shadow-2xl">
              <video
                key={modalVideo}
                src={modalVideo}
                muted
                loop
                playsInline
                autoPlay
                className="h-auto w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
