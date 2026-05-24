import { useEffect, useRef, useState } from "react";
import { assets } from "@/constants/imports";

type NavLink = { href: `#${string}`; label: string };

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Regular links (exclude the booking CTA from here)
  const links: NavLink[] = [
    { href: "#products", label: "Products" },
    { href: "#internships", label: "Internships" },
     { href: "#workshops", label: "Workshops" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const setFromLocation = () => {
      setHash(window.location.hash || "");
      setMenuOpen(false);
    };
    setFromLocation();
    window.addEventListener("hashchange", setFromLocation);
    return () => window.removeEventListener("hashchange", setFromLocation);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  useEffect(() => {
  const sections = ["products", "internships", "workshops", "contact"];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;

    for (const section of sections) {
      const el = document.getElementById(section);

      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setHash(`#${section}`);
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  // Use a light-black header background with white text
  const bgClass = "bg-[#0b0b0b] text-white";

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full">
      <div className="px-3 sm:px-4 md:px-6 lg:px-20 pt-6 md:py-3">
        {/* Top bar (pill) */}
        <div
          className={`flex items-center justify-between gap-3 ${bgClass} border border-black-200 rounded-full px-3 md:px-4 transition-colors duration-200 ease-out ${
            scrolled ? "shadow-sm" : ""
          }`}
        >
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 md:gap-4 group">
            <img
              src={assets.logo}
              alt="Bros Developer logo"
              className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] md:w-[55px] md:h-[55px] shrink-0 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white transition-colors duration-200 hover:text-indigo-200 shrink-0 transition-transform duration-800 ease-out group-hover:scale-105">
              𝑩𝒓𝒐𝒔 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓𝒔
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center justify-end gap-1 lg:gap-2"
          >
            {links.map(({ href, label }) => {
              const active = hash === href;
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base font-medium transition-all duration-200 transform-gpu
                  text-white hover:text-indigo-400 hover:shadow-sm
                  hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40`}
                >
                  {label}
                </a>
              );
            })}
            {/* CTA button */}
             
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={buttonRef}
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-8 text-white hover:bg-white/6 transition-colors"
            aria-label="Toggle navigation"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        <div
          className={`md:hidden transition-[grid-template-rows,margin] duration-200 ease-out ${
            menuOpen ? "grid grid-rows-[1fr] mt-2" : "grid grid-rows-[0fr] mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <nav
              id="primary-navigation"
              aria-label="Primary mobile"
                className={`${bgClass} border border-gray-800 rounded-2xl p-2 sm:p-3`}
            >
              <ul className="flex flex-col">
                {links.map(({ href, label }) => {
                  const active = hash === href;
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-2 text-base font-medium transition-colors
                            ${active ? "bg-white/6 text-white" : "text-white hover:bg-white/6 hover:text-indigo-400"}
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40`}
                      >
                        {label}
                        <svg
                          className={`w-4 h-4 ${
                            active ? "text-white" : "text-gray-400"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </a>
                    </li>
                  );
                })}
                {/* CTA button on mobile */}
                <li className="mt-2">
                  <a
                    href="#book"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-base font-semibold
                               bg-indigo-600 text-white hover:bg-indigo-500
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70"
                  >
                    Book Free Consultation
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;