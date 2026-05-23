const heroImage = new URL('./assets/images/hero.jpg', import.meta.url).href;
const serviceImages = {
  leakDetection: new URL('./assets/images/leak-detection.jpg', import.meta.url).href,
  waterHeaters: new URL('./assets/images/water-heaters.jpg', import.meta.url).href,
  drainCleaning: new URL('./assets/images/drain-cleaning.webp', import.meta.url).href,
};

const services = [
  {
    title: '24/7 Leak Detection & Repair',
    description:
      'Advanced electronic leak location, pipe sealing, and water restoration services for residential and commercial properties.',
    image: serviceImages.leakDetection,
    alt: 'Technician inspecting residential plumbing piping',
  },
  {
    title: 'Drain & Sewer Cleaning',
    description:
      'Fast professional clearing for blocked sinks, tubs, main lines, and sewer systems to prevent backups and damage.',
    image: serviceImages.drainCleaning,
    alt: 'Plumber operating a drain cleaning machine',
  },
  {
    title: 'Water Heater Service',
    description:
      'Water heater installation, tune-ups, and emergency repair for tank and tankless systems across Lancaster County.',
    image: serviceImages.waterHeaters,
    alt: 'Water heater with technician inspecting valves',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section
          className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-2xl shadow-slate-950/30"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-slate-950/85 sm:bg-gradient-to-r sm:from-slate-950/95 sm:via-slate-950/70" />
          <div className="relative grid gap-8 px-6 py-16 sm:grid-cols-[1.3fr,0.9fr] sm:items-center sm:px-12 lg:px-16">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-amber-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300 ring-1 ring-amber-300/20">
                McKinney Plumbing Services LLC
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Southern Lancaster County’s trusted plumbing partner.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                From emergency leaks and clogged drains to water heater installs and full fixture replacement,
                our licensed team delivers dependable service for Peach Bottom, Quarryville, and nearby PA/MD communities.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="tel:+18005551234" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                  Call Now
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-500 hover:text-amber-300">
                  View Services
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/5 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-300 ring-1 ring-amber-300/20">
                  <span className="text-2xl">🛠️</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Service Area</p>
                  <p className="mt-1 text-lg font-semibold text-white">Peach Bottom, Lancaster County & MD border</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/90 p-4 ring-1 ring-white/10">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Emergency Response</p>
                  <p className="mt-2 text-xl font-semibold text-white">24/7 Dispatch</p>
                </div>
                <div className="rounded-3xl bg-slate-950/90 p-4 ring-1 ring-white/10">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Licensed</p>
                  <p className="mt-2 text-xl font-semibold text-white">NATE Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-8" id="services">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Local plumbing solutions built for homes and farms.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Skilled in leak detection, water heater service, pipe replacement, and emergency plumbing support with transparent pricing and rapid service.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/90 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-slate-900/95">
                <img src={service.image} alt={service.alt} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{service.description}</p>
                  <a href="tel:+18005551234" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-white">
                    Book Estimate
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/40">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Why choose us</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Reliable service from local experts.</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="rounded-3xl bg-slate-900/90 p-5 text-sm leading-7 ring-1 ring-white/5">Licensed plumbers with modern tools and trusted craftsmanship.</li>
              <li className="rounded-3xl bg-slate-900/90 p-5 text-sm leading-7 ring-1 ring-white/5">Transparent on-site estimates and fair emergency pricing.</li>
              <li className="rounded-3xl bg-slate-900/90 p-5 text-sm leading-7 ring-1 ring-white/5">Fast response for leak repair, water heaters, and fixture upgrades.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950/90 p-8 shadow-2xl shadow-slate-950/40">
            <h3 className="text-3xl font-semibold text-white">Service area coverage</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Serving Peach Bottom, Lancster County, Quarryville, Shrewsbury, and the PA/MD border corridor with dependable local plumbing crews.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Emergency</p>
                <p className="mt-3 text-xl font-semibold text-white">24/7 response</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Warranty</p>
                <p className="mt-3 text-xl font-semibold text-white">Workmanship guaranteed</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
