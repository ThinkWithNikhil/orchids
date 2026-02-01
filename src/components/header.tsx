"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "./ui/separator";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center backdrop-blur-md bg-[linear-gradient(to_bottom,var(--background)_0%,var(--background)_45%,transparent_100%)]"
      role="banner"
    >
      <div className="flex h-full w-full max-w-7xl mx-auto items-center justify-between px-4 sm:px-4 lg:px-6">
        {/* Left Section: Logo + Text */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Orchids home">
          <Image
            src="/orchids.png"
            alt="Orchids"
            width={24}
            height={24}
            className="size-6"
          />
          <span className="text-xl font-semibold text-foreground lowercase tracking-normal">
            orchids
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex flex-row items-center gap-1 flex-1 ml-8">
          <Button variant="link" size="sm">
            <Link href="#">Docs</Link>
          </Button>
          <Button variant="link" size="sm">
            <Link href="#">Enterprise</Link>
          </Button>
          <Button variant="link" size="sm">
            <Link href="#">Pricing</Link>
          </Button>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex flex-row items-center gap-2 md:gap-3">
          <Button variant="outline" size="sm">
            <Link href="#">Login</Link>
          </Button>
          <ButtonGroup orientation="horizontal">
            <Button variant="default" size="sm">
              <Link href="#">Download for macOS</Link>
            </Button>
            <Separator orientation="vertical" className="bg-border"/>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="sm">
                  <ChevronDownIcon className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
          <div className="max-w-8xl mx-auto px-4 md:px-6">
            <nav className="flex flex-col p-4 gap-2">
            <Button variant="link" size="default" className="justify-start">
              <Link href="#">Docs</Link>
            </Button>
            <Button variant="link" size="default" className="justify-start">
              <Link href="#">Enterprise</Link>
            </Button>
            <Button variant="link" size="default" className="justify-start">
              <Link href="#">Pricing</Link>
            </Button>
            <Separator className="my-2" />
            <Button variant="outline" size="default" className="justify-start">
              <Link href="#">Login</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="default" className="justify-start">
                  Download
                  <ChevronDownIcon className="size-4 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-full">
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
          </nav>
          </div>
        </div>
      )}
    </header>
  );
}
