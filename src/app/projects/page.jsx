"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GeistMono } from "geist/font/mono";

// =====================================================
// DATA
// =====================================================

import projectsData from "../../../content/projects.json";

const projects = projectsData.projects || [];

// =====================================================
// PAGE
// =====================================================

export default function ProjectsPage() {
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
  // FILTER
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
  // OPEN MODAL
  // Only for image-only projects
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
          PROJECTS PAGE
      ===================================================== */}

      <main className="min-h-screen bg-white">
        <section>
          <div className="container-site mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">

            {/* =================================================
                BACK
            ================================================= */}

            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-neutral-500 transition-colors duration-300 hover:text-black"
            >
              <i className="ri-arrow-left-line text-base transition-transform duration-300 group-hover:-translate-x-1" />

              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em]`}
              >
                Back
              </span>
            </Link>

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="mt-14 border-b border-black/[0.08] pb-12 sm:mt-16 sm:pb-14 lg:mt-20 lg:pb-16">
              <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.8rem,8vw,8rem)] leading-[0.78] tracking-[-0.06em]">
                All
                <br />
                <span className="italic text-[var(--green)]">
                  projects.
                </span>
              </h1>
            </div>

            {/* =================================================
                FILTERS
            ================================================= */}

            <div className="flex flex-wrap gap-2 border-b border-black/[0.08] py-4">
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

            {/* =================================================
                PROJECT COUNT
            ================================================= */}

            <div className="flex items-center justify-between py-5">
              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-neutral-400`}
              >
                Showing {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "Project" : "Projects"}
              </span>

              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em] text-neutral-400`}
              >
                {activeCategory}
              </span>
            </div>

            {/* =================================================
                PROJECT GRID
            ================================================= */}

            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => {
                const isWebsite = Boolean(project.url);
                const hasImage = Boolean(project.image);

                return (
                  <article
                    key={`${project.title}-${index}`}
                    className="group"
                  >
                    {/* =================================================
                        WEBSITE PROJECT
                        Opens website in new tab
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

                          {/* OVERLAY */}

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
                      // Opens image modal
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

                          {/* OVERLAY */}

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
                        <h2 className="font-body text-sm font-medium tracking-tight text-black">
                          {project.title}
                        </h2>

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

            {/* =================================================
                EMPTY STATE
            ================================================= */}

            {filteredProjects.length === 0 && (
              <div className="py-24 text-center">
                <p
                  className={`${GeistMono.className} text-[10px] uppercase tracking-[0.15em] text-neutral-400`}
                >
                  No projects found
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

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