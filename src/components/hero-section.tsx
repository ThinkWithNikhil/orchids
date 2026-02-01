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
    <section className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-6" aria-label="Hero">
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
    </section>
  );
}
