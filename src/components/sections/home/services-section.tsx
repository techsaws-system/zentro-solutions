import Image from "next/image";

import ServicesSectionImg from "../../../../public/images/services-section-img.png";

function ServicesSection() {
  const SERVICES = [
    "Answer and connect calls",
    "Pass along messages",
    "Screen inquiries",
    "Collect payments",
    "Book appointments",
    "Keep your CRM updated",
    "Represent you 24/7",
    "Handle everyday FAQs",
  ];

  return (
    <section>
      <div className="layout-standard grid lg:grid-cols-3 grid-cols-1 items-center lg:gap-16 max-md:pt-12">
        <div className="col-span-1 lg:order-1 order-2">
          <Image src={ServicesSectionImg} alt="Service overview illustration" className="max-lg:w-[500px] max-md:w-[350px] mx-auto"/>
        </div>
        <div className="lg:col-span-2 col-span-1 lg:order-2 order-1 max-lg:pt-24 max-md:pt-0">
          <h2 className="font-heading text-3xl md:text-4xl text-white lg:text-5xl font-bold leading-tight">
            A snapshot of the work <br />
            <span className="text-primary">we handle for you</span>
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl text-muted">
            From quick questions to complex conversations, by voice or text, our
            team delivers much more than a typical receptionist:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="flex items-center justify-center rounded-lg bg-white/10 px-5 py-4 text-sm md:text-base font-medium text-white text-center backdrop-blur-sm transition hover:bg-white/15"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;


