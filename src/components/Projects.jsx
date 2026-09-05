"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { GeistMono } from "geist/font/mono";

// =====================================================
// DATA
// =====================================================

import projectsData from "../../content/projects.json";

const projects = projectsData.projects || [];

// =====================================================
// COMPONENT
// =====================================================

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // =====================================================
  // CATEGORIES
  // Automatically generated from projects.json
  // =====================================================

  const categories = useMemo(() => {
    const allCategories = projects.flatMap(
      (project) => project.categories || []
    );

    return ["All", ...new Set(allCategories)];
  }, []);

  // =====================================================
  // FILTER PROJECTS
  // =====================================================

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories?.includes(activeCategory)
    );
  }, [activeCategory]);

  // =====================================================
  // LIMIT HOMEPAGE PROJECTS
  // =====================================================

  const visibleProjects = filteredProjects.slice(0, 6);

  // =====================================================
  // OPEN MODAL
  // Only for projects without a URL
  // =====================================================

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

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
            {visibleProjects.map((project, index) => {
              const isWebsite = Boolean(project.url);
              const hasImage = Boolean(project.image);

              return (
                <article
                  key={`${project.title}-${index}`}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={index * 100}
                  className="group"
                >
                  {/* =================================================
                      WEBSITE PROJECT
                  ================================================= */}

                  {isWebsite ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full cursor-pointer text-left"
                    >
                      <div className="relative overflow-hidden bg-neutral-100">
                        {hasImage ? (
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
                        ) : (
                          <div className="flex aspect-[4/3] w-full items-center justify-center bg-neutral-100">
                            <span
                              className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-neutral-400`}
                            >
                              No Image
                            </span>
                          </div>
                        )}

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
                      </div>
                    </a>
                  ) : (
                    // =================================================
                    // IMAGE-ONLY PROJECT
                    // =================================================

                    <button
                      type="button"
                      onClick={() => {
                        if (hasImage) {
                          openProject(project);
                        }
                      }}
                      className="block w-full cursor-pointer text-left"
                      disabled={!hasImage}
                    >
                      <div className="relative overflow-hidden bg-neutral-100">
                        {hasImage ? (
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
                        ) : (
                          <div className="flex aspect-[4/3] w-full items-center justify-center bg-neutral-100">
                            <span
                              className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-neutral-400`}
                            >
                              No Image
                            </span>
                          </div>
                        )}

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
                      </div>
                    </button>
                  )}

                  {/* =================================================
                      PROJECT INFO
                      ONLY FOR WEBSITE PROJECTS
                  ================================================= */}

                  {isWebsite && (
                    <div className="mt-3">
                      <h3 className="font-body text-sm font-medium tracking-tight text-black">
                        {project.title}
                      </h3>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="h-px w-4 bg-[var(--green)]" />

                        <span
                          className={`${GeistMono.className} text-[9px] uppercase tracking-[0.12em] text-neutral-400`}
                        >
                          {project.categories?.join(" / ")}
                        </span>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
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
          IMAGE ONLY
          CLOSE BUTTON ONLY
      ===================================================== */}

      {selectedProject && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-black/70
            p-4
            backdrop-blur-sm
            sm:p-6
          "
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            className="
              relative
              flex
              max-h-[92vh]
              max-w-5xl
              items-center
              justify-center
            "
          >
            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project"
              className="
                absolute
                right-3
                top-3
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

            {/* =================================================
                IMAGE
                No scroll
            ================================================= */}

            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={1600}
              height={1200}
              className="
                block
                max-h-[92vh]
                max-w-full
                object-contain
              "
            />
          </div>
        </div>
      )}
    </>
  );
}