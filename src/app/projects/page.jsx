"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GeistMono } from "geist/font/mono";

import { categories, projects } from "@/data/projects";

// =====================================================
// PAGE
// =====================================================

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // =====================================================
  // FILTER
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
              {filteredProjects.map((project) => (
                <article
                  key={project.number}
                  className="group"
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

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

                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <div className="mt-3">
                    <h2 className="font-body text-sm font-medium tracking-tight text-black">
                      {project.title}
                    </h2>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="h-px w-4 bg-[var(--green)]" />

                      <span
                        className={`${GeistMono.className} text-[9px] uppercase tracking-[0.12em] text-neutral-400`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
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
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-white">

            {/* =================================================
                CLOSE
            ================================================= */}

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

            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="bg-neutral-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1600}
                height={1200}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* =================================================
                INFO
            ================================================= */}

            <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.3fr_0.7fr] lg:p-10">

              {/* =================================================
                  MAIN
              ================================================= */}

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

                {/* =================================================
                    WEBSITE
                ================================================= */}

                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-3 border border-black/[0.08] px-4 py-3 text-black transition-colors duration-300 hover:bg-black hover:text-white"
                  >
                    <span
                      className={`${GeistMono.className} text-[9px] uppercase tracking-[0.15em]`}
                    >
                      Visit Website
                    </span>

                    <i className="ri-arrow-right-up-line text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>

              {/* =================================================
                  META
              ================================================= */}

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

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
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