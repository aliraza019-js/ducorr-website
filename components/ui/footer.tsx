"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-400">
              &copy; Ducorr.com - All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Cathodic Protection Specialists
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-900">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/ioncrete"
                >
                  Ioncrete
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/marineshield"
                >
                  Marineshield
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/powercell"
                >
                  Powercell
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/powertide"
                >
                  Powertide
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/unicell"
                >
                  Unicell
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/tankbox"
                >
                  Tankbox
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/platepro"
                >
                  Platepro
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/condition-survey"
                >
                  Corrosion Survey
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/learning"
                >
                  Learning
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/store"
                >
                  Store
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-[#d9823f]"
                  href="tel:+97165578517"
                >
                  +971 6 557 8517
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-900">Connect</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-[#d9823f] transition hover:text-[#b86a2f]"
                  href="https://www.youtube.com/@ducorrmedia1510"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-[#d9823f] transition hover:text-[#b86a2f]"
                  href="https://www.linkedin.com/company/ducorr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-[#d9823f] transition hover:text-[#b86a2f]"
                  href="mailto:sales@ducorr.com"
                  aria-label="Email"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM12 13.091L1.636 5.457h20.728L12 13.091z"/>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      {/* <div className="relative -mt-16 h-60 w-full" aria-hidden="true"> */}
        {/* <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Ducorr'] after:absolute after:inset-0 after:bg-[#d9823f] after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Ducorr'] after:[text-shadow:0_1px_0_white]"></div> */}
        {/* Glow */}
        {/* <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-[#d9823f] blur-[80px]"></div>
        </div> */}
      {/* </div> */}
    </footer>
  );
}
