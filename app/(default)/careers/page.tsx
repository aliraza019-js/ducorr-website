export const metadata = {
  title: "Careers - Ducorr",
  description: "Join our team of corrosion protection experts. Explore career opportunities at Ducorr and help us protect critical infrastructure worldwide.",
};

import HeroCareers from "@/components/hero-careers";
import CareersBenefits from "@/components/careers-benefits";
import JobListings from "@/components/job-listings";
import CareersCta from "@/components/careers-cta";

export default function CareersPage() {
  return (
    <>
      <HeroCareers />
      <CareersBenefits />
      <JobListings />
      <CareersCta />
    </>
  );
} 