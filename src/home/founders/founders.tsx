import { BackgroundGradient } from "@/components/ui/background-gradient";

const Founders = () => {
  const mission =
    "Meet the minds behind Bros Developer and learn about our vision for the future of web development . ";

  return (
    <div>
      <div>
        <h2 className="pb-6 text-center font-extrabold text-gray-900 text-3xl sm:text-4xl md:text-5xl dark:text-white">
          What Our Founders Say
        </h2>

        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56">
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-400 bg-white/80 md:bg-white/70 backdrop-blur p-4 sm:p-5 md:p-6 lg:p-7 shadow-xl mb-8 sm:mb-10">
            <p className="text-gray-950 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
              {mission}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-26">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Vetrivel */}
          <BackgroundGradient className="rounded-[22px]  bg-white dark:bg-zinc-900">
            <article className="h-full rounded-3xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6 md:p-7 dark:border-white/10 dark:bg-neutral-900">
              <header className="flex items-center gap-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 ring-2 ring-white dark:ring-neutral-800 flex items-center justify-center text-white text-xl sm:text-2xl font-extrabold select-none">
                  V
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
                    Vetrivel
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-300">
                     Co-Founder & CEO
                  </p>
                </div>
              </header>

              <blockquote className="mt-4 sm:mt-5">
                <p className="text-gray-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                  <b>"Our vision is to create AI-powered digital experiences that are smart, scalable, and future-ready.
                   Every product we design is built with innovation, precision, and a passion for transforming ideas into reality."</b>
                </p>
              </blockquote>
            </article>
          </BackgroundGradient>

          {/* Muralidharan */}
          <BackgroundGradient className="rounded-[22px]  bg-white dark:bg-zinc-900">
            <article className="h-full rounded-3xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6 md:p-7 dark:border-white/10 dark:bg-neutral-900">
              <header className="flex items-center gap-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 ring-2 ring-white dark:ring-neutral-800 flex items-center justify-center text-white text-xl sm:text-2xl font-extrabold select-none">
                  N
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
                    Muralidharan 
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-300">
                    Co-Founder & Lead Developer
                  </p>
                </div>
              </header>

              <blockquote className="mt-4 sm:mt-5">
                <p className="text-gray-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                  <b>"Our mission is to create innovative AI-powered products that combine technology, 
                    automation, and user-focused design to build smarter, scalable, intelligent, and
                     future-ready digital experiences for the future."</b>
                </p>
              </blockquote>
            </article>
          </BackgroundGradient>
{/* Hemalatha */}
          <BackgroundGradient className="rounded-[22px]  bg-white dark:bg-zinc-900">
            <article className="h-full rounded-3xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6 md:p-7 dark:border-white/10 dark:bg-neutral-900">
              <header className="flex items-center gap-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 ring-2 ring-white dark:ring-neutral-800 flex items-center justify-center text-white text-xl sm:text-2xl font-extrabold select-none">
                  N
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
                    Hemalatha
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-300">
                    CTO & AI Specialist
                  </p>
                </div>
              </header>

              <blockquote className="mt-4 sm:mt-5">
                <p className="text-gray-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                  <b>"Our goal is to engineer powerful AI-driven solutions that merge advanced technology with
                    seamless user experiences. Every system we design is built for scalability, innovation,
                     and transforming ideas into impactful digital products."</b>
                </p>
              </blockquote>
            </article>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Founders;
