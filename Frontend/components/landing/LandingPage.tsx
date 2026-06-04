import { companyStats, dashboardStats, faqItems, footerLinks, howItWorks, integrations, marqueeItems, pricingPlans, recentActivities, services, testimonials, trustedBy } from "@/data/landing";
import { AnimatedCounter } from "./AnimatedCounter";
import { CustomCursor } from "./CustomCursor";
import { FaqAccordion } from "./FaqAccordion";
import { ArrowIcon, LogoIcon, ServiceIcon } from "./Icons";
import { MagneticButton } from "./MagneticButton";
import { MouseParallax } from "./MouseParallax";
import { Navbar } from "./Navbar";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

/* ── Scroll progress bar ── */
function ScrollProgress() {
  // We use a CSS-only approach via scroll-driven animations (Chrome 115+)
  // with a JS fallback
  if (typeof window === "undefined") return null;
  return (
    <div
      className="scroll-progress"
      style={{
        scaleX: 0,
        animationTimeline: "scroll()",
        animationRange: "0% 100%",
        animation: "scroll-grow linear",
      }}
    />
  );
}

const toneClasses = {
  forest: {
    iconWrap: "bg-forest-pale",
    tag: "bg-forest-pale text-forest",
  },
  clay: {
    iconWrap: "bg-clay-pale",
    tag: "bg-clay-pale text-clay",
  },
};

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <Marquee />
      <HowItWorksSection />
      <StatsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <MouseParallax depth={-12} className="pointer-events-none absolute -right-20 -top-20">
        <div className="blob h-80 w-80 bg-clay-pale opacity-70 lg:h-130 lg:w-130" />
      </MouseParallax>
      <MouseParallax depth={-9} className="pointer-events-none absolute -bottom-16 -left-16">
        <div className="blob-reverse h-56 w-56 bg-forest-pale opacity-60 lg:h-80 lg:w-80" />
      </MouseParallax>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            {/* Badge */}
            <div className="animate-float-in neon-badge inline-flex items-center gap-2 rounded-full border border-clay/25 bg-clay-pale px-4 py-1.5 opacity-0 shadow-sm [animation-delay:100ms]">
              <span className="beacon-dot h-2 w-2 shrink-0 rounded-full bg-clay-light" />
              <span className="text-xs font-semibold tracking-wide text-clay">
                #1 HRM Platform · Trusted by 2,400+ Indian Companies
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-float-in mt-7 max-w-2xl font-serif text-5xl font-black leading-[1.02] text-ink opacity-0 [animation-delay:200ms] sm:text-6xl lg:text-7xl">
              Smarter HR
              <br />
              starts here —
              <br />
              <span className="gradient-flow-text">
                built for India.
              </span>
            </h1>

            <p className="animate-float-in mt-6 max-w-md text-base leading-relaxed text-ink-soft opacity-0 [animation-delay:350ms] sm:text-lg">
              One platform to hire, onboard, pay, manage performance, and grow
              your people — from Day 1 to their best year yet.
            </p>

            {/* CTAs */}
            <div className="animate-float-in mt-9 flex flex-wrap gap-3 opacity-0 [animation-delay:480ms]">
              <MagneticButton
                href="#register"
                className="shimmer btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm"
              >
                Start Free — No Card Needed
                <ArrowIcon />
              </MagneticButton>
              <MagneticButton href="#features" className="shimmer btn-outline rounded-2xl px-7 py-3.5 text-sm">
                Explore Features
              </MagneticButton>
            </div>
            {/* Social proof row */}
            <div className="animate-float-in mt-10 flex flex-wrap items-center gap-4 opacity-0 [animation-delay:600ms]">
              <div className="flex -space-x-2.5">
                {(
                  [
                    ["A", "bg-clay"],
                    ["R", "bg-forest"],
                    ["S", "bg-clay-light"],
                    ["P", "bg-forest-light"],
                  ] as [string, string][]
                ).map(([letter, bg]) => (
                  <span
                    key={letter}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream text-xs font-bold text-white ${bg}`}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">4.9 ★ rating</p>
                <p className="text-xs text-ink-muted">from 1,800+ verified reviews</p>
              </div>
              <div className="h-8 w-px bg-clay/20" />
              <div>
                <p className="text-sm font-semibold text-ink">14-day trial</p>
                <p className="text-xs text-ink-muted">no credit card required</p>
              </div>
              <div className="h-8 w-px bg-clay/20" />
              <div>
                <p className="text-sm font-semibold text-ink">2 hr setup</p>
                <p className="text-xs text-ink-muted">guided onboarding</p>
              </div>
            </div>
          </div>

          <MouseParallax depth={18}>
            <DashboardPreview />
          </MouseParallax>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="animate-float-in relative hidden items-center justify-center opacity-0 [animation-delay:500ms] lg:flex">
      <div className="card-float relative z-10 w-full max-w-sm rounded-3xl border border-clay/10 bg-cream p-5 shadow-2xl shadow-clay/10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-ink-muted">Welcome back,</p>
            <p className="font-serif text-lg font-bold text-ink">Priya Sharma</p>
          </div>
          <div className="rounded-full bg-clay-pale px-3 py-1.5 text-xs font-semibold text-clay">
            June 2026
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2">
          {dashboardStats.map((stat) => (
            <div key={stat.label} className={`rounded-2xl p-3 text-center ${stat.className}`}>
              <p className="font-serif text-xl font-bold">{stat.value}</p>
              <p className="mt-0.5 text-xs text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 rounded-2xl bg-cream-dark p-3.5">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold text-ink">Payroll Completion</p>
            <p className="text-xs font-bold text-clay">78%</p>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-cream">
            <div className="payroll-bar h-full w-[78%] rounded-full" />
          </div>
          <p className="mt-1.5 text-xs text-ink-muted">Runs on 30 June · 22 pending</p>
        </div>

        <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-ink-muted">
          Recent Activity
        </p>
        <div className="space-y-2.5">
          {recentActivities.map((activity) => (
            <div key={activity.title} className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${activity.className}`}
              >
                {activity.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-ink">{activity.title}</p>
                <p className="text-xs text-ink-muted">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chips */}
      <div className="float-chip-1 absolute -left-8 -top-4 flex items-center gap-2 rounded-2xl border border-clay/15 bg-cream px-4 py-2.5 shadow-lg shadow-clay/12">
        <span className="text-base">⚡</span>
        <span className="text-xs font-semibold text-ink">Auto Payroll</span>
      </div>
      <div className="float-chip-2 absolute -bottom-4 -right-6 flex items-center gap-2 rounded-2xl border border-forest/15 bg-cream px-4 py-2.5 shadow-lg shadow-forest/12">
        <span className="h-2 w-2 animate-pulse rounded-full bg-forest-light" />
        <span className="text-xs font-semibold text-ink">Live Sync</span>
      </div>
      <div className="float-chip-3 absolute -left-6 bottom-20 flex items-center gap-2 rounded-2xl border border-clay/12 bg-cream px-3 py-2 shadow-md">
        <span className="text-sm">✅</span>
        <span className="text-xs font-semibold text-ink">Leave Approved</span>
      </div>
    </div>
  );
}

function TrustedBySection() {
  return (
    <section className="border-y border-clay/8 bg-cream py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-ink-muted">
          Trusted by growing teams across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trustedBy.map((name, i) => (
            <span
              key={name}
              className="badge-hover badge-stagger cursor-default rounded-full border border-clay/12 bg-cream-dark px-4 py-2 text-sm font-semibold text-ink-soft"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const repeatedItems = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-t border-t-clay/20 border-b border-b-forest/20 bg-[linear-gradient(90deg,#0d0a1e_0%,#1a1545_50%,#0d0a1e_100%)] py-4">
      <div className="marquee flex whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="marquee-item-glow px-6 text-xs font-semibold uppercase tracking-widest text-clay-light/80">
              {item}
            </span>
            <span className="px-2 text-forest-light/70">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay">
            Simple Process
          </p>
          <h2 className="mb-4 font-serif text-4xl font-black text-ink sm:text-5xl">
            Up & running
            <br />
            in 3 easy steps.
          </h2>
          <p className="mx-auto max-w-lg text-ink-soft">
            No technical expertise needed. No lengthy implementation. Just a guided
            setup that gets your whole team live, fast.
          </p>
        </Reveal>

        <div className="relative grid gap-8 lg:grid-cols-3">
          {/* connecting dashed line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-linear-to-r from-transparent via-clay/20 to-transparent lg:block" />
          {howItWorks.map((step, index) => (
            <Reveal key={step.step} delay={index * 100}>
              <div className="relative flex flex-col items-center text-center">
                <div className="step-icon relative z-10 mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-3xl border border-clay/15 bg-cream shadow-lg shadow-clay/8 cursor-default">
                  <span className="text-3xl">{step.emoji}</span>
                  <span className="mt-1 text-[10px] font-black tracking-widest text-clay">
                    STEP {step.step}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section id="why" className="bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay">
              Numbers That Matter
            </p>
            <h2 className="mb-5 font-serif text-4xl font-black leading-tight text-ink sm:text-5xl">
              The most loved
              <br />
              HR platform
              <br />
              in India.
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-ink-soft">
              From 5-person startups to 5,000-person enterprises — FlowHR scales
              with your team, not against it.
            </p>
            <div className="mt-8 h-px w-32 bg-linear-to-r from-clay to-forest opacity-40" />
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {companyStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
                <div className="pulse-ring rounded-2xl border border-clay/10 bg-cream p-6 shadow-sm">
                  <p className="bg-linear-to-r from-clay to-forest bg-clip-text font-serif text-4xl font-black text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-ink-muted">{stat.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay">
            Core Modules
          </p>
          <h2 className="mb-4 font-serif text-4xl font-black text-ink sm:text-5xl">
            Everything HR.
            <br />
            Nothing extra.
          </h2>
          <p className="mx-auto max-w-xl text-ink-soft">
            A complete, beautifully integrated suite — no duct tape, no spreadsheets,
            no headaches.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const tone = toneClasses[service.tone as keyof typeof toneClasses];
            return (
              <Reveal key={service.title} delay={(index % 3) * 70}>
                <TiltCard
                  className="h-full rounded-3xl border border-clay/10 bg-cream p-7 shadow-sm"
                  glowColor={service.tone === "clay" ? "rgba(92,39,254,0.14)" : "rgba(0,150,199,0.12)"}
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${tone.iconWrap}`}
                  >
                    <ServiceIcon index={index} />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-ink">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${tone.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay">
            Integrations
          </p>
          <h2 className="mb-4 font-serif text-4xl font-black text-ink sm:text-5xl">
            Plays well with
            <br />
            your existing tools.
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-ink-soft">
            FlowHR connects with the tools your team already uses — so there&apos;s no
            friction, no duplicate work.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="chip-pop cursor-default rounded-2xl border border-clay/12 bg-cream px-5 py-3 text-sm font-semibold text-ink shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            + 50 more integrations via our open API
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay">
              Customer Stories
            </p>
            <h2 className="font-serif text-4xl font-black leading-tight text-ink sm:text-5xl">
              Real teams.
              <br />
              Real results.
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-clay/12 bg-cream-dark px-5 py-3">
            <div>
              <p className="text-2xl font-black text-clay">4.9 ★</p>
              <p className="text-xs text-ink-muted">1,800+ reviews · Not purchased</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 3) * 70}>
              <TiltCard className="glow-border flex h-full flex-col rounded-3xl border border-clay/10 bg-cream p-6 shadow-sm">
                <div className="mb-3 text-clay">★★★★★</div>
                <p className="mb-6 flex-1 text-sm italic leading-relaxed text-ink-soft">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${testimonial.className}`}
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-ink-muted">{testimonial.role}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay">
            Pricing
          </p>
          <h2 className="mb-3 font-serif text-4xl font-black text-ink sm:text-5xl">
            Simple. Honest.
            <br />
            No surprises.
          </h2>
          <p className="text-ink-soft">Start free. Upgrade when your team grows.</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 70}>
              <TiltCard
                className={`h-full rounded-3xl border p-7 shadow-sm ${
                  plan.featured
                    ? "border-clay/30 bg-gradient-to-br from-clay to-clay-light"
                    : "border-clay/10 bg-cream"
                }`}
                glowColor={plan.featured ? "rgba(255,255,255,0.12)" : "rgba(92,39,254,0.12)"}
              >
                <div className="mb-5 flex items-center justify-between gap-2">
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      plan.featured ? "text-white/60" : "text-ink-muted"
                    }`}
                  >
                    {plan.name}
                  </p>
                  {plan.badge && (
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mb-2">
                  <span
                    className={`font-serif text-4xl font-black ${
                      plan.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white/50" : "text-ink-muted"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <p
                  className={`mb-6 text-sm leading-relaxed ${
                    plan.featured ? "text-white/60" : "text-ink-soft"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mb-8 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 font-bold ${
                          plan.featured
                            ? "text-white/90"
                            : feature.included
                              ? "text-clay"
                              : "text-ink-muted"
                        }`}
                      >
                        {feature.included ? "✓" : "×"}
                      </span>
                      <span
                        className={
                          plan.featured
                            ? "text-white/80"
                            : feature.included
                              ? "text-ink-soft"
                              : "text-ink-muted"
                        }
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#register"
                  className={
                    plan.featured
                      ? "block rounded-2xl bg-white py-3 text-center text-sm font-bold text-clay transition-opacity hover:opacity-90"
                      : "btn-outline block rounded-2xl py-3 text-center text-sm"
                  }
                >
                  {plan.cta}
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-ink-muted">
            All plans include a{" "}
            <span className="font-semibold text-clay">14-day free trial</span> · No credit
            card required · Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay">
            FAQ
          </p>
          <h2 className="font-serif text-4xl font-black text-ink sm:text-5xl">
            Common questions,
            <br />
            honest answers.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <FaqAccordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 bg-[linear-gradient(135deg,#0d0a1e_0%,#1a1545_50%,#0d1230_100%)]">
      <div className="blob pointer-events-none absolute -right-16 -top-16 h-72 w-72 bg-clay/20" />
      <div className="blob-delayed pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 bg-forest/15" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-clay-light">
            Get Started Today
          </p>
          <h2 className="mb-5 font-serif text-4xl font-black leading-tight text-cream sm:text-5xl lg:text-6xl">
            Your team deserves
            <br />
            <span className="bg-linear-to-r from-clay-light to-forest-light bg-clip-text text-transparent">
              better HR.
            </span>
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-base text-cream/55 sm:text-lg">
            Join 2,400+ companies already running smarter HR with FlowHR. Set up in
            minutes. No training required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton
              href="#register"
              className="shimmer btn-primary inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm"
            >
              Register Your Company Free
              <ArrowIcon />
            </MagneticButton>
            <MagneticButton
              href="#login"
              className="shimmer rounded-2xl border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-white/20"
            >
              Login to Dashboard →
            </MagneticButton>
          </div>
          <p className="mt-6 text-xs text-cream/30">
            No credit card · 14-day free trial · Indian servers · Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/6 bg-ink px-5 pb-8 pt-14">
      <div className="mx-auto max-w-7xl">
        {/* Top columns */}
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-clay">
                <LogoIcon className="h-4.5 w-4.5" />
              </span>
              <span className="font-serif text-xl font-bold text-cream">FlowHR</span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-cream/40">
              The modern HR platform built for India. Manage your entire people journey
              from one beautiful dashboard.
            </p>
            <div className="flex gap-3">
              {["X", "in", "▶"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-cream/40 transition-colors hover:border-clay/40 hover:text-clay"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/40">
              Product
            </p>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/50 transition-colors hover:text-clay-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/40">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/50 transition-colors hover:text-clay-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/40">
              Support
            </p>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/50 transition-colors hover:text-clay-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/6 pt-6 sm:flex-row">
          <p className="text-xs text-cream/25">
            © 2026 FlowHR Technologies Pvt. Ltd. · Made with ♥ in India
          </p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-forest-light" />
            <span className="text-xs text-cream/25">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
