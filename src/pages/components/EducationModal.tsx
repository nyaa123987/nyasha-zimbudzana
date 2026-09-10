"use client";

import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Education } from "./ExperienceEducationSection";

type EducationModalProps = {
  education: Education;
  onClose: () => void;
};

export default function EducationModal({
  education,
  onClose,
}: EducationModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      style={{ padding: "1rem" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-[#11072e]
          text-white
          rounded-2xl
          w-full
          max-w-6xl
          max-h-[100vh]
          overflow-y-auto
          shadow-2xl
        "
      >
        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b border-gray-700" style={{ padding: "1rem" }}>
          <h6 className="text-[18px] md:text-[23px]" style={{ color: "rgb(233,233,115)", paddingBottom: "0.5rem" }}>
            {education.title}
          </h6>

          <button
            onClick={onClose}
            className="
              text-3xl
              hover:text-[#B2904C]
              transition-colors
            "
          >
            <IoClose />
          </button>
        </div>

        {/* Body */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">

          {/* LEFT SIDE */}

          <div style={{ padding: "1rem" }}>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={education.image}
                alt={education.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Gallery */}

            {education.gallery.length > 1 && (

              <div className="grid grid-cols-3 gap-3" style={{ marginTop: "1rem" }}>

                {education.gallery.map((image, index) => (

                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${education.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                ))}

              </div>

            )}

          </div>

          {/* RIGHT SIDE */}

          <div className="flex flex-col" style={{ padding: "0 1rem 2rem 1rem" }}>

            <h6 className="text-[18px] md:text-[23px]" style={{ color: "rgb(233,233,115)" }}>
              {education.institution}
            </h6>

            <p className="text-gray-400 mb-8">
              {education.date}
            </p>

            {/* Overview */}

            <div className="mb-8">

              <h6 className="text-[16px] md:text-[18px] underline" style={{ marginTop: "1rem" }}>
                Overview
              </h6>

              <p className="text-gray-200">
                {education.overview}
              </p>

            </div>

            {/* Skills */}

            <div style={{ marginTop: "1rem" }}>

              <h6 className="text-[16px] md:text-[18px] underline">
                Skills Acquired
              </h6>

              <ul className="list-disc list-inside mt-2 space-y-1">

                {education.skills.map((skill) => (

                  <li
                    key={skill}
                    className="
                      text-sm
                    "
                  >
                    {skill}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
