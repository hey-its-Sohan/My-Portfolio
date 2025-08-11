import React, { useEffect } from "react";
import { useParams } from "react-router";
import projects from "../Data/Projects";
import { ExternalLink, Github, Code, Lightbulb, Target, TrendingUp, ArrowLeft } from "lucide-react";
import { FaReact, FaNodeJs, FaStripe } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiVercel } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import DetailsHeader from "../Pages/DetailsHeader";
import Footer from "./Footer";





const ProjectDetails = () => {

  const techIcons = {
    "React.js": <FaReact className="text-sky-400 text-xl" />,
    "Node.js": <FaNodeJs className="text-green-500 text-xl" />,
    "Express.js": <SiExpress className="text-gray-600 text-xl" />,
    "MongoDB": <SiMongodb className="text-green-600 text-xl" />,
    "Firebase": <SiFirebase className="text-yellow-500 text-xl" />,
    "Stripe": <FaStripe className="text-indigo-500 text-xl" />,
    "Tailwind": <SiTailwindcss className="text-sky-500 text-xl" />,
    'Vercel': <SiVercel />,
  };


  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  if (!project) {
    return <p className="text-center mt-10 text-red-500">Project details not found.</p>;
  }

  return (
    <div className="min-h-screen bg-base-200">
      <DetailsHeader />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-base-200 via-base-100 to-base-300 py-16">
        <div className="max-w-screen-xl mx-auto px-5 mt-14 lg:px-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-6" data-aos="fade-right">
              <div className="badge badge-secondary mb-4">Featured Project</div>
              <h1 className="text-4xl font-bold">{project.name}</h1>
              <p className="text-lg text-base-content/70">{project.des}</p>

              <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-white gap-2"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-primary gap-2"
                  >
                    <Github size={18} /> View Code
                  </a>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative" data-aos="fade-left">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-20 space-y-16">
          {/* Tech Stack */}
          <div
            className="card bg-base-100 shadow-md p-8"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Tech Stacks</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {project.tech.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-base-200 hover:bg-base-300 transition-all"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="flex gap-2 items-center">
                    <span>{techIcons[tech]}</span> <span className="text-xl font-medium">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div
            className="card bg-base-100 shadow-md p-8"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
            </div>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-start p-4 rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
                  data-aos="fade-right"
                  data-aos-delay={index * 50}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p>{challenge}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div
            className="card bg-base-100 shadow-md p-8"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Future Enhancements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.futurePlans.map((plan, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-4 rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <Lightbulb className="w-5 h-5 text-primary mt-1" />
                  <p>{plan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
