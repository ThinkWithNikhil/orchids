import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Trust } from "@/components/trust";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center selection:bg-brand-200 bg-white font-san">
      <Header />
      <main className="flex min-h-screen w-full flex-col py-14 sm:py-14 lg:py-26 mt-8 sm:mt-16 lg:mt-16 bg-white">
        <HeroSection />
        <Trust />
      </main>
    </div>
  );
}
