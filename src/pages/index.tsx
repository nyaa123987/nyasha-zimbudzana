import { useState, useEffect } from "react";
import AOS from "aos";
/*import "aos/dist/aos.css"; */
import { CheckCircle } from "lucide-react";

import {
  SiVercel,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiGithub,
  SiSupabase,
  SiChatbot,
} from "react-icons/si";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { HiOutlineMail } from 'react-icons/hi';

import H1 from './components/h1';
import H2 from './components/h2';
import H3 from './components/h3';
import H4 from './components/h4';
import H6 from './components/h6';
import ExperienceEducationSection from "./components/ExperienceEducationSection";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { name:"Python", icon: <SiPython />, color: "#3776AB" },
    { name:"HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { name:"CSS", icon: <SiCss3 />, color: "#1572B6" },
    { name:"JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name:"React", icon: <SiReact />, color: "#61DAFB" },
    { name:"Next.JS", icon: <SiNextdotjs />, color: "#FFFFFF" },
    { name:"Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name:"Node.JS", icon: <SiNodedotjs />, color: "#339933" },
    { name:"Git", icon: <SiGit />, color: "#F05032" },
    { name:"GitHub", icon: <SiGithub />, color: "#181717" },
    { name:"Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
    { name:"OpenAI", icon: <SiChatbot />, color: "#10A37F" },
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://formspree.io/f/mzzalaad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <header className="flex text-[22px] justify-between align-middle px-[5rem]">
        <p className="text-[16px] md:text-[22px]">NZ</p>

        <ul className="hidden md:flex list-none gap-[50px] hover:underline active:opacity-50">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <p className="text-[16px] underline md:hidden">
          <a href="#contact">
            Contact Me
          </a>
        </p>
      </header>



      {/* HERO */}
      <main
        id="hero"
        data-aos="zoom-in"
      >
        <H1>
          Hi, I'm <span className="name">Nyasha Zimbudzana</span>
        </H1>
        <H1>A Junior Full Stack Developer</H1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "100px",
            marginTop: "30px",
            padding: "0 3rem"
          }}
        >
          <div
            style={{
              width: "70%",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#000324",
              transform: "rotate(-10deg)",
            }}
            className="hidden md:flex flex-col"
          >
            <H3>Goal-Focused</H3>
            <H4>
              I am ready to exceed expectations and build powerful web
              applications for real-world impact.
            </H4>
          </div>

          <div style={{ width: "100%", height: "56vh", overflow: "hidden" }}>
            <div
              style={{
                backgroundImage: "url('/images/nyasha1.png')",
                backgroundSize: "contain",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                height: "60vh",
                width: "100%",
                display: "flex",
                alignItems: "end",
              }}
            ></div>

            <a href="#projects">
              <button style={{ marginInline: "80px" }}>MY PROJECTS</button>
            </a>
          </div>

          <div
            style={{
              width: "70%",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#000324",
              transform: "rotate(10deg)",
            }}
            className="hidden md:flex flex-col"
          >
            <H3>MY EXPERTISE</H3>
            <H4>FRONTEND</H4>
            <H4>BACKEND</H4>
            <H4>FULLSTACK</H4>
          </div>
        </div>

        <a
          href="#projects"
          id="button"
          style={{ position: "absolute", bottom: "20px" }}
        >
          MY PROJECTS
        </a>
      </main>



      {/* ABOUT */}
      <section id="about" style={{ padding: "3rem 1rem" }} data-aos="fade-up" className="md:h-screen flex flex-col md:flex-row gap-[50px] justify-center align-middle text-center md:items-center">
        <div className="flex md:flex-col gap-[100px] justify-center">
          <img
            src="/images/nyasha3.jpg"
            alt="Nyasha"
            style={{
              transform: "rotate(-10deg)",
              borderRadius: "10px",
              boxShadow: "0 0 50px 3px rgba(233,233,115,0.6)",
            }}
            className="hidden md:flex md:h-[10vh]"
          />

          <img
            src="/images/nyasha2.jpg"
            alt="Nyasha"
            style={{
              transform: "rotate(10deg)",
              borderRadius: "10px",
              boxShadow: "0 0 50px 1px rgba(233,233,115,0.6)",
            }}
            className="hidden md:flex md:h-[15vh]"
          />
        </div>

        <div className="md:w-[58%] md:text-center">
          <H2>WHO AM I?</H2>
          <p className="text-[16px] md:text-[18px]" style={{ paddingBottom: "3vh" }}>
            I am a Web Developer and Uncommon.org graduate with hands-on experience
            in building modern, responsive websites using ReactJS.
            <br /><br />
            Programming is my passion, that's why I've been coding and building
            projects during my academic journey.
            <br /><br />
            I am ready to collaborate, learn and build impactful web solutions.
          </p>

          <a href="#contact" id="button">CONTACT ME</a>
        </div>

        <div>
          <img
            src="/images/nyasha4.png"
            alt="Nyasha"
            style={{
              transform: "rotate(-10deg)",
              borderRadius: "10px",
              boxShadow: "0 0 50px 1px rgba(233,233,115,0.6)",
            }}
            className="hidden md:flex md:h-[25vh]"
          />
        </div>
      </section>



      {/* SKILLS */}
      <section
        id="skills"
        data-aos="fade-up"
        style={{
          padding: "3rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="h-screen"
      >
        <H2>MY SKILLS</H2>

        <div className="skills-wrapper">
          {/* LEFT GRID */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <span
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <a 
          href="/Nyasha-Zimbudzana-Fullstack-Developer.pdf" 
          target="_blank"
          rel="noopener noreferrer" 
          id="button">
            DOWNLOAD MY CV
        </a>

      </section>



      {/* PROJECTS */}
      <section id="projects" data-aos="fade-up" style={{ padding: "3rem 1rem" }}>
        <H2>MY PROJECTS</H2>

        <div className="flex flex-col md:flex-row gap-[3vh] md:gap-[10%] justify-center align-middle md:items-center" style={{ padding: "2rem 0 4rem 0" }}>
          <div className="w-[80%] md:w-[30%] h-[30vh] bg-amber-600"
            style={{
              backgroundImage: "url('/images/academy.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "end",
            }}
          >
          </div>

          <div className="md:w-[50%]">
            <h2 className="contact-h2 text-[22px] md:text-[28px] mb-[15px] md:mb-[25px] font-light text-start">Bright Academy</h2>
            <p className="text-[16px] md:text-[18px]">Bright Academy is a fictious school website with modern UI. It allows users to log in as teacher, parent or student.</p>
            <div className="flex gap-8" style={{ paddingTop: "15px" }}>
              <a href="https://github.com/nyaa123987/bright-academy" target="_blank" rel="noopener noreferrer" className="contact-h2 text-[12px] md:text-[13px] font-extralight rounded-3xl hover:cursor-pointer active:opacity-50 flex justify-center gap-2 align-middle items-center" style={{ background: "rgb(233, 233, 115, 0.15)", padding: "8px" }}>
                <span><FaGithub /></span>
                View Code
              </a>
              <a href="https://bright-academy.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-h2 text-[12px] md:text-[13px] font-extralight rounded-3xl hover:cursor-pointer active:opacity-50 flex justify-center gap-2 align-middle items-center" style={{ background: "rgb(233, 233, 115, 0.15)", padding: "8px" }}>
                <span><SiVercel /></span>
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-[3vh] md:gap-[10%] justify-center align-middle md:items-center" style={{ padding: "4rem 0" }}>
          <div className="w-[80%] md:w-[30%] h-[30vh] bg-amber-600"
            style={{
              backgroundImage: "url('/images/wedding.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "end",
            }}
          ></div>

          <div className="md:w-[50%]">
            <h2 className="contact-h2 text-[22px] md:text-[28px] mb-[15px] md:mb-[25px] font-light text-start">Ever After - Wedding Planner App</h2>
            <p className="text-[16px] md:text-[18px]">A Next.js + Supabase wedding planner app that guides users through the process of planning a wedding.</p>
            <div className="flex gap-8" style={{ paddingTop: "15px" }}>
              <a href="https://github.com/nyaa123987/wedding-planner" target="_blank" rel="noopener noreferrer" className="contact-h2 text-[12px] md:text-[13px] font-extralight rounded-3xl hover:cursor-pointer active:opacity-50 flex justify-center gap-2 align-middle items-center" style={{ background: "rgb(233, 233, 115, 0.15)", padding: "8px" }}>
                <span><FaGithub /></span>
                View Code
              </a>
              <a href="https://wedding-planner-omega-flame.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-h2 text-[12px] md:text-[13px] font-extralight rounded-3xl hover:cursor-pointer active:opacity-50 flex justify-center gap-2 align-middle items-center" style={{ background: "rgb(233, 233, 115, 0.15)", padding: "8px" }}>
                <span><SiVercel /></span>
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[3vh] md:gap-[10%] justify-center align-middle md:items-center" style={{ padding: "4rem 0" }}>
          <div className="w-[80%] md:w-[30%] h-[30vh] bg-amber-600"
            style={{
              backgroundImage: "url('/images/payslip.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "end",
            }}>
          </div>

          <div className="md:w-[50%]">
            <h2 className="contact-h2 text-[22px] md:text-[28px] mb-[15px] md:mb-[25px] font-light text-start">Payslip Generator - Python Project</h2>
            <p className="text-[16px] md:text-[18px]">A Python project that reads information from an Excel file and produces payslip PDFs for each employee.</p>
            <div className="flex gap-8" style={{ paddingTop: "15px" }}>
              <a href="https://github.com/nyaa123987/Payslip-Generator" target="_blank" rel="noopener noreferrer" className="contact-h2 text-[12px] md:text-[13px] font-extralight rounded-3xl hover:cursor-pointer active:opacity-50 flex justify-center gap-2 align-middle items-center" style={{ background: "rgb(233, 233, 115, 0.15)", padding: "8px" }}>
                <span><FaGithub /></span>
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-[3vh] md:gap-[10%] justify-center align-middle md:items-center" style={{ padding: "4rem 0" }}>
          <div className="w-[80%] md:w-[30%] h-[30vh] bg-amber-600"
            style={{
              backgroundImage: "url('/images/bakers.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "end",
            }}
          ></div>

          <div className="md:w-[50%]">
            <h2 className="contact-h2 text-[22px] md:text-[28px] mb-[15px] md:mb-[25px] font-light text-start">Baker&apos;s Inn Website</h2>
            <p className="text-[16px] md:text-[18px]">A redesign of the Baker&apos;s Inn Website, focusing on clean UI and mobile responsiveness.</p>
            <div className="flex gap-8" style={{ paddingTop: "15px" }}>
              <a href="https://github.com/nyaa123987/Bakers-Inn" target="_blank" rel="noopener noreferrer" className="contact-h2 text-[12px] md:text-[13px] font-extralight rounded-3xl hover:cursor-pointer active:opacity-50 flex justify-center gap-2 align-middle items-center" style={{ background: "rgb(233, 233, 115, 0.15)", padding: "8px" }}>
                <span><FaGithub /></span>
                View Code
              </a>
              <a href="https://bakers-inn-git-main-nyashas-projects-0049bd2f.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-h2 text-[12px] md:text-[13px] font-extralight rounded-3xl hover:cursor-pointer active:opacity-50 flex justify-center gap-2 align-middle items-center" style={{ background: "rgb(233, 233, 115, 0.15)", padding: "8px" }}>
                <span><SiVercel /></span>
                Live Demo
              </a>
            </div>
          </div>
        </div>

      </section>



      {/* EXPERIENCE */}
      <section
        id="experience"
        data-aos="fade-up"
        style={{ padding: "4rem 1rem" }}
      >
        <ExperienceEducationSection />
      </section>



      {/* CONTACT */}
      <section
        id="contact"
        data-aos="zoom-in"
        className="contact-section"
        style={{ padding: "2rem 1rem" }}
      >

        <H2>CONTACT ME</H2>

        <div className="contact-wrapper">

          {/* LEFT FORM */}
          <form className="contact-form" onSubmit={sendEmail}>
            <label className="text-[12px] md:text-[14px] mb-[4px] md:mb-[6px] opacity-85">Name</label>
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              required 
            />

            <label className="text-[12px] md:text-[14px] mb-[4px] md:mb-[6px] opacity-85">Email</label>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange} 
              required />

            <label className="text-[12px] md:text-[14px] mb-[4px] md:mb-[6px] opacity-85">Message</label>
            <textarea 
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4} 
              required />

            <button
              type="submit"
              disabled={sending}
              className="cursor-pointer text-black px-6 py-2 rounded transition active:opacity-[0.5]"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>

          {/* RIGHT INFO */}
          <div className="contact-info">

            <h2 className="contact-h2 text-[25px] md:text-[30px] mb-[15px] md:mb-[25px] font-light text-start">Get in Touch</h2>

            <div className="info-item">
              <span className="icon blue"><FiMail /></span>
              <div>
                <p>Email</p>
                <span className="email"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=nyashazim07@gmail.com" target='_blank' rel='noopener noreferrer'>nyashazim07@gmail.com</a></span>
              </div>
            </div>

            <div className="info-item">
              <span className="icon purple"><FiPhone /></span>
              <div>
                <p>Phone</p>
                <span className="phone">+263 78 310 6031</span>
              </div>
            </div>

            <div className="info-item">
              <span className="icon pink"><FiMapPin /></span>
              <div>
                <p>Location</p>
                <span className="location">Harare, Zimbabwe</span>
              </div>
            </div>

            <h3>Follow Me</h3>

            <div className="socials">

              <a href="https://github.com/nyaa123987" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-3'>
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/nyasha-zimbudzana-10861834b/" target='_blank' rel='noopener noreferrer' className="flex items-center space-x-3">
                <FaLinkedin />
              </a>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nyashazim07@gmail.com" target='_blank' rel='noopener noreferrer' className="flex items-center space-x-3">
                <HiOutlineMail />
              </a>

            </div>
          </div>

        </div>
      </section>

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white text-center p-8 rounded-xl shadow-lg">
            <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-green-600">
              Message sent!
            </h2>
          </div>
        </div>
      )}



      {/* FOOTER */}
      <footer id="footer" className="top-border">
        <a href="#hero" className="text-[20px] md:text-[25px]" style={{ color: "rgb(233,233,115)" }}>
          NZ
        </a>

        <ul className="text-[13px] md:text-[18px] footer">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <H6>© 2026 Nyasha Zimbudzana. All rights reserved.</H6>
      </footer>
    </>
  );
}
