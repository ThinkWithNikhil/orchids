import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  videoSrc: string;
  bgImageSrc: string;
}

function Feature({ title, description, videoSrc, bgImageSrc }: FeatureProps) {
  return (
    <section className="w-full bg-brand-50 py-12 px-6 sm:px-12 lg:px-24 mb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Media Side (Left) */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImageSrc}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          
          {/* Video on top */}
          <div className="relative z-10 w-full h-full p-4 sm:p-8 flex items-center justify-center">
             <div className="w-full h-full rounded-xl overflow-hidden border border-white/20 shadow-xl bg-black/40 backdrop-blur-sm">
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>

        {/* Text Side (Right) */}
        <div className="flex flex-col gap-6 text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-950 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-brand-900/70 leading-relaxed font-sans">
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
    <div className="w-full py-12">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
}
