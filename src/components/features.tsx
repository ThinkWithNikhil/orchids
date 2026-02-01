import { Button } from "@/components/ui/button";

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

export function Features() {
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

          <ul className="flex flex-col gap-10" role="list">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex flex-col gap-6 rounded-lg border border-border overflow-hidden lg:flex-row lg:gap-8"
                role="listitem"
              >
                {/* Text block: first on mobile, right on desktop */}
                <div className="order-1 flex flex-col justify-center gap-4 px-4 py-6 lg:order-2 lg:flex-1 lg:px-6 lg:py-8">
                  <h3 className="text-2xl font-serif font-bold tracking-tight text-foreground text-balance">
                    {feature.title}
                  </h3>
                  <p className="text-lg font-medium text-balance font-sans text-muted-foreground">
                    {feature.description}
                  </p>
                  <Button variant="outline" size="lg" asChild className="w-fit">
                    <a href="#">Learn more</a>
                  </Button>
                </div>

                {/* Media div: second on mobile, left on desktop */}
                <div
                  className="order-2 w-full min-h-72 flex items-center justify-center bg-cover bg-center rounded-b-lg overflow-hidden py-12 lg:order-1 lg:flex-1 lg:min-h-80 lg:rounded-b-none lg:rounded-r-none"
                  style={{ backgroundImage: `url('${feature.bgImage}')` }}
                  aria-hidden
                >
                  <div className="w-full max-w-4xl px-4">
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                      <video
                        src={feature.video}
                        autoPlay
                        muted
                        loop
                        playsInline
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
    </section>
  );
}
