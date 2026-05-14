import React, { memo } from "react";
import foodAppImg from "../../Assets/Projects/food-app.png";
import foodAdminImg from "../../Assets/Projects/food-admin.png";
import foodBackendImg from "../../Assets/Projects/food-backend.png";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const PROJECTS = [
  {
    title: "Food Delivery Frontend",
    description:
      "A premium Single Page Application (SPA) for food ordering, featuring a sleek UI, category filtering, and a seamless checkout experience.",
    image: foodAppImg,
    tags: ["React", "Tailwind CSS", "Netlify"],
    codeLink: "https://github.com/azarrazagula/auth-frontend",
    demoLink: "https://singlepagefoodapp.netlify.app",
  },
  {
    title: "Food App Admin Panel",
    description:
      "Comprehensive administrative dashboard to manage orders, track analytics, and handle user data with a clean, professional interface.",
    image: foodAdminImg,
    tags: ["React", "Admin Panel", "Dashboard"],
    codeLink: "https://github.com/azarrazagula/auth-admin",
    demoLink: "https://admin-singlepagefoodapp.netlify.app",
  },
  {
    title: "Backend API Service",
    description:
      "Robust Node.js & Express backend handling authentication, database management with MongoDB, and secure API endpoints for the food platform.",
    image: foodBackendImg,
    tags: ["Node.js", "Express", "MongoDB", "Render"],
    codeLink: "https://github.com/azarrazagula/auth-backend",
    demoLink: "https://auth-backend-3-4m2m.onrender.com",
  },
];

const Projects = memo(() => (
  <section className="py-10 md:py-16 bg-[#0f172a] rounded-[2rem] md:rounded-[3rem] px-4">
    <div className="container mx-auto px-0 md:px-4 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-[#FF7A00] font-bold tracking-widest uppercase text-xs md:text-sm mb-3">My Projects</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          A showcase of my recent work
        </h1>
        <div className="w-16 md:w-20 h-1 md:h-1.5 bg-[#FF7A00] mx-auto rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {PROJECTS.map((project, i) => (
          <ScrollReveal key={project.title} animation="bottom-to-top">
            <Card className="bg-[#1e293b] rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-[#FF7A00]/30 hover:-translate-y-3 group h-full flex flex-col">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF7A00] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    as="a"
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 text-sm font-bold bg-[#0f172a] border border-white/10 rounded-xl text-white hover:bg-white/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    Code
                  </Button>
                  <Button
                    as="a"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 text-sm font-bold bg-[#FF7A00] rounded-xl text-white shadow-[0_10px_20px_-5px_rgba(255,122,0,0.4)] hover:bg-[#E66D00] hover:shadow-[0_15px_25px_-5px_rgba(255,122,0,0.5)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" />
                      <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5z" />
                    </svg>
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
));

export default Projects;
