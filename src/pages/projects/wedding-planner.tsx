import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Github,
} from "lucide-react";
import H2 from "@/components/h2";

export default function EverAfterCaseStudy() {
  return (
    <main className="w-full text-white">

      {/* =====================================================
          BACK TO PROJECTS
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8">
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            md:text-base
            opacity-70
            hover:opacity-100
            transition
          "
          style={{ padding: "1rem" }}
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section style={{ padding: "1rem" }}>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            Case Study
          </p>

          <H2 className="text-start mt-4">
            Ever After
          </H2>

          <p  className="contact-h2 text-[22px] md:text-[28px] mb-[15px] md:mb-[25px] font-light text-start">
            A wedding planning platform that helps couples organize their
            wedding in one place.
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-3 my-8 md:my-12">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Supabase",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  border
                  border-white/20
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  opacity-90
                "
                style={{ paddingInline: "13px", paddingBlock: "5px", marginTop: "5px" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div style={{ marginTop: "10px" }}>
          <div
            className="
              relative
              w-full
              aspect-[16/9]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              mt-10
            "
          >
            <Image
              src="/images/everafter.png"
              alt="Ever After wedding planning platform"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM
      ===================================================== */}

      <section style={{ padding: "4rem 1rem 1rem 1rem" }}>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            01 · The Problem
          </p>

          <H2 className="text-start">
            Keeping wedding planning organized can be difficult.
          </H2>

          <p className="text-lg md:text-xl leading-8 opacity-80 mt-6">
            Wedding planning can involve spreadsheets, WhatsApp messages,
            notes, and multiple lists, making it difficult to keep everything
            organized.
          </p>
        </div>
      </section>


      {/* =====================================================
          WHY I BUILT IT
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            02 · Why I Built It
          </p>

          <H2 className="text-start">
            Creating a simpler way to manage wedding planning.
          </H2>

          <p className="text-lg md:text-xl leading-8 opacity-80 mt-6">
            I wanted to create a simple platform that brings important wedding
            planning information into one place while strengthening my
            full-stack development skills.
          </p>
        </div>
      </section>


      {/* =====================================================
          SOLUTION
      ===================================================== */}

      <section style={{ padding: "4rem 1rem 1rem 1rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] opacity-60">
              03 · The Solution
            </p>

            <H2 className="text-start">
              One place for the important parts of wedding planning.
            </H2>
          </div>

          <div>
            <p className="text-lg leading-8 opacity-80 mb-6">
              Ever After gives couples a central dashboard where they can
              manage:
            </p>

            <div className="space-y-4">
              {[
                "Wedding details",
                "Guests",
                "Tasks",
                "Notes",
                "Budget information",
                "Vendors",
                "Wedding countdown",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="flex-shrink-0"
                  />
                  <span className="text-lg opacity-90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          DASHBOARD IMAGE
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div
          className="
            relative
            w-full
            aspect-[16/9]
            rounded-2xl
            overflow-hidden
            border
            border-white/10
          "
        >

          <Image
            src="/images/everafter.png"
            alt="Ever After dashboard"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-center text-sm opacity-50 mt-3">
          Ever After dashboard
        </p>
      </section>


      {/* =====================================================
          KEY BENEFITS
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            04 · Key Benefits
          </p>
          <H2 className="text-start">
            Making wedding planning easier to manage
          </H2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {[
            "Keeps planning information organized",
            "Makes tasks easier to track",
            "Reduces reliance on scattered notes and spreadsheets",
            "Gives users one place to manage their wedding",
          ].map((benefit) => (
            <div
              key={benefit}
              className="
                border
                border-white/10
                rounded-2xl
                p-6
                flex
                items-start
                gap-4
              "
              style={{ padding: "1em" }}
            >
              <CheckCircle2
                size={21}
                className="flex-shrink-0 mt-1"
              />
              <p className="text-lg leading-7 opacity-90">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* =====================================================
          WHAT I BUILT WITH
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            05 · What I Built With
          </p>
          <H2 className="text-start">
            Technology behind the application.
          </H2>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {/* Frontend */}
          <div
            className="
              border
              border-white/10
              rounded-2xl
              p-6
            "
            style={{ padding: "1em" }}
          >

            <h3 className="text-xl">
              Frontend
            </h3>
            <p className="opacity-70 mt-3 leading-7">
              Next.js, TypeScript, Tailwind CSS
            </p>
          </div>


          {/* Backend */}
          <div
            className="
              border
              border-white/10
              rounded-2xl
              p-6
            "
            style={{ padding: "1em" }}
          >
            <h3 className="text-xl">
              Backend
            </h3>
            <p className="opacity-70 mt-3 leading-7">
              Supabase, PostgreSQL
            </p>
          </div>


          {/* Authentication */}
          <div
            className="
              border
              border-white/10
              rounded-2xl
              p-6
            "
            style={{ padding: "1em" }}
          >
            <h3 className="text-xl">
              Authentication
            </h3>
            <p className="opacity-70 mt-3 leading-7">
              Supabase Auth
            </p>
          </div>


          {/* Deployment */}
          <div
            className="
              border
              border-white/10
              rounded-2xl
              p-6
            "
            style={{ padding: "1em" }}
          >
            <h3 className="text-xl">
              Deployment
            </h3>
            <p className="opacity-70 mt-3 leading-7">
              GitHub, Vercel
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          CHALLENGE
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div
          className="
            p-7
            md:p-10
          "
        >
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            06 · Challenge
          </p>
          <H2 className="text-start">
            Protecting user-specific information.
          </H2>

          <p className="text-sm md:text-xl leading-8 opacity-80 mt-6">
            One of the main challenges was ensuring that users could only
            access their own wedding information.
          </p>

          <p className="text-sm md:text-xl leading-8 opacity-80 mt-4">
            I used Supabase Row Level Security to control access to
            user-specific data.
          </p>
        </div>
      </section>


      {/* =====================================================
          RESPONSIVENESS
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            07 · Responsive Design
          </p>

          <H2 className="text-start">
            Designed for different screen sizes.
          </H2>

          <p className="text-lg md:text-xl leading-8 opacity-80 mt-6">
            Ever After was designed to provide a consistent experience across
            desktop, tablet, and mobile devices.
          </p>
        </div>

        {/* Responsive Mockup */}

        <div
          className="
            relative
            w-full
            rounded-2xl
            overflow-hidden
            border
            border-white/10
          "
          style={{ marginTop: "2rem", aspectRatio: "16/10" }}
        >

          <Image
            src="/images/responsive-all.png"
            alt="Ever After responsive design"
            width={1600}
            height={10}
            className="w-full h-auto"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </section>


      {/* =====================================================
          OTHER SCREENS
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            Project Screens
          </p>

          <H2 className="text-start">
            A closer look at Ever After
          </H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          {/* Guests */}
          <div>
            <div
              className="
                relative
                aspect-[16/10]
                rounded-2xl
                overflow-hidden
                border
                border-white/10
              "
            >
              <Image
                src="/images/ever-after/guests.png"
                alt="Ever After guest management"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl mt-4">
              Guest Management
            </h3>
          </div>


          {/* Tasks */}
          <div>
            <div
              className="
                relative
                aspect-[16/10]
                rounded-2xl
                overflow-hidden
                border
                border-white/10
              "
            >
              <Image
                src="/images/ever-after/tasks.png"
                alt="Ever After task management"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl mt-4">
              Task Management
            </h3>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <div
              className="
                relative
                aspect-[16/8]
                rounded-2xl
                overflow-hidden
                border
                border-white/10
              "
            >
              <Image
                src="/images/ever-after/notes.png"
                alt="Ever After notes"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl mt-4">
              Notes
            </h3>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT I LEARNED
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            08 · What I Learned
          </p>

          <H2 className="text-start">
            Growing through a real full-stack project.
          </H2>
          <p className="text-lg md:text-xl leading-8 opacity-80 mt-6">
            This project strengthened my experience with authentication,
            database relationships, CRUD operations, RLS policies,
            responsive design, and full-stack application development.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          {[
            "Authentication",
            "Database Relationships",
            "CRUD Operations",
            "RLS Policies",
            "Responsive Design",
            "Full-Stack Development",
          ].map((skill) => (

            <span
              key={skill}
              className="
                border
                border-white/15
                rounded-full
                text-sm
              "
              style={{ paddingInline: "13px", paddingBlock: "5px", marginTop: "5px" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* =====================================================
          PROJECT LINKS
      ===================================================== */}

      <section style={{ padding: "3rem 1rem 0 1rem" }}>
        <div
          className="
            border
            border-white/10
            rounded-3xl
            text-center
          "
          style={{ padding: "3rem 1rem" }}
        >

          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            Ever After
          </p>

          <H2 className="text-3xl md:text-4xl font-bold mt-3">
            Explore the project
          </H2>

          <p className="opacity-70 text-lg mt-4">
            View the live application or explore the source code on GitHub.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8" style={{ paddingTop: "1em" }}>

            {/* Live Demo */}
            <a
              href="https://ever-after-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                border
                border-white/30
                rounded-lg
                hover:border-white
                transition
              "
              style={{ padding: "0.5rem 1rem" }}
            >
              Live Demo
              <ArrowUpRight size={18} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nyaa123987/ever-after"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                border
                border-white/30
                rounded-lg
                hover:border-white
                transition
              "
              style={{ padding: "0.5rem 1rem" }}
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}