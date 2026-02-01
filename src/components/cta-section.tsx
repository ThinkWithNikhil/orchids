"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    content:
      "Just cancelled a $50 monthly subscription to Pandadoc that we have been using to send our agency proposals for years now! We vibe coded our own system complete with agreement signing and payment integration using @orchidsapp - we have a few more such subscriptions that we will be…",
    name: "Mash Bonigala",
    username: "Bonigala",
    avatar: "/avatars/bonigala.jpg",
  },
  {
    content:
      "I've been vibe coding with @orchidsapp all day. I just might make the switch from @Lovable. Feels like it's 2-3 years ahead of Lovable. Love the desktop app!",
    name: "Shawn",
    username: "ishawn23",
    avatar: "/avatars/ishawn23.jpg",
  },
  {
    content:
      "tried @orchidsapp once and I can say it's >>>>>>>>>>> Lovable",
    name: "Yẹmí",
    username: "yeminimal",
    avatar: "/avatars/yeminimal.jpg",
  },
  {
    content:
      "I have tried all the websites for no coding platforms that are available on the internet And I say that @orchidsapp Is the best one definitely Easy and powerful and it really makes you love working on Thanks",
    name: "Humam alkhateeb",
    username: "HNG799357230381",
    avatar: "/avatars/humam.jpg",
  },
  {
    content:
      "Orchids has completely changed how I prototype. From idea to working UI in minutes. The context-aware editing is exactly what I needed.",
    name: "Alex Chen",
    username: "alexbuilds",
    avatar: "/avatars/alex.jpg",
  },
  {
    content:
      "Finally an AI IDE that actually understands my codebase. Ship features faster without the usual AI friction.",
    name: "Sam Rivera",
    username: "samcodes",
    avatar: "/avatars/sam.jpg",
  },
] as const;

function TestimonialCard({
  content,
  name,
  username,
  avatar,
}: (typeof testimonials)[number]) {
  const [avatarError, setAvatarError] = useState(false);
  return (
    <article
      className="flex min-w-[320px] max-w-95 shrink-0 flex-col gap-3 rounded-lg border border-border bg-card p-4 shadow-xs "
      aria-label={`Testimonial by ${name}`}
    >
      <div className="flex items-center gap-3">
        <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-muted">
          {!avatarError ? (
            <Image
              src={avatar}
              alt=""
              width={40}
              height={40}
              className="object-cover"
              onError={() => setAvatarError(true)}
            />
          ) : null}
          <div
            className={`absolute inset-0 size-full items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground ${avatarError ? "flex" : "hidden"}`}
            aria-hidden
          >
            {name.charAt(0)}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-foreground">{name}</p>
          <p className="truncate text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <p className="text-sm text-foreground leading-relaxed">{content}</p>
    </article>
  );
}

export function CtaSection() {
  return (
    <section
      className="flex w-full flex-col gap-10 pt-14 sm:pt-14 lg:pt-18 pb-14 sm:pb-14 lg:pb-18 bg-brand-50"
      aria-label="Call to action"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-3xl text-3xl text-balance font-serif font-bold tracking-tight text-foreground">
            Ship your ideas with Orchids, for free
          </h2>
          <p className="max-w-xl text-lg font-medium text-pretty font-sans text-muted-foreground">
            Orchids turns your ideas into pixel perfect code. Sign up today and
            start building. No credit card required.
          </p>
          <div>
            <ButtonGroup orientation="horizontal">
              <Button variant="default" size="lg" asChild>
                <a href="#">Download for macOS</a>
              </Button>
              <Separator orientation="vertical" className="bg-border" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" size="lg">
                    <ChevronDownIcon className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <a href="#">Download for macOS</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#">Download for Windows</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#">Download for Linux</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          </div>
        </div>
      </div>

      {/* Testimonials strip: no scrollbar, auto-play marquee with left/right fade */}
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 z-10 w-16 pointer-events-none bg-linear-to-r from-background to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 right-0 z-10 w-16 pointer-events-none bg-linear-to-l from-background to-transparent"
          aria-hidden
        />
        <div className="overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            className="flex gap-4 px-4 sm:px-6 lg:px-8 py-2 w-max"
            style={{
              animation: "testimonial-marquee 50s linear infinite",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
