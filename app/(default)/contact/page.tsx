import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import ducorrOffice from "@/public/images/contact/ducorr-office.jpeg";
export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            {/* <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div> */}
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Contact Us
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
               Ready to protect your infrastructure? Our corrosion protection specialists are here to help you find the perfect solution for your project. 
              </p>
              {/* <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-[#d9823f] to-[#d9823f] bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Book a Meeting{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    +971 50 168 2057
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          {/* Hero image */}
          <div className="mx-auto max-w-3xl" data-aos="zoom-y-out" data-aos-delay={600}>
            <Image
              className="rounded-2xl shadow-xl"
              src={ducorrOffice}
              alt="Hero"
              width={900}
              height={506}
              priority
            />
          </div>
        </div>
      </div>
    </section>

      {/* Contact Form & Info Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >
              <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-200/50">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Book a Meeting
                </h2>
                <p className="mb-8 text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors"
                      placeholder="Your Company Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors"
                    >
                      <option value="">Select a project type</option>
                      <option value="marineshield">Marineshield</option>
                      <option value="ioncrete">Ioncrete</option>
                      <option value="unicell">Unicell</option>
                      <option value="powercell">Powercell</option>
                      <option value="platepro">Platepro</option>
                      <option value="powertide">Powertide</option>
                      <option value="tankbox">Tankbox</option>
                      <option value="condition-survey">Condition Survey</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-[#d9823f] to-[#b86a2f] px-6 py-3 text-white font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div
              className="order-1 lg:order-2"
              data-aos="fade-left"
            >
              <div className="space-y-8">
                {/* Office Locations */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Offices
                  </h3>
                  
                  {/* Middle East Office */}
                  <div className="rounded-xl bg-gradient-to-br from-[#d9823f]/10 to-[#d9823f]/5 p-6 border border-[#d9823f]/20">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9823f] text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          Ducorr Middle East (FZC)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Middle East & North Africa
                        </p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>T: +971 6 557 8517</p>
                          <p>E: sales@ducorr.com</p>
                          <p>Sharjah Airport Free Zone</p>
                          <p>United Arab Emirates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Saudi Arabia Office */}
                  <div className="rounded-xl bg-gradient-to-br from-[#d9823f]/10 to-[#d9823f]/5 p-6 border border-[#d9823f]/20">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9823f] text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          DUCORR ARABIA
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Kingdom of Saudi Arabia
                        </p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>T: +966 13 887 8888</p>
                          <p>E: salesksa@ducorr.com</p>
                          <p>Sumuo Tower</p>
                          <p>Prince Turki Bin Mohamed Road</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Contact */}
                <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:sales@ducorr.com"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#d9823f] transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d9823f]/10">
                        <svg className="h-5 w-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span>sales@ducorr.com</span>
                    </a>
                    
                    <a
                      href="tel:+97165578517"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#d9823f] transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d9823f]/10">
                        <svg className="h-5 w-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span>+971 6 557 8517</span>
                    </a>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 