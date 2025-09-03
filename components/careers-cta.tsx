export default function CareersCta() {
  return (
    <section id="contact" className="bg-[#d9823f] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Ready to Join Our Team?
          </h2>
          <p className="mb-8 text-lg text-orange-100">
            We're always looking for talented individuals who are passionate about corrosion protection and innovation. 
            Get in touch with our HR team to learn more about opportunities at Ducorr.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Contact HR Team
              </h3>
              <div className="space-y-3 text-orange-100">
                <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hr@ducorr.com</span>
                </div>
                {/* <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+971 50 168 2057</span>
                </div> */}
                <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Dubai, UAE</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Application Process
              </h3>
              <div className="space-y-3 text-orange-100">
                <div className="flex items-start">
                  <span className="mr-3 mt-1 h-5 w-5 rounded-full bg-white text-[#d9823f] text-xs font-bold">1</span>
                  <span>Submit your resume and cover letter</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1 h-5 w-5 rounded-full bg-white text-[#d9823f] text-xs font-bold">2</span>
                  <span>Initial screening and assessment</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1 h-5 w-5 rounded-full bg-white text-[#d9823f] text-xs font-bold">3</span>
                  <span>Technical interview with team lead</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1 h-5 w-5 rounded-full bg-white text-[#d9823f] text-xs font-bold">4</span>
                  <span>Final interview with management</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="mailto:hr@ducorr.com"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-[#d9823f] font-semibold shadow-lg transition-all hover:bg-gray-50"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 