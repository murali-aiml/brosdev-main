import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import pic1 from "@/assets/pics/1.jpeg";
import pic2 from "@/assets/pics/2.jpeg";
import pic3 from "@/assets/pics/3.jpeg";
import pic4 from "@/assets/pics/4.jpeg";
import pic5 from "@/assets/pics/5.jpeg";
import pic10 from "@/assets/pics/10.jpeg";
import pic11 from "@/assets/pics/11.jpeg";
import pic12 from "@/assets/pics/12.jpeg";
import po1 from "@/assets/pics/o1.jpeg";
import po2 from "@/assets/pics/02.jpeg";
import pp1 from "@/assets/pics/prize2.jpeg";

 
import video2 from "@/assets/videos/2.mp4";
import video3 from "@/assets/videos/3.mp4";

const galleryItems = [
  {
    type: "image",
    category: "Theory",
    src: pic1,
  },

  {
    type: "image",
    category: "Basic structure",
    src: pic11,
  },

  {
    type: "video",
    category: "Hands-on Video",
    src: video3,
  },
{
    type: "image",
    category: "Prize for Top Website Design under 2hrs goes to MR.DHAMODHARAN.R  ",
    src: pp1,
  },
  {
    type: "image",
    category: "Hands-on By Students",
    src: po2,
  },
  {
    type: "image",
    category: "Hands-on session",
    src: pic2,
  },

  {
    type: "image",
    category: "Practical Session",
    src: pic12,
  },

  {
    type: "video",
    category: "Hands-on Video",
    src: video2,
  },

  {
    type: "image",
    category: "Hands-on",
    src: pic4,
  },

  {
    type: "image",
    category: "Discussion b/w students about the design",
    src: pic5,
  },
  {
    type: "image",
    category: "Hands-on works by students",
    src: po1,
  },

  {
    type: "image",
    category: "code explanation",
    src: pic12,
  },
  {
    type: "image",
    category: "Students",
    src: pic3,
  },
{
    type: "image",
    category: "Doubt session ",
    src: pic10,
  },
 
];

 

const WorkshopGallery = () => {

  const [active, setActive] = useState(2);


 const filtered = galleryItems;
  // THEN useEffect
  useEffect(() => {

    const interval = setInterval(() => {

      setActive((prev) =>
        prev === filtered.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, [filtered.length]);


  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? filtered.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActive((prev) =>
      prev === filtered.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="workshops"
      className="relative pt-[80px] pb-24 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-indigo-600 mb-5">
            WORKSHOPS
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-[35px]">
            Workshop Gallery
          </h2>

          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)] p-10 mb-12">
              <p className="text-gray-700 text-lg leading-[1.8] text-center">
                Explore our frontend development workshop,
                student innovations, practical sessions,
                and hands-on learning experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
         
        {/* Slider */}
        <div className="relative mt-10 h-[720px] overflow-hidden">

          <div className="absolute inset-0 flex items-center justify-center">

            {filtered.map((item, index) => {

              const offset = index - active;

              return (

                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `
                               translateX(${offset * 240}px)
                             scale(${index === active ? 0.82 : 0.68})
                           `, 
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                    zIndex: 50 - Math.abs(offset),
                  }}
                >

                  {/* CARD */}
                  <div
                    className={`
                      relative overflow-hidden rounded-[42px]
                      shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                      transition-all duration-700
                      bg-white

                      ${
                        index === active
                          ?  "w-[480px] h-[580px]"
                          : "w-[650px] h-[630px]"
                      }
                    `}
                  >

                    {/* IMAGE */}
                    {item.type === "image" ? (

                      <img
                        src={item.src}
                        alt={item.category}
                        className="h-full w-full object-cover"
                      />

                    ) : (

                      /* VIDEO */
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source
                          src={item.src}
                          type="video/mp4"
                        />
                      </video>

                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Video Play Button */}
                    {item.type === "video" && (

                      <div className="absolute inset-0 flex items-center justify-center">

                        <button className="flex h-28 w-28 items-center justify-center rounded-full bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md transition hover:scale-100">

                          <Play className="ml-1 h-12 w-12 fill-black text-black" />

                        </button>

                      </div>
                    )}

                    {/* Bottom Category */}
                    <div className="absolute bottom-6 left-6 rounded-full bg-black/70 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">

                      {item.category}

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-6">

            <button
              onClick={prevSlide}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white shadow-xl transition hover:scale-110"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white shadow-xl transition hover:scale-110"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;