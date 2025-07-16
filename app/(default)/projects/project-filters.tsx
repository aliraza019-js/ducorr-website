import { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: { industry: string; location: string }) => void;
}

export default function ProjectFilters({ onFilterChange }: FilterProps) {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const industries = [
    { value: "all", label: "All Industries" },
    { value: "marine", label: "Marine & Ports" },
    { value: "oil-gas", label: "Oil & Gas" },
    { value: "infrastructure", label: "Infrastructure" },
    { value: "industrial", label: "Industrial" },
    { value: "aviation", label: "Aviation" }
  ];

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "uae", label: "United Arab Emirates" },
    { value: "qatar", label: "Qatar" },
    { value: "jordan", label: "Jordan" },
    { value: "iraq", label: "Iraq" },
    { value: "pakistan", label: "Pakistan" }
  ];

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    onFilterChange({ industry, location: selectedLocation });
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    onFilterChange({ industry: selectedIndustry, location });
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* <div className="flex flex-wrap gap-2">
          {industries.map((industry) => (
            <button
              key={industry.value}
              onClick={() => handleIndustryChange(industry.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedIndustry === industry.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {industry.label}
            </button>
          ))}
        </div> */}
        
        <div className="flex flex-wrap gap-2">
          {locations.map((location) => (
            <button
              key={location.value}
              onClick={() => handleLocationChange(location.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedLocation === location.value
                  ? "bg-[#d9823f] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {location.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 