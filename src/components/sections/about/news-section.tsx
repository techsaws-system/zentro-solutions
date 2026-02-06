"use client";

import Link from "next/link";
import Image from "next/image";

export function NewsSection() {
  const newsItems = [
    {
      id: 1,
      headerBg: false,
      image: "/images/about-img4.png",
      title: "Zentro Solutions named to Oregon's Most Admired Companies list in 2022",
      colorBg: "bg-gradient-to-br from-blue-600 to-teal-500",
    },
    {
      id: 2,
      headerBg: false,
      image: "/images/about-img7.png",
      title:
        "Zentro Solutions CRO Rebecca Grimes named among the 100 most powerful women in sales",
    },
    {
      id: 3,
      headerBg: false,
      image: "/images/about-img6.png",
      title:
        "Zentro Solutions tops Fit Small Business's best answering services for small businesses in 2022",
      hearts: true,
    },
  ];
  const mobileNewsItems = [...newsItems, ...newsItems];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
            Zentro Solutions news
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              {item.headerBg ? (
                <div
                  className={`${item.colorBg || "bg-navy-900"} p-8 text-white text-center min-h-56 flex items-center justify-center`}
                >
                  <h3 className="text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  {item.hearts && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                      <span className="text-red-500 text-2xl">♥</span>
                      <span className="text-red-500 text-2xl">♥</span>
                      <span className="text-red-500 text-2xl">♥</span>
                      <span className="text-red-500 text-2xl">♥</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative w-full h-56 bg-purple-200">
                  <Image
                    src={item.image || ""}
                    alt="News highlight image"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Card Body */}
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-navy-900">
                  {item.title}
                </h3>
                <Link
                  href="#"
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden overflow-hidden">
          <div className="auto-scroll-track gap-6">
            {mobileNewsItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm w-[280px]"
              >
                {item.headerBg ? (
                  <div
                    className={`${item.colorBg || "bg-navy-900"} p-8 text-white text-center min-h-56 flex items-center justify-center`}
                  >
                    <h3 className="text-2xl font-bold leading-tight">
                      {item.title}
                    </h3>
                    {item.hearts && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                        <span className="text-red-500 text-2xl">â™¥</span>
                        <span className="text-red-500 text-2xl">â™¥</span>
                        <span className="text-red-500 text-2xl">â™¥</span>
                        <span className="text-red-500 text-2xl">â™¥</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative w-full h-48 bg-purple-200">
                    <Image
                      src={item.image || ""}
                      alt="News highlight image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <Link
                    href="#"
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
