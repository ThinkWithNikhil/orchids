import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  videoSrc: string;
  bgImageSrc: string;
}

function Feature({ title, description, videoSrc, bgImageSrc }: FeatureProps) {
  return (
    <section className="w-full bg-brand-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Media Side (Left) */}
        <div 
          className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-[4/3] flex items-center justify-center bg-cover bg-center rounded-2xl overflow-hidden py-10 px-6 sm:px-12 group transition-all duration-700 hover:shadow-2xl shadow-xl border border-brand-100/50"
          style={{ backgroundImage: `url('${bgImageSrc}')` }}
        >
          {/* Video Container (matching Hero demo style) */}
          <div className="w-full relative z-10 rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-black/40 backdrop-blur-[2px] transition-transform duration-700 group-hover:scale-[1.03]">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full block object-contain"
            />
          </div>
          
          {/* Subtle overlay to enhance contrast */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
        </div>

        {/* Text Side (Right) */}
        <div className="flex flex-col gap-5 lg:pl-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-[1.15] tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans max-w-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Build at the speed of a thought.",
    description: "Orchids can see your screen and hear your voice. Tell Orchids what you want and it understands your intent, edits your code, and fixes issues in real time—so you can stay in flow instead of fighting the syntax.",
    videoSrc: "/assets/hero-chatbuild-compressed.mp4",
    bgImageSrc: "/assets/feature-1bg.png",
  },
  {
    title: "See it, grab it, ship it",
    description: "Spot a beautiful interface on the web, select any element, and pull it straight into your project. Orchids understands the structure behind the pixels, so you can borrow great UI instead of rebuilding from scratch.",
    videoSrc: "/assets/hero-select-compressed.mp4",
    bgImageSrc: "/assets/feature-2bg.png",
  },
  {
    title: "Go full-stack without the setup tax",
    description: "Orchids is your full-stack teammate, from first sketch to live product. Auth, database, and payments are wired up for you with native Supabase and Stripe support.",
    videoSrc: "/assets/hero-record-compressed.mp4",
    bgImageSrc: "/assets/feature-3bg.png",
  },
];

export function FeaturesSection() {
  return (
    <div className="w-full bg-brand-50 flex flex-col">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
}
