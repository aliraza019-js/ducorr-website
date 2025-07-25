"use client";

import Image, { StaticImageData } from "next/image";

const testimonials = [
  {
    img: '/images/clients/client-3.png',
    name: "Peter Lowe",
    handle: "@peterlowex",
    content: "Ducorr's corrosion protection solutions are absolutely game-changing. Their expertise in cathodic protection has saved us millions in maintenance costs.",
    icon: "X",
    date: "May 19, 2027",
    rating: null,
    video: null,
  },
  {
    img: '/images/clients/client-1.png',
    name: "Rodri Alba",
    handle: "@rodri_spn",
    content: "Working with Ducorr has been exceptional. Their team's technical knowledge and professional approach exceeded our expectations.",
    icon: "X",
    date: "May 19, 2027",
    rating: null,
    video: null,
  },
  {
    img: '/images/clients/client-1.png',
    name: "Michele Lex",
    handle: null,
    content: "Outstanding service and support from Ducorr. Their corrosion protection systems are top-notch and their customer service is excellent.",
    icon: "G",
    date: "May 05, 2027",
    rating: 5,
    video: null,
  },
  {
    img: '/images/clients/client-1.png',
    name: "Michael Ross",
    handle: "@michjack",
    content: "Ducorr's innovative approach to corrosion protection has revolutionized our infrastructure maintenance. Highly recommended!",
    icon: "X",
    date: "Apr 12, 2027",
    rating: null,
    video: null,
  },
  {
    img: '/images/clients/client-1.png',
    name: "Mike Bryan",
    handle: "@mike0point7",
    content: "Ducorr's mind-blowing corrosion protection technology: Complete Solution Overview 🚀",
    icon: "square",
    date: "Mar 10, 2027",
    rating: null,
    video: null,
  },
  {
    img: '/images/clients/client-1.png',
    name: "Sarah Rodriguez",
    handle: "@sararodriguez",
    content: "The level of expertise and attention to detail from Ducorr is unmatched. They truly understand the complexities of corrosion protection.",
    icon: "X",
    date: "Feb 27, 2027",
    rating: null,
    video: null,
  },
  {
    img: '/images/clients/client-1.png',
    name: "Duncan Mitch",
    handle: "@lovingme_",
    content: "Ducorr's solutions have transformed our approach to infrastructure protection. Their team is knowledgeable and responsive.",
    icon: "X",
    date: "Feb 15, 2027",
    rating: null,
    video: null,
  },
  {
    img: '/images/clients/client-1.png',
    name: "Dante Luzzi",
    handle: "@dante1987",
    content: "Exceptional quality and service from Ducorr. Their corrosion protection systems are reliable and cost-effective.",
    icon: "X",
    date: "Feb 10, 2027",
    rating: null,
    video: null,
  },
];

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto my-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#e47b42]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#e47b42]/50">
              <span className="inline-flex bg-linear-to-r from-[#e47b42] to-[#e47b42] bg-clip-text text-transparent">
               Testimonials
              </span>
            </div>
            <h2 className="mb-6 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-4xl">
            What Our Clients Are Saying
            </h2>
            <p className="text-lg text-black">
            Innovative, tech-driven solutions that help leaders create happier, healthier workplaces — anytime, anywhere.
            </p>
          </div>

        <div>
          {/* Cards */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  children,
}: {
  testimonial: {
    img: StaticImageData | string;
    name: string;
    handle: string | null;
    content: string;
    icon: string;
    date: string;
    rating: number | null;
    video: string | null;
  };
  children: React.ReactNode;
}) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "X":
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case "G":
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        );
      case "square":
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <article className="relative rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col gap-4">
        {/* Header with profile picture, name, and handle */}
        <div className="flex items-center gap-3">
          <Image
            className="h-10 w-10 rounded-full object-cover"
            src={testimonial.img}
            width={40}
            height={40}
            alt={testimonial.name}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">{testimonial.name}</span>
            {testimonial.handle && (
              <span className="text-sm text-gray-500">{testimonial.handle}</span>
            )}
          </div>
        </div>

        {/* Rating stars if applicable */}
        {testimonial.rating && (
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}

        {/* Video title if applicable */}
        {testimonial.video && (
          <h3 className="font-medium text-gray-900">{testimonial.video}</h3>
        )}

        {/* Video thumbnail if applicable */}
        {testimonial.video && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Testimonial content */}
        <p className="text-gray-700 before:content-['\201c'] after:content-['\201d']">
          {children}
        </p>

        {/* Footer with icon and date */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          {getIcon(testimonial.icon)}
          <span>{testimonial.date}</span>
        </div>
      </div>
    </article>
  );
}
