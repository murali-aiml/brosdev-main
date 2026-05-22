import { BackgroundGradient } from "@/components/ui/background-gradient";

const Internships = () => {
  const formLink =
    "https://forms.gle/5o74yqNtU3zkhWNt5";

  return (
    <section id="internships" className="py-1 px-6"> 
    <div className="py-0">
      {/* Heading */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56">
        <h2 className="pb-6 text-center font-extrabold text-gray-900 text-4xl sm:text-5xl md:text-6xl">
          Internship Opportunities
        </h2>
      </div>

      {/* Subtitle */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-400 bg-white/80 backdrop-blur p-6 shadow-xl mb-12">
          <p className="text-gray-800 text-lg leading-relaxed text-center">
            Join Bros Developers and work on real-world AI,
            development, automation, and digital innovation projects.
          </p>
        </div>
      </div>

      {/* Internship Cards */}
      <div className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-0 2xl:px-0">
        <BackgroundGradient className="rounded-[28px] bg-white">
          <div className="p-5 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* AI Development */}
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="group"
              >
                <article className="h-full rounded-3xl border border-gray-300 bg-white shadow-sm p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <header className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-500 flex items-center justify-center text-white text-2xl font-extrabold">
                      AI
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-gray-900">
                         AI 
                         & 
                         MACHINELEARNING
                      </h3>

                      <p className="text-sm text-gray-600">
                        AI&ML Intern
                      </p>
                    </div>
                  </header>

                  <blockquote className="mt-6">
                    <p className="text-gray-800 text-base leading-relaxed">
                      Build private AI systems, automation tools,
                      intelligent business solutions, and AI-powered
                      digital products.
                    </p>
                  </blockquote>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      PYTHON
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      AI MODELS
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      AUTOMATION
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      MACHINE LEARNING
                    </span>
                  </div>

                  {/* Button */}
                  <div className="mt-8">
                    <div className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
                      Apply Now →
                    </div>
                  </div>
                </article>
              </a>

              {/* Web Development */}
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <article className="h-full rounded-3xl border border-gray-300 bg-white shadow-sm p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <header className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-extrabold">
                      AI
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-gray-900">
                        AI
                        &
                        DATA SCIENCE
                      </h3>

                      <p className="text-sm text-gray-600">
                        AI&DS Intern 
                      </p>
                    </div>
                  </header>

                  <blockquote className="mt-6">
                    <p className="text-gray-800 text-base leading-relaxed">
                      Build private AI systems, automation tools,
                      intelligent business solutions, and AI-powered
                      digital products.
                    </p>
                  </blockquote>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      PYTHON
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      AI MODELS
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      AUTOMATION 
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      DATA SCIENCE
                    </span>
                  </div>

                  <div className="mt-8">
                    <div className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
                      Apply Now →
                    </div>
                  </div>
                </article>
              </a>

              {/* UI UX */}
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <article className="h-full rounded-3xl border border-gray-300 bg-white shadow-sm p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <header className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center text-white text-2xl font-extrabold">
                      FSD
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-gray-900">
                        FULL STACK DEVELOPMENT
                      </h3>

                      <p className="text-sm text-gray-600">
                        Product development Intern
                      </p>
                    </div>
                  </header>

                  <blockquote className="mt-6">
                    <p className="text-gray-800 text-base leading-relaxed">
                      Design premium interfaces, modern experiences,
                      and intuitive digital products for startups and brands.
                    </p>
                  </blockquote>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      HTML
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      CSS
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      JAVASCRIPT
                    </span>

                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      NODE.js
                    </span>
                    <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                      DATABASE 
                    </span>
                  </div>

                  <div className="mt-8">
                    <div className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
                      Apply Now →
                    </div>
                  </div>
                </article>
              </a>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
    </section>
  );
};

export default Internships;