import Image from "next/image";

export function AboutSection4() {
  return (
    <section className="layout-standard section-padding-standard my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-balance">
            Industries We <span className="text-accent">Support</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed font-medium mb-2">
            We proudly provide customer support solutions for a wide range of
            industries including:
          </p>

          <ul className="space-y-4 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>E-commerce & Online Stores</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Law Firms & Legal Consultants</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Dental Clinics</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Medical Practices & Healthcare Providers</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Appointment-Based Businesses</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Service-Based Companies</span>
            </li>
          </ul>
        </div>

        <div className="relative h-72 sm:h-80 lg:h-96 flex items-center justify-center lg:justify-end max-sm:hidden">
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-yellow-100 z-0" />
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-teal-500 z-10" />

            <div className="relative z-5 w-full h-full">
              <Image
                src="/images/about-img3.png"
                alt="Zentro Solutions team members"
                width={500}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
