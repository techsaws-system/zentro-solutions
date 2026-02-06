"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

export function FeatureSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playRef = useRef<HTMLButtonElement | null>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — VIDEO */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Card container */}
              <div className="rounded-2xl border-4 border-[#1A1A4D] overflow-hidden bg-white relative">
                {/* Video */}
                <video
                  ref={videoRef}
                  className="w-full h-56 sm:h-72 md:h-80 object-cover"
                  poster="/video-poster.jpg" // optional thumbnail
                  preload="metadata"
                  onPlay={() => playRef.current?.classList.add("opacity-0")}
                  onPause={() => playRef.current?.classList.remove("opacity-0")}
                >
                  <source
                    src="/videos/virtual-receptionist.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support video playback.
                </video>

                {/* Play / Pause Overlay */}
                <button
                  ref={playRef}
                  onClick={togglePlay}
                  className="
                    absolute inset-0
                    flex items-center justify-center
                    bg-black/20
                    transition-opacity
                  "
                >
                  <div className="w-20 h-20 bg-[#1A1A4D] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1A1A4D]/80 transition-colors">
                    <Play size={32} className="text-white fill-white ml-1" />
                  </div>
                </button>
              </div>

              {/* Bottom accent */}
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-[#FF6B35] rounded-b-2xl" />
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A4D] leading-tight">
              Do more with live virtual receptionists.
            </h2>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              With two decades of experience, Zentro Solutions' virtual
              receptionists save you time, delight callers, and capture new
              customers or clients. See why we're far more than an answering
              service.
            </p>

            <Button
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-lg px-8 py-6 rounded-xl w-full sm:w-auto"
            >
              See how Zentro Solutions works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
