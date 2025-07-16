import HeroProjects from "./hero-projects";
import PortfolioProjects from "./portfolio-projects";
import ProjectStats from "./project-stats";
import CTA from "@/components/cta";
import StickyActions from "@/components/StickyActions";
export default function ProjectsPage() {
  return (
    <>
      {/* Hero Projects Section */} 
      <HeroProjects />
      {/* Project Stats Section */}
      <ProjectStats />
      {/* Portfolio Projects Section */}
      <PortfolioProjects />
      {/* CTA Section */}
      <CTA />
      {/* Sticky Actions Section */}
      <StickyActions />
    </>
  );
} 