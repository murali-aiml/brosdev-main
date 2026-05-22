import { BackgroundGradient } from "@/components/ui/background-gradient";

const Teams = () => {
  const mission =
    "A perfect blend of creativity, technical excellence, and AI innovation .";

  return (
    <div className="py-1">
      <div>
        {/* Heading */}
        <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56">
          <h2 className="pb-6 text-center font-extrabold text-gray-900 text-3xl sm:text-4xl md:text-5xl dark:text-white">
            Meet the Dream Team
          </h2>
        </div>

        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-400 bg-white/80 md:bg-white/70 backdrop-blur p-4 sm:p-5 md:p-6 lg:p-7 shadow-xl mb-8 sm:mb-10">
            <p className="text-gray-950 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left flex justify-center">
              {mission}
            </p>
          </div>
        </div>
      </div>

      {/* One gradient block wrapping all cards */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-26">
        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* maha */}
              <article className="h-full rounded-3xl border border-gray-300 bg-white shadow-sm p-5 sm:p-6 md:p-7 dark:border-white/10 dark:bg-neutral-900 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <header className="flex items-center gap-4">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 ring-2 ring-white dark:ring-neutral-800 flex items-center justify-center text-white text-xl sm:text-2xl font-extrabold select-none">
                    M
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
                      MAHA
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-neutral-300">
                      Flutter developer 
                    </p>
                  </div>
                </header>

                <blockquote className="mt-4 sm:mt-5">
                  <p className="text-gray-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                    Crafting beautiful, user-centric designs that captivate and
                    convert. Specializing in creating visually stunning
                    interfaces that tell your brand&apos;s story.
                  </p>
                </blockquote>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    dart
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    php
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                   flutter 
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                   mysql
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                   full stack developer 
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    Performance
                  </span>

                </div>
              </article>

              {/* rajasri */}
              <article className="h-full rounded-3xl border border-gray-300 bg-white shadow-sm p-5 sm:p-6 md:p-7 dark:border-white/10 dark:bg-neutral-900 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <header className="flex items-center gap-4">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 ring-2 ring-white dark:ring-neutral-800 flex items-center justify-center text-white text-xl sm:text-2xl font-extrabold select-none">
                    R
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
                      RAJASRI
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-neutral-300">
                      flutter developer  
                    </p>
                  </div>
                </header>

                <blockquote className="mt-4 sm:mt-5">
                  <p className="text-gray-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                    Building robust, scalable solutions with clean code and
                    cutting-edge technology. Transforming designs into
                    pixel-perfect, high-performance web applications.
                  </p>
                </blockquote>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    flutter 
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    Full-Stack Dev
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    Performance
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    mysql
                  </span>
                </div>
              </article>

              {/* sara */}
              <article className="h-full rounded-3xl border border-gray-300 bg-white shadow-sm p-5 sm:p-6 md:p-7 dark:border-white/10 dark:bg-neutral-900 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <header className="flex items-center gap-4">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 ring-2 ring-white dark:ring-neutral-800 flex items-center justify-center text-white text-lg sm:text-2xl font-extrabold select-none tracking-wide">
                    S 
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
                      SARASWATHI
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-neutral-300">
                      Flutter developer  
                    </p>
                  </div>
                </header>

                <blockquote className="mt-4 sm:mt-5">
                  <p className="text-gray-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                    Building robust, scalable solutions with clean code and
                    cutting-edge technology. Transforming designs into
                    pixel-perfect, high-performance web applications.
                  </p>
                </blockquote>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    flutter 
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    Full-Stack Dev
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    Performance
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    mysql
                  </span>
                </div>
              </article>
            </div>
          </div>
        </BackgroundGradient>
      </div>

      {/* Bottom banner sticker (moved from top-right) */}
      <div className="mt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56">
        <div className="flex justify-center sm:justify-end">
          <div className="inline-flex items-start gap-3 rounded-xl border border-gray-200 bg-white/100 dark:bg-neutral-900/80 shadow-md px-4 py-3">
            <div className="max-w-[18rem]">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-600">
                Want to Work With Us?
              </div>
              <div className="mt-0.5 text-xs text-gray-700 dark:text-neutral-300">
                Let&apos;s collaborate to bring your vision to life
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-indigo-600 text-white
             px-2 py-2 text-xs
             sm:px-3.5 sm:py-2.5 sm:text-sm
             md:px-3 md:py-2
             font-semibold shadow-sm transition-colors
             hover:bg-indigo-500
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
