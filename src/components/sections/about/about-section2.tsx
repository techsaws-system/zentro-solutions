import Image from "next/image";

export function AboutSection2() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="layout-standard section-padding-standard">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-56 md:h-64 lg:h-72 flex items-center justify-center lg:justify-start order-2 lg:order-1 max-md:hidden">
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-yellow-100 z-0" />
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary z-10" />

              <div className="relative z-5 w-full h-full">
                <Image
                  src="/images/about-img1.png"
                  alt="Product feature showcase"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <h2 className="text-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-balance">
              Our Response Time <span className="text-accent">Guarantee</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl leading-relaxed font-medium mb-2">
              We understand that fast responses are critical for customer
              satisfaction. Our team is committed to maintaining consistent and
              reliable response times.
            </p>

            <ul className="space-y-4 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>Live Chat Responses: Within 2-5 minutes</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>Email Responses: Within 1 hour</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>
                  Order & Refund Assistance: Handled professionally and promptly
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
