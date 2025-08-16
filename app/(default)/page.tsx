export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import Workflows from "@/components/workflows";
import FeaturesPlanet from "@/components/features-planet";
// import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import StickyActions from "@/components/StickyActions";

export default function Home() {
  return (
    <>
      <Hero />
      <Workflows />
      <FeaturesPlanet />
      {/* <Testimonials /> */}
      <BusinessCategories />
      <Cta />
      <StickyActions />
    </>
  );
}
