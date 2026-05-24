import { assets } from "@/constants/imports";

const Footer = () => {
  const year = new Date().getFullYear();

  const linkBase =
    "text-sm text-gray-300 hover:text-white transition-colors duration-150";

  return (
    <footer className="w-full bg-black text-gray-300">
      {/* Top */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Brand + summary */}
            <div className="lg:col-span-5">
              <a href="#" className="flex items-center gap-3">
                <img
                  src={assets.logo}
                  alt="Bros Developer"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-contain"
                />
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-white">
                    BrosDevelopers
                  </p>
                  <p className="text-xs sm:text-sm text-indigo-300/90">
                    Premier Private AI  
                  </p>
                </div>
              </a>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-300/90 max-w-prose">
                Creating cutting-edge AI-powered digital experiences that transform businesses through 
                automation, innovation, and intelligent technology solutions.
              </p>
            </div>

            {/* Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* Solutions */}
                <div>
                  <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-4">
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      
                      <a href="#solutions" className={linkBase}>
                        Private AI Systems
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" className={linkBase}>
                        Custom AI Integrations
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" className={linkBase}>
                       AI Automation
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" className={linkBase}>
                       Web/App development
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Company */}
              

                {/* Support */}
                <div>
                  <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-4">
                    Support
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#contact" className={linkBase}>
                        Contact Us
                      </a>
                    </li>
                     
                  </ul>
                </div>
              </div>
            </div>
            {/* End Links */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56 py-6">
        <div className="mx-auto max-w-7xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="Bros Developer"
              className="h-6 w-6 rounded object-contain"
            />
            <span className="text-sm text-white font-semibold">
              BrosDevelopers
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-xs sm:text-sm text-gray-400">
              © {year} BrosDevelopers. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#privacy" className={linkBase}>
              Privacy Policy
            </a>
            <a href="#terms" className={linkBase}>
              Terms of Service
            </a>
            <a href="#cookies" className={linkBase}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
