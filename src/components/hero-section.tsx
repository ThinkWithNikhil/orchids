"use client";

import { ChevronDownIcon } from "lucide-react";

import { Awards } from "@/components/awards";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export function HeroSection() {
  return (
    <section className="flex w-full flex-col gap-10" aria-label="Hero">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <Awards />
          <h1 className="max-w-3xl text-3xl text-balance font-serif font-bold tracking-tight text-foreground">
            Orchids is the context-aware AI IDE that helps you ship the best code,
            faster
          </h1>
          <p className="max-w-3xl text-lg font-medium text-balance font-sans text-muted-foreground">
            Orchids collaborates with you like a human developer to capture the
            full context to turn your ideas into code. Orchids is the best way to
            build apps, games, tools, websites, UI, anything with AI.
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="w-full min-h-72 sm:min-h-80 lg:min-h-105 flex items-center justify-center bg-cover bg-center rounded-lg overflow-hidden py-12"
          style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
          aria-hidden
        >
          <div className="w-full max-w-4xl px-4">
            <div className="w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <video
                src="/assets/launch.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
