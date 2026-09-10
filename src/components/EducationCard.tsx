"use client";

import Image from "next/image";
import { Education } from "./ExperienceEducationSection";

type EducationCardProps = {
  education: Education;
  onClick: () => void;
};

export default function EducationCard({
  education,
  onClick,
}: EducationCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group
        cursor-pointer
        rounded-xl
        overflow-hidden
        bg-[#071033]
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Certificate Image */}

      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={education.image}
          alt={education.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Card Content */}

      <div style={{ padding: "0.5rem" }}>

        <h6 className="text-md md:text-[18px] lg:text-[23px]" style={{ color: "rgb(233,233,115)" }}>
          {education.title}
        </h6>

        <h6 className="text-sm md:text-md">
          {education.institution}
        </h6>

        <p
          className="
            text-sm
            text-gray-300
            mt-2
          "
        >
          {education.date}
        </p>

        {/* Learn More */}

        <div className="flex justify-end mt-6">

          <div
            className="
              w-5
              h-5
              md:w-10
              md:h-10
              rounded-full
              bg-[#B2904C]
              flex
              items-center
              justify-center
              text-white
              text-lg
              transition-all
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </div>

        </div>

      </div>
    </div>
  );
}