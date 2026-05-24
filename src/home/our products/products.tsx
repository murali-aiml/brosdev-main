 
import AI from "@/assets/privateAI.png";
import placeAI from "@/assets/placementAI.png";
import customAI from "@/assets/customAI.png";
const Products = () => {
  const products = [
    {
      name: "Private Offline AI",
      status: "Developmented",
      description:
        "A secure private AI system designed for businesses to automate workflows, manage internal knowledge, and improve operations using company data safely and efficiently with your company data.",
      image: AI,
      tech: ["AI/ML", "Private AI", "LLM", "Automation"],
    },

    {
      name: "Placement AI System",
      status: "In Development",
      description:
        "An intelligent AI placement platform designed to streamline hiring, match talent efficiently, and automate recruitment workflows for companies and institutions securely and at enterprise scale.",
      image: placeAI,
           tech: ["Machine Learning", "Dashboard", "Analytics"],
    },

    {
      name: "Custom AI Integrations",
      status: "New Launch",
      description:
        "Custom AI solutions seamlessly integrated into existing products, workflows, and enterprise systems for intelligent automation, smarter decision-making, enhanced productivity, and scalable business transformation.",

      image: customAI,
         

      tech: ["AI Integration", "AI CCTV-Camera ", "Enterprise AI"],
    },
  ];

  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-6xl font-black text-gray-900">
            Our Products
          </h2>
          
           <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-56">
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-400 bg-white/80 md:bg-white/70 backdrop-blur p-4 sm:p-5 md:p-6 lg:p-7 shadow-xl mb-8 sm:mb-10">
            <p className="text-gray-950 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
              Building intelligent AI-powered products and
            next-generation digital solutions for the future.
            </p>
          </div>
        </div>

        </div>

        {/* Products */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Status */}
                <div className="absolute top-4 right-4 rounded-full bg-black/10 backdrop-blur px-4 py-2 text-sm font-semibold text-white">
                  {product.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-8 rounded-2xl bg-indigo-600 px-6 py-3 text-white font-semibold transition hover:bg-indigo-500">
                  Explore Product →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
