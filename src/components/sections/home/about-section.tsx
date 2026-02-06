"use client";

import { useRef, useState } from "react";

import { Play } from "lucide-react";
import Link from "next/link";

function AboutSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="w-full section-padding-standard my-4 mb-12 max-md:mt-0 max-md:pt-4">
      <div className="layout-standard text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-heading lg:text-5xl font-bold leading-tight tracking-tight md:mb-12 mb-8 max-w-7xl mx-auto">
            Always available. Human every time. Built to be reliable. <br />
            <span className="text-accent">Your business, answered on your schedule</span>
          </h2>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="
                 relative
                 overflow-hidden
                 rounded-[32px]
                 border-[4px]
                 border-accent
                 bg-muted
               "
          >
            <div className="relative aspect-video">
              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                preload="metadata"
                controls={false}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                <source src="" type="video/mp4" />
                Your browser does not support video playback.
              </video>

              {!playing && (
                <button
                  onClick={handlePlay}
                  className="
                       absolute inset-0
                       flex items-center justify-center
                       bg-black/10
                     "
                >
                  <div
                    className="
                         w-28 h-28
                         rounded-full
                         bg-background
                         border-[6px]
                         border-accent
                         flex items-center justify-center
                         shadow-lg
                       "
                  >
                    <Play size={48} className="text-accent fill-accent ml-1" />
                  </div>
                </button>
              )}
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
