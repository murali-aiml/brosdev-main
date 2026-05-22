
import { useEffect, useState } from "react";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";
import Header from "./home/header/header";
import Hero from "./home/hero/hero";
import Features from "./home/features/features";
import Testimonial from "./home/testimonials/testimonials";
import BrandsBentoGrid from "./home/brands/brands";
import Founders from "./home/founders/founders";
import Teams from "./home/team/teams";
import Footer from "./home/footer/foooter"; 
import Internships from "./home/internships/internships"; 
import Contact from "./home/contact/contact";
import Products from "./home/our products/products";
import Workshops from "./home/workshops/workshops";


const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile("matches" in e ? e.matches : (e as MediaQueryList).matches);
    onChange(mql);
    mql.addEventListener("change", onChange as any);
    return () => mql.removeEventListener("change", onChange as any);
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <BackgroundRippleEffect rows={isMobile ? 50 : 33} />
      </div>

      {/* Sticky header should not be wrapped */}
      <Header />

      {/* Content */}
      <section>
        <div className="px-3 sm:px-4 md:px-6 lg:px-24">
          <Hero />
        </div>
      </section>

      <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <Features />
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <Products/>
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <Testimonial />
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <BrandsBentoGrid />
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <Founders />
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <Teams />
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <Internships />
      </div>
       <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <Workshops/>
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-24 lg:mb-20">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>

     
  );
};

export default App;
