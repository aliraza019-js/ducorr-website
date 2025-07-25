export const metadata = {
  title: "Resources - Ducorr",
  description: "Explore our comprehensive collection of cathodic protection resources, technical guides, and educational content. Learn about concrete, marine structures, and storage tank corrosion protection.",
};

import HeroResources from "@/components/hero-resources";
import ResourcesGrid from "@/components/resources-grid";
import ResourcesCta from "@/components/resources-cta";

export default function ResourcesPage() {
  return (
    <>
      <HeroResources />
      <ResourcesGrid />
      <ResourcesCta />
    </>
  );
} 