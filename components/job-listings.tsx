'use client';

import { useState } from 'react';
import JobApplicationModal from './job-application-modal';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export default function JobListings() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs: Job[] = [
    {
      title: "Senior Corrosion Engineer",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead corrosion protection projects, design cathodic protection systems, and provide technical expertise to clients.",
      requirements: [
        "Bachelor's degree in Corrosion Engineering or related field",
        "NACE certification preferred",
        "Experience with CP design and installation",
        "Strong project management skills",
      ],
    },
    {
      title: "Field Service Technician",
      department: "Operations",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      experience: "2+ years",
      description: "Install, maintain, and troubleshoot cathodic protection systems in the field.",
      requirements: [
        "Technical diploma or equivalent experience",
        "Experience with electrical systems",
        "Willingness to travel",
        "Strong problem-solving skills",
      ],
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop new business opportunities and manage client relationships in the corrosion protection market.",
      requirements: [
        "Engineering background preferred",
        "Proven sales experience in technical field",
        "Excellent communication skills",
        "Knowledge of corrosion protection industry",
      ],
    },
    {
      title: "Project Manager",
      department: "Project Management",
      location: "Doha, Qatar",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage multiple corrosion protection projects from inception to completion.",
      requirements: [
        "PMP certification preferred",
        "Experience in construction or oil & gas",
        "Strong leadership and communication skills",
        "Budget and timeline management experience",
      ],
    },
    {
      title: "Quality Control Specialist",
      department: "Quality Assurance",
      location: "Kuwait",
      type: "Full-time",
      experience: "3+ years",
      description: "Ensure all corrosion protection systems meet industry standards and client specifications.",
      requirements: [
        "Quality management experience",
        "Knowledge of industry standards (NACE, ISO)",
        "Attention to detail",
        "Experience with testing and inspection",
      ],
    },
    {
      title: "Research & Development Engineer",
      department: "R&D",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop innovative corrosion protection solutions and improve existing technologies.",
      requirements: [
        "Master's degree in Materials Science or related field",
        "Experience in laboratory research",
        "Knowledge of corrosion mechanisms",
        "Innovation mindset",
      ],
    },
  ];

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <section id="open-positions" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
            Open Positions
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Join our team of experts and help us protect critical infrastructure worldwide. Browse our current openings below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h3>
                <span className="rounded-full bg-[#d9823f] px-3 py-1 text-xs font-medium text-white">
                  {job.type}
                </span>
              </div>

              <div className="mb-4 flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {job.department}
                </span>
                <span className="flex items-center">
                  <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="flex items-center">
                  <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                  {job.experience}
                </span>
              </div>

              <p className="mb-4 text-gray-600">
                {job.description}
              </p>

              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-gray-900">Requirements:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#d9823f]"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handleApplyClick(job)}
                className="w-full rounded-lg bg-[#d9823f] px-4 py-2 text-white font-medium transition-all hover:bg-[#b86a2f] hover:shadow-md transform hover:scale-[1.02] cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Don't see a position that matches your skills?{" "}
            <a href="#contact" className="font-semibold text-[#d9823f] hover:underline">
              Send us your resume
            </a>
          </p>
        </div>
      </div>

      {/* Job Application Modal */}
      {selectedJob && (
        <JobApplicationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          jobTitle={selectedJob.title}
          jobDepartment={selectedJob.department}
          jobLocation={selectedJob.location}
          jobType={selectedJob.type}
        />
      )}
    </section>
  );
} 