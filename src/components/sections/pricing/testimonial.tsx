"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  date: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Jillian is fantastic - always quick to respond and ready to help.",
    author: "Erin Lynn Berman",
    date: "December 15",
    rating: 5,
  },
  {
    id: 2,
    text: "Jillian consistently delivers exceptional, personal customer service. She's...",
    author: "Parking.com Customer",
    date: "December 11",
    rating: 5,
  },
  {
    id: 3,
    text: "Jillian Johnson has been an incredible resource for us, and she's easy to reach...",
    author: "Emily Scott",
    date: "December 10",
    rating: 5,
  },
  {
    id: 4,
    text: "From sales to onboarding, everything was top-notch with fast response times and exc...",
    author: "Nick",
    date: "December 6",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
    testimonials[(currentIndex + 3) % testimonials.length],
  ];

  return (
    <section className="py-12 sm:py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Real clients. Real feedback.
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start">
          {/* Trustpilot Badge */}
          <div className="flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6 w-full md:w-64">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-3">
                  Outstanding
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-teal-500 text-teal-500"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Based on 413 customer reviews
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star size={20} className="fill-teal-500 text-teal-500" />
                  <span className="font-bold text-gray-900">Trustpilot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="flex-1">
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-hidden mb-6">
                {visibleTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-72 bg-gray-50 rounded-lg p-5 sm:p-6 space-y-4"
                  >
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-teal-500 text-teal-500"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {testimonial.text}
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600 text-xs">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
                  aria-label="Next reviews"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Show all 5 stars note */}
              <p className="text-sm text-gray-600 mt-6">
                Showing our 5-star reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
