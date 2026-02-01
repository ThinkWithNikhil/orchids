import Image from "next/image";
import Link from "next/link";
import { Linkedin, MessageCircle, X } from "lucide-react";

const companyLinks = [
  { label: "Enterprise", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const resourcesLinks = [{ label: "Docs", href: "#" }];

const communityLinks = [
  { label: "Discord", href: "#", icon: MessageCircle },
  { label: "X", href: "#", icon: X },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="w-full bg-white">
      {/* Links section: light, in site aesthetics */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="Orchids home"
            >
              <Image
                src="/orchids.png"
                alt="Orchids"
                width={40}
                height={40}
                className="size-10"
              />
              <span className="text-5xl font-semibold text-foreground lowercase tracking-normal mb-3">
                orchids
              </span>
            </Link>

            {/* Navigation columns */}
            <nav aria-label="Footer" className="flex flex-wrap gap-8 sm:gap-10">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Company
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {companyLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Resources
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {resourcesLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Community
                </h3>
                <ul className="flex flex-col gap-3" role="list">
                  {communityLinks.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon className="size-4 shrink-0" aria-hidden />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Full-width image with rights text overlaid */}
      <div className="relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/footer-bg.png"
          alt=""
          className="w-full h-auto block"
          aria-hidden
        />
        <p className="absolute bottom-0 left-0 right-0 text-center text-sm text-black font-medium py-6 px-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          © 2026 Orchids. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
