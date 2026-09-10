"use client";

import { Experience } from "./ExperienceEducationSection";
import { MdWork } from "react-icons/md";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <div
      className="
        bg-[#071033]
        rounded-xl
        shadow-lg
        border-l-4
        border-[#B2904C]
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        gap-4
      "
      style={{
        padding: "1rem", gap: "1rem"
      }}
    >
      <div className="flex items-start gap-4">

        {/* Icon */}

        <div
          className="
            hidden
            md:flex
            w-12
            h-12
            rounded-full
            bg-[#B2904C]
            items-center
            justify-center
            text-white
            text-xl
            flex-shrink-0
          "
        >
          <MdWork />
        </div>

        {/* Content */}

        <div className="flex-1">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">

            <div>

              <h3 className="text-xl md:text-2xl text-white">
                {experience.title}
              </h3>

              <p className="text-[#E9E96F] font-medium mt-1">
                {experience.company}
              </p>

            </div>

            <div
              className="
                text-sm
                md:text-base
                text-gray-400
                whitespace-nowrap
              "
            >
              {experience.period}
            </div>

          </div>

          <p
            className="
              mt-4
              text-gray-300
            "
            style={{ marginTop: "1rem" }}
          >
            {experience.description}
          </p>

        </div>

      </div>
    </div>
  );
}
