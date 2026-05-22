const Contact = () => {
  return (
    <section id="contact" className="py-0 px-0">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-6xl font-black text-gray-900">
            Contact Us
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            Let’s build intelligent digital solutions together.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">

          {/* LEFT BIG CARD */}
          <div className="relative overflow-hidden rounded-[36px] border border-indigo-300/40 bg-white/80 backdrop-blur-xl p-10 shadow-[0_20px_80px_rgba(99,102,241,0.15)]">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 via-indigo-200/20 to-fuchsia-200/30 blur-3xl" />

            <div className="relative">

              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                Bros Developers
              </div>

              <h3 className="mt-8 text-5xl font-black text-gray-900 leading-tight">
                Let’s Create
                <br />
                Something Amazing
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
                Whether you need AI solutions, automation systems,
                premium websites, or digital innovation —
                our team is ready to help bring your vision to life.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-5">

                <div className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg">
                  <p className="text-sm font-semibold text-gray-500">
                    EMAIL
                  </p>

                  <p className="mt-2 text-lg font-bold text-gray-900">
                    brosdevelopersinfo@gmail.com
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg">
                    <p className="text-sm font-semibold text-gray-500">
                      PHONE
                    </p>

                    <p className="mt-2 text-lg font-bold text-gray-900">
                      +91 72000 18500
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg">
                    <p className="text-sm font-semibold text-gray-500">
                      PHONE 
                    </p>

                    <p className="mt-2 text-lg font-bold text-gray-900">
                      +91 63746 67844
                    </p>
                  </div>

                </div>
              </div>

              {/* CTA */}
              
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">

            {/* Location Card */}
            <div className="rounded-[32px] border border-pink-200/40 bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(236,72,153,0.10)]">

              <div className="flex items-center gap-4">
                 

                <div>
                  <h3 className="text-3xl font-black text-gray-900">
                    Our Locations
                  </h3>

                  <p className="text-gray-500">
                    Operating across India
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="font-bold text-gray-900">
                    Bengaluru
                  </p>

                  <p className="mt-3 leading-relaxed text-gray-600">
                    113, Service Rd, Vijaya Bank Colony,
                    Horamavu, Bengaluru – 560113
                  </p>
                </div>

              

              </div>
            </div>

            {/* Extra Card */}
            <div className="rounded-[32px] border border-cyan-200/40 bg-gradient-to-br from-cyan-500 to-indigo-600 p-8 text-white shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

              <p className="text-sm uppercase tracking-widest text-cyan-100">
                Bros Developers
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight">
                AI-Powered
                <br />
                Digital Solutions
              </h3>

              <p className="mt-5 text-cyan-100 leading-relaxed">
                Building intelligent products,
                scalable systems, and premium digital experiences.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;