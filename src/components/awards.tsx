import Image from "next/image";

const AWARDS: readonly { line1: string; line2: string; href: string }[] = [
  {
    line1: "#1 product",
    line2: "of the day",
    href: "https://www.producthunt.com/products/orchids/launches/orchids-3",
  },
  {
    line1: "#1 on",
    line2: "App Bench",
    href: "https://appbench.ai/",
  },
  {
    line1: "#1 on",
    line2: "UI Bench",
    href: "https://www.uibench.ai/",
  },
];

export function Awards() {
  return (
    <div className="flex flex-row flex-wrap gap-x-6 gap-y-2" role="list">
      {AWARDS.map(({ line1, line2, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 rounded-md px-2 py-2 -mx-2 -my-1 transition-colors hover:text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
          role="listitem"
        >
          <Image
            src="/icons/awards-left.svg"
            alt=""
            width={26}
            height={47}
            className="h-12 w-auto shrink-0"
            aria-hidden
          />
          <span className="text-sm font-medium text-muted-foreground text-center leading-tight">
            <span className="block">{line1}</span>
            <span className="block">{line2}</span>
          </span>
          <Image
            src="/icons/awards-right.svg"
            alt=""
            width={26}
            height={47}
            className="h-12 w-auto shrink-0"
            aria-hidden
          />
        </a>
      ))}
    </div>
  );
}
