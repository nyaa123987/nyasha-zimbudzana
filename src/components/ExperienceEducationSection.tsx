"use client";

import { useState } from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import EducationModal from "./EducationModal";
import H2 from "./h2";

export type Education = {
  title: string;
  institution: string;
  date: string;
  image: string;
  gallery: string[];
  overview: string;
  skills: string[];
};

export type Experience = {
  title: string;
  company: string;
  description: string;
  period: string;
};

export default function ExperienceEducationSection() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">(
    "education"
  );

  const [selectedEducation, setSelectedEducation] =
    useState<Education | null>(null);

  const educations: Education[] = [
    {
      title: "AI For Everyone",
      institution: "Coursera",
      date: "July 2026",
      image: "/images/coursera1.png",
      gallery: [
        "/images/coursera1.png",
        "/images/coursera1.png",
        "/images/coursera1.png",
      ],
      overview:
        "Completed the AI For Everyone course by DeepLearning.AI, gaining a strong understanding of Artificial Intelligence, Machine Learning concepts, business applications of AI, and responsible AI adoption.",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Strategy",
        "Responsible AI",
      ],
    },

    {
      title: "Software Engineering",
      institution: "Uncommon.org",
      date: "Jan 2025 – Dec 2025",
      image: "/images/uncommon.jpg",
      gallery: [
        "/images/uncommon.jpg",
        "/images/uncommon.jpg",
        "/images/uncommon.jpg",
      ],
      overview:
        "Completed an intensive Software Engineering program focused on full-stack web development, software design principles, teamwork, Git, professional communication, and real-world projects.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Supabase",
        "Git",
      ],
    },

    {
      title: "Introduction to Python",
      institution: "Saylor Academy",
      date: "May 2025",
      image: "/images/python.jpg",
      gallery: [
        "/images/python.jpg",
        "/images/python.jpg",
        "/images/python.jpg",
      ],
      overview:
        "Learnt the basics of Python programming, including data types, control structures, functions, and object-oriented programming.",
      skills: [
        "Python",
        "Programming",
        "Problem Solving",
      ],
    },

  ];

  const experiences: Experience[] = [
    {
      title: "Youth Coding Instructor",
      company: "Uncommon.org",
      description:
        "Volunteered to teach children Scratch Programming, Microsoft Word and Excel while mentoring them in basic computer literacy.",
      period: "Feb 2026 – Nov 2026",
    },

    {
      title: "Software Engineering Student",
      company: "Uncommon.org",
      description:
        "Built multiple real-world software projects while learning software engineering principles, teamwork, agile methodologies and Git version control.",
      period: "Jan 2025 – Dec 2025",
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-16 px-5 sm:px-8 md:px-12 lg:px-20"
      style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <H2>EXPERIENCE & EDUCATION</H2>

        {/* Tabs */}

        <div className="flex justify-center gap-8 mb-10" style={{ marginBottom: "2rem" }}>

          <button
            onClick={() => setActiveTab("education")}
            className={`text-lg font-semibold transition-all duration-300 pb-2 border-b-2 ${
              activeTab === "education"
                ? "border-[#B2904C] text-[#B2904C]"
                : "border-transparent"
            }`}
          >
            <h2 className="contact-h2 text-[22px] md:text-[28px] font-light text-start">Education</h2>
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`text-lg font-semibold transition-all duration-300 pb-2 border-b-2 ${
              activeTab === "experience"
                ? "border-[#B2904C] text-[#B2904C]"
                : "border-transparent"
            }`}
          >
            <h2 className="contact-h2 text-[22px] md:text-[28px] font-light text-start">Experience</h2>
          </button>

        </div>

        {/* EDUCATION */}

        {activeTab === "education" && (

          <div
            className="
            grid
            grid-cols-3
            gap-5
            lg:gap-8
          "
          >

            {educations.map((education) => (

              <EducationCard
                key={education.title}
                education={education}
                onClick={() => setSelectedEducation(education)}
              />

            ))}

          </div>

        )}

        {/* EXPERIENCE */}

        {activeTab === "experience" && (

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {experiences.map((experience) => (

              <ExperienceCard
                key={experience.title}
                experience={experience}
              />

            ))}

          </div>

        )}

        {/* Modal */}

        {selectedEducation && (

          <EducationModal
            education={selectedEducation}
            onClose={() => setSelectedEducation(null)}
          />

        )}

      </div>
    </section>
  );
}