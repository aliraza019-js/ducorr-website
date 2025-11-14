export const metadata = {
  title: "Learning - Ducorr",
  description: "Explore our comprehensive collection of cathodic protection learning guides, technical insights, and educational content. Learn about concrete, marine structures, and storage tank corrosion protection.",
};

import HeroResources from "@/components/hero-resources";
import ResourcesGrid from "@/components/resources-grid";
import ResourcesCta from "@/components/resources-cta";

export default function LearningPage() {
  return (
    <>
      <HeroResources />
      <ResourcesGrid />
      <ResourcesCta />
    </>
  );
} 