import PageIllustration from "@/components/page-illustration";

export default function UnderDevelopment() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#d9823f] to-[#b86a2f] p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <svg className="h-12 w-12 text-[#d9823f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#d9823f] text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Page Under <br className="max-lg:hidden" />
              Development
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                We're working hard to bring you this amazing content. Our team is crafting something special that will help you understand cathodic protection solutions better.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-[#d9823f] to-[#d9823f] bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/"
                  >
                    <span className="relative inline-flex items-center">
                      Back to Home{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="mx-auto max-w-2xl" data-aos="zoom-y-out" data-aos-delay={600}>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-center text-xl font-semibold text-gray-900">
                Development Progress
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Design & Planning</span>
                  <span className="text-sm font-semibold text-[#d9823f]">100%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-full rounded-full bg-[#d9823f]"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Content Creation</span>
                  <span className="text-sm font-semibold text-[#d9823f]">75%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-3/4 rounded-full bg-[#d9823f]"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Testing & Optimization</span>
                  <span className="text-sm font-semibold text-gray-500">25%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-1/4 rounded-full bg-[#d9823f]"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Launch</span>
                  <span className="text-sm font-semibold text-gray-500">0%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-0 rounded-full bg-[#d9823f]"></div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Estimated completion: <span className="font-semibold text-[#d9823f]">Coming Soon</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 