import { Header } from "@/components/header";
import { Awards } from "@/components/awards";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center selection:bg-brand-200 bg-white font-san">
      <Header />
      <main className="flex min-h-screen w-full flex-col py-32 mt-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Awards />
          {/* future: headline, description, CTA */}
        </div>
      </main>
    </div>
  );
}
