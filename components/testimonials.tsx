"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";

const clientLogos = [
  "/images/clients/Sonatrach+Logo.png",
  "/images/clients/RTA+Logo.png",
  "/images/clients/EAD+Logo.png",
  "/images/clients/Shell+Logo.png",
  "/images/clients/Anantara+Logo.png",
  "/images/clients/client-2.png",
  "/images/clients/pearl+Logo.png",
  "/images/clients/Petrochem.png",
];

const testimonials = [
  {
    img: '/images/clients/client-3.png',
    clientImg: clientLogos[1],
    name: "Catheline V Sull.",
    company: "Dubai Water Canal",
    content:
      "Very good service, support and good technical advice",
    categories: [1, 3, 5],
  },
  {
    img: '/images/clients/client-1.png',
    clientImg: clientLogos[6],
    name: "Tony Clegg.",
    company: "Pearl Gas to Liquids",
    content:
      "Ducorr performed their scope professionally and completed all works on schedule. I would have no problem recommending Ducorr for any project",
    categories: [1, 2, 4],
  },
  {
    img: '/images/clients/client-1.png',
    clientImg: clientLogos[3],
    name: "R. Selvam.",
    company: "Shell Markets",
    content:
      "Ducorr management is honest, dependable and their resources are hard working. Beyond that, Ducorr has an impressive professional approach which is absolutely rare among contractors.",
    categories: [1, 2, 5],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

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
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
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
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData | string;
    clientImg: string;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-[#f3f3f3] p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src={testimonial.clientImg}
            height={70}
            width={70}
            alt="Client logo"
            className="bg-transparent"
            style={{ background: 'transparent' }}
          />
        </div>
        <p className="text-black before:content-['\201c'] after:content-['\201d']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full bg-transparent"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
            style={{ background: 'transparent' }}
          />
          <div className="text-sm font-medium text-black">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-black transition-colors hover:text-black"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
