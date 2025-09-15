'use client';

import { useRouter } from "next/navigation";
import PageIllustration from "@/components/page-illustration";
import { useState } from "react";

export default function LunchNLearningPage() {
  const router = useRouter();
  const [mode, setMode] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string) || '';

    const personalDomains = ['@gmail.com', '@hotmail.com', '@proton.me', '@yahoo.com', '@outlook.com', '@icloud.com'];
    const isPersonalEmail = personalDomains.some(domain => email.toLowerCase().includes(domain));
    if (isPersonalEmail) {
      alert('Please use a business email address. Personal email addresses are not accepted.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          queryType: 'lunch-n-learning',
          project: 'lunch-n-learning',
          preferredDate: formData.get('preferredDate'),
          preferredTime: formData.get('preferredTime'),
          mode: formData.get('mode'),
          location: formData.get('location'),
          attendees: formData.get('attendees'),
          message: formData.get('notes') || 'Lunch & Learn request',
        }),
      });

      if (response.ok) {
        router.push('/lunch-n-learn/thank-you');
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

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
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Lunch & Learn
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Book an on-site or virtual knowledge session with our corrosion protection specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-1 lg:gap-16">
            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >
              <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-200/50">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Request a Session</h2>
                <p className="mb-8 text-gray-600">Fill out the form and our team will schedule a Lunch & Learn tailored for you.</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Business Email *</label>
                    <input type="email" id="email" name="email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" placeholder="name@company.com" />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                      <input type="date" id="preferredDate" name="preferredDate" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                      <input type="time" id="preferredTime" name="preferredTime" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="mode" className="block text-sm font-medium text-gray-700 mb-2">Mode *</label>
                      <select id="mode" name="mode" required value={mode} onChange={(e) => setMode(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors">
                        <option value="">Select mode</option>
                        <option value="on-site">On-site</option>
                        <option value="virtual">Virtual</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-2">Estimated Attendees</label>
                      <input type="number" min={1} id="attendees" name="attendees" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location {mode === 'on-site' ? '*' : '(optional)'}</label>
                    <input type="text" id="location" name="location" required={mode === 'on-site'} placeholder={mode === 'virtual' ? 'e.g., Teams/Zoom/Meet' : 'Office / Site Address'} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                    <textarea id="notes" name="notes" rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors resize-none" placeholder="Share goals, topics of interest, or logistics"></textarea>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input type="text" id="company" name="company" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors" />
                  </div>

                  <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-[#d9823f] to-[#b86a2f] px-6 py-3 text-white font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
