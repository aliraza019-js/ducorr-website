import PageIllustration from "@/components/page-illustration";

export default function LunchNLearningThankYouPage() {
  return (
    <>
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="pb-12 text-center md:pb-16">
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Thank You!
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Your Lunch & Learn request has been received. Our team will contact you soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
