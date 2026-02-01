import Image from "next/image";

interface Company {
  name: string;
  logo: string;
  href?: string;
}

const companies = [
  { name: "Booking.com", logo: "/company-logos/booking.svg" },
  { name: "IBM", logo: "/company-logos/ibm.svg" },
  { name: "Logitech", logo: "/company-logos/logitech.svg" },
  { name: "Fortinet", logo: "/company-logos/fortinet.svg" },
  { name: "Spotify", logo: "/company-logos/spotify.svg" },
  { name: "Netflix", logo: "/company-logos/netflix.svg" },
] as const satisfies readonly Company[];

export function Trust() {
  return (
    <section className="flex w-full flex-col gap-8 pt-10 sm:pt-10 lg:pt-14 pb-14 sm:pb-14 lg:pb-24" aria-label="Trusted by">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Heading */}
          <h2 className="text-center text-sm sm:text-base text-muted-foreground font-medium">
            Trusted by 800,000+ highly productive builders and developers.
          </h2>

          {/* Company Logos Grid */}
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 w-full" role="list">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex items-center justify-center h-16"
                  role="listitem"
                >
                  <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={140}
                      height={32}
                      className="h-6 sm:h-8 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
