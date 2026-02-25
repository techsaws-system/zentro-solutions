import Image from "next/image";

export function AboutSection1() {
  return (
    <section className="layout-standard section-padding-standard my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-balance">
            Our Commitment to{" "}
            <span className="text-accent">Quality Support</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed font-medium mb-2">
            At Zentro Solutions, our goal is to provide fast, reliable, and
            professional customer support that helps businesses improve customer
            satisfaction and retention. We focus on:
          </p>

          <ul className="space-y-4 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Quick response times</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Professional communication</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Dedicated support agents</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl">✓</span>
              <span>Scalable support solutions</span>
            </li>
          </ul>
        </div>

        <div className="relative h-72 md:h-80 lg:h-96 flex items-center justify-center lg:justify-end max-md:hidden">
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-yellow-100 z-0" />
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-primary z-10" />

            <div className="relative z-5 w-full h-full">
              <Image
                src="/images/about-img1.png"
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
