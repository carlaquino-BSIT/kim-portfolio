"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { GeistMono } from "geist/font/mono";

// =====================================================
// DATA
// =====================================================

import { projects, categories } from "@/data/projects";

// =====================================================
// COMPONENT
// =====================================================

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // =====================================================
  // FILTER PROJECTS
  // =====================================================

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  // =====================================================
  // LIMIT HOMEPAGE PROJECTS
  // =====================================================

  const visibleProjects = filteredProjects.slice(0, 6);

  // =====================================================
  // MODAL
  // =====================================================

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  // =====================================================
  // ESCAPE KEY
  // =====================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && selectedProject) {
        closeProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // =====================================================
  // CLEANUP BODY SCROLL
  // =====================================================

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* =====================================================
          PROJECTS SECTION
      ===================================================== */}

      <section
        id="projects"
        className="border-b border-black/[0.08] bg-white"
      >
        <div className="container-site mx-auto max-w-7xl py-20 sm:py-24 lg:py-32">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
          >
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--green)] sm:w-10" />

                <span
                  className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
                >
                  Selected Work
                </span>
              </div>

              <h2 className="mt-7 max-w-2xl font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.78] tracking-[-0.06em]">
                Selected
                <br />
                <span className="italic text-[var(--green)]">
                  projects.
                </span>
              </h2>
            </div>
          </div>

          {/* =====================================================
              FILTERS
          ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            className="mt-14 flex flex-wrap gap-2 border-y border-black/[0.08] py-4"
          >
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-3 py-2
                    font-body text-[10px]
                    uppercase tracking-[0.12em]
                    transition-all duration-300
                    ${
                      active
                        ? "bg-[var(--green)] text-white"
                        : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* =====================================================
              PROJECT GRID
          ===================================================== */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article
                key={project.number}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={index * 100}
                className="group"
              >
                {/* IMAGE */}

                <button
                  type="button"
                  onClick={() => openProject(project)}
                  className="block w-full cursor-pointer text-left"
                >
                  <div className="relative overflow-hidden bg-neutral-100">

                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="
                        block
                        aspect-[4/3]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />

                    {/* SUBTLE OVERLAY */}

                    <div
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-black/0
                        transition-colors
                        duration-500
                        group-hover:bg-black/[0.04]
                      "
                    />

                    {/* PROJECT NUMBER */}

                    <div
                      className="
                        absolute
                        left-3
                        top-3
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      <span
                        className={`${GeistMono.className} bg-white px-2 py-1 text-[9px] uppercase tracking-wider text-black`}
                      >
                        {project.number}
                      </span>
                    </div>
                  </div>
                </button>

                {/* WEBSITE TITLE */}

                {project.type === "website" && (
                  <div className="mt-3">
                    <h3 className="font-body text-sm font-medium tracking-tight text-black">
                      {project.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="h-px w-4 bg-[var(--green)]" />

                      <span
                        className={`${GeistMono.className} text-[9px] uppercase tracking-[0.12em] text-neutral-400`}
                      >
                        Web / UI/UX
                      </span>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* =====================================================
              EMPTY STATE
          ===================================================== */}

          {filteredProjects.length === 0 && (
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              className="py-20 text-center"
            >
              <p
                className={`${GeistMono.className} text-[10px] uppercase tracking-[0.15em] text-neutral-400`}
              >
                No projects found
              </p>
            </div>
          )}

          {/* =====================================================
              VIEW ALL PROJECTS
          ===================================================== */}

          {filteredProjects.length > 6 && (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="mt-14 flex justify-center"
            >
              <a
                href="/projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-black/[0.12]
                  px-5
                  py-3
                  font-body
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-black
                  transition-all
                  duration-300
                  hover:border-[var(--green)]
                  hover:bg-[var(--green)]
                  hover:text-white
                "
              >
                View All Projects

                <i
                  className="
                    ri-arrow-right-line
                    text-[15px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeProject();
            }
          }}
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-white"
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project"
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                bg-white
                text-black
                shadow-sm
                transition-colors
                hover:bg-black
                hover:text-white
              "
            >
              <i className="ri-close-line text-lg" />
            </button>

            {/* IMAGE */}

            <div className="bg-neutral-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1600}
                height={1200}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* INFO */}

            <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.3fr_0.7fr] lg:p-10">

              {/* MAIN */}

              <div>
                <div className="flex items-center gap-3">
                  <span
                    className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-[var(--green)]`}
                  >
                    {selectedProject.number}
                  </span>

                  <span className="h-px w-6 bg-neutral-200" />

                  <span
                    className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-neutral-400`}
                  >
                    {selectedProject.year}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-black sm:text-4xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500">
                  {selectedProject.description}
                </p>
              </div>

              {/* META */}

              <div className="border-t border-black/[0.08] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

                {/* ROLE */}

                <div>
                  <p
                    className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-neutral-400`}
                  >
                    Role
                  </p>

                  <p className="mt-2 text-sm text-black">
                    {selectedProject.role}
                  </p>
                </div>

                {/* CATEGORIES */}

                <div className="mt-7">
                  <p
                    className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-neutral-400`}
                  >
                    Categories
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.categories.map((category) => (
                      <span
                        key={category}
                        className="border border-black/[0.08] px-2.5 py-1.5 text-[9px] uppercase tracking-wider text-neutral-500"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TOOLS */}

                <div className="mt-7">
                  <p
                    className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-neutral-400`}
                  >
                    Tools
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs text-neutral-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}