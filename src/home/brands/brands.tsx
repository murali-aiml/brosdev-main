import { BackgroundGradient } from "@/components/ui/background-gradient";

type BrandCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  stat: string;
  className?: string;
  minH?: string;
};

const StatBadge = ({ stat }: { stat: string }) => {
  const m = stat.match(/^(\d+%?)(?:\s+)(.+)$/);
  const numberPart = m?.[1];
  const labelPart = m?.[2];

  if (numberPart && labelPart) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 text-white px-2.5 py-1.5 sm:px-3 shadow-sm shrink-0">
        <span className="text-lg sm:text-xl md:text-xl font-extrabold leading-none">
          {numberPart}
        </span>
        <span className="text-[11px] sm:text-xs md:text-sm leading-4 opacity-90 whitespace-nowrap">
          {labelPart}
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-2.5 py-1.5 text-xs sm:text-sm font-semibold shadow-sm shrink-0">
      {stat}
    </span>
  );
};

const BrandCard = ({
  eyebrow,
  title,
  description,
  stat,
  className = "",
  minH = "min-h-[220px]",
}: BrandCardProps) => {
  return (
    <article
      className={[
        "relative flex h-full flex-col justify-between rounded-3xl border border-gray-300 bg-white shadow-sm",
        "p-5 sm:p-6 md:p-8 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md",
        "dark:border-white/10 dark:bg-neutral-900",
        minH,
        className,
      ].join(" ")}
    >
      <div>
        {/* ...existing code... */}
        <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wide text-indigo-600">
          {eyebrow}
        </p>
        <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-neutral-300">
          {description}
        </p>
      </div>

      {/* Improved footer spacing on mobile + better StatBadge alignment */}
      <div className="mt-6 border-t border-gray-100 dark:border-white/10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 shrink-0">
          <svg
            className="h-4 w-4 text-emerald-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.414 0L3.296 9.466a1 1 0 111.414-1.414l3.036 3.036 6.543-6.543a1 1 0 011.415 0z"
              clipRule="evenodd"
            />
          </svg>
          Proven outcome
        </span>

        <StatBadge stat={stat} />
      </div>
    </article>
  );
};

const BrandsBentoGrid = () => {
  return (
    <section className="py-32 sm:py-20 md:py-20">
      <h2 className="pb-6 text-center font-extrabold text-gray-900  text-3xl sm:text-4xl md:text-5xl dark:text-white">
        Built for Premier Brands
      </h2>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-400 bg-white/80 md:bg-white/70 backdrop-blur p-4 sm:p-5 md:p-6 lg:p-7 shadow-xl mb-8 sm:mb-10">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
            Whether you're launching your first startup or scaling an
            established enterprise, our AI-powered solutions deliver the premier
            digital experiences your audience expects.
          </p>
        </div>
      </div>

      <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
        {/* 4-column desktop layout */}
        <div className="py-10 px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          <div className="lg:col-span-2">
            <BrandCard
              className="h-full"
              eyebrow="AmbitiousStartups"
              title="Ready to Scale"
              description="Launch with premier digital experiences that establish instant credibility and drive rapid growth from day one."
              stat="85% faster market entry"
              minH="min-h-[220px]"
            />
          </div>

          <div className="lg:col-span-2">
            <BrandCard
              className="h-full"
              eyebrow="E-commerceBrands"
              title="Dynamic Product Experiences"
              description="Transform your online store with AI-powered personalization that adapts to each customer's preferences in real-time."
              stat="340% conversion increase"
              minH="min-h-[220px]"
            />
          </div>

          <div className="lg:col-span-2">
            <BrandCard
              className="h-full"
              eyebrow="ServiceProviders"
              title="Intelligent Lead Capture"
              description="Capture and nurture leads with smart forms and personalized experiences that turn visitors into loyal clients."
              stat="250% more qualified leads"
              minH="min-h-[220px]"
            />
          </div>

          <div className="lg:col-span-2">
            <BrandCard
              className="h-full"
              eyebrow="InnovationLeaders"
              title="Future-Ready Solutions"
              description="Stay ahead with cutting-edge AI and premier digital experiences that wow your audience and scale with your vision."
              stat="Next‑gen competitive edge"
              minH="min-h-[220px]"
            />
          </div>
        </div>
      </BackgroundGradient>
    </section>
  );
};

export default BrandsBentoGrid;
