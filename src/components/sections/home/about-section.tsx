import Link from "next/link";
import Image from "next/image";

import HomeAboutImg from "../../../../public/images/home-about-img.jpg";

function AboutSection() {
  return (
    <section className="w-full section-padding-standard my-4 mb-12 max-md:mt-0 max-md:pt-4">
      <div className="layout-standard text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-heading lg:text-5xl font-bold leading-tight tracking-tight md:mb-12 mb-8 max-w-7xl mx-auto">
          Always available. Human every time. Built to be reliable. <br />
          <span className="text-accent">
            Your business, answered on your schedule
          </span>
        </h2>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="
                 relative
                 overflow-hidden
                 rounded-[32px]
                 border-[4px]
                 border-black
                 bg-muted
               "
          >
            <div className="relative aspect-video">
              <Image
                src={HomeAboutImg}
                alt="About Zentro Solutions."
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          <div className="h-2 bg-primary rounded-b-[32px] mt-[-2px]" />
        </div>

        <div className="md:mt-16 mt-12">
          <Link
            href="/about"
            className="
                 bg-black
                 hover:bg-black/80
                 text-primary-foreground
                 text-sm font-semibold
                 rounded-lg
                 px-6 py-4
               "
          >
            See how Zentro Solutions<span className="text-primary">.</span>{" "}
            works
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
