import aboutImage from "@/assets/about.jpg";
import { stats } from "@/data/restaurant";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt="HUNGRY KYA! head chef plating a main course in the open kitchen"
              loading="lazy"
              width={1200}
              height={1200}
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-charcoal p-5 shadow-[var(--shadow-lift)] sm:left-8 sm:right-auto sm:w-64">
              <p className="font-display text-2xl text-primary">Since 2015</p>
              <p className="mt-1 text-sm text-charcoal-foreground/70">
                Family-run on Harbour Street
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            About HUNGRY KYA!
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            A kitchen built on fresh produce and long dinners
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            HUNGRY KYA! started as a ten-table room above a bakery, run by two cooks who wanted to
            serve the food they grew up eating. Ten years later the room is bigger, the wood oven
            is busier, and the approach has not changed: buy well, cook simply, and never rush a
            guest out the door.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our produce arrives each morning from growers within eighty miles. Pasta is rolled in
            house, bread is baked daily, and every sauce starts from scratch before service.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-4 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-semibold text-primary sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
