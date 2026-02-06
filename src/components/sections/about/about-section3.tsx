export function AboutSection3() {
  const services = [
    {
      title: "Live call coverage",
      description:
        "Exceptional customer service is one call away. Whether part-time, on-demand, or 24/7, we connect with callers when you can't.",
      borderColor: "border-cyan-500",
      accentColor: "#0891b2",
    },
    {
      title: "Multichannel customer engagement",
      description:
        "Whether you're aiming to grow, build loyalty, save time, or all three, our unified platform makes it possible.",
      borderColor: "border-purple-900",
      accentColor: "#3f0f5c",
    },
    {
      title: "Managed live chat support",
      description:
        "Our live chat is run by real people who answer questions, gather details, and drive conversions.",
      borderColor: "border-pink-400",
      accentColor: "#f472b6",
    },
  ];
  const mobileServices = [...services, ...services];

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="hidden sm:grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl border-4 bg-white p-6 sm:p-8 transition-transform hover:shadow-lg"
              style={{
                borderColor: service.accentColor,
                borderLeft: `4px solid ${service.accentColor}`,
                borderBottom: `4px solid ${service.accentColor}`,
                borderTop: "none",
                borderRight: "none",
              }}
            >
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mb-6 text-base text-slate-700 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-block text-lg font-semibold transition-opacity hover:opacity-80"
                style={{ color: service.accentColor }}
              >
                Discover more
              </a>
            </div>
          ))}
        </div>

        <div className="sm:hidden overflow-hidden">
          <div className="auto-scroll-track gap-6">
            {mobileServices.map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                className="relative rounded-2xl border-4 bg-white p-6 w-[280px]"
                style={{
                  borderColor: service.accentColor,
                  borderLeft: `4px solid ${service.accentColor}`,
                  borderBottom: `4px solid ${service.accentColor}`,
                  borderTop: "none",
                  borderRight: "none",
                }}
              >
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-base text-slate-700 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold transition-opacity hover:opacity-80"
                  style={{ color: service.accentColor }}
                >
                  Discover more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

