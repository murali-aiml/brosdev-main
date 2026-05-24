import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { motion } from "framer-motion";
import img from "@/assets/img1.jpg";

const Hero = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-12">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl  sm:text-5xl md:text-6xl font-extrabold  text-gray-900">
            <span>Powering </span>
            <br></br>
            <span> Tomorrow  </span>
             
            <PointerHighlight rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600">
              <span className="relative z-10 p-2">With Intelligent AI</span>
            </PointerHighlight>
             
          </h1>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="rounded-2xl border border-gray-400 bg-white/70 backdrop-blur p-4 sm:p-5 shadow-xl">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed ">
                 BrosDevelopers is No.1 AI-powered AI solutions 
                      brand for startups and businesses, building private AI systems that 
                   combine automation, intelligence, and modern technology to transform 
                    business operations and drive future innovation.
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          >
             
          </motion.div>
        </motion.div>

        {/* Right: Image Card */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative group rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-lg">
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute -inset-20 bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-emerald-200 opacity-40 blur-3xl" />

            {/* Media area */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
              <img
                src={img}
                alt="AI-powered analytics dashboard"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Bottom caption bar */}
           
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent group-hover:ring-gray-300 transition"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
