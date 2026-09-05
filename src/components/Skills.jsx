"use client";

import Image from "next/image";

import { GeistMono } from "geist/font/mono";

// =====================================================
// LOGOS
// =====================================================

import figmaLogo from "@/assets/images/logo/figma.png";
import canvaLogo from "@/assets/images/logo/canva.svg";
import wixStudioLogo from "@/assets/images/logo/wix-light.svg";

import photoshopLogo from "@/assets/images/logo/adobe-photoshop.png";
import illustratorLogo from "@/assets/images/logo/adobe-illustrator.png";

import htmlLogo from "@/assets/images/logo/html.png";
import cssLogo from "@/assets/images/logo/css.png";
import bootstrapLogo from "@/assets/images/logo/bootstrap.png";
import javascriptLogo from "@/assets/images/logo/javascript-light.png";
import phpLogo from "@/assets/images/logo/php.svg";
import mysqlLogo from "@/assets/images/logo/mysql.svg";

import microsoftOfficeLogo from "@/assets/images/logo/microsoft-office.png";
import googleWorkspaceLogo from "@/assets/images/logo/google-workspace.webp";

import githubLogo from "@/assets/images/logo/github.png";
import virtualBoxLogo from "@/assets/images/logo/virtualbox.png";

// =====================================================
// TECHNICAL SKILLS
// =====================================================

const technicalSkills = [
  {
    title: "UI/UX Tools",
    items: [
      {
        name: "Figma",
        logo: figmaLogo,
      },
      {
        name: "Canva",
        logo: canvaLogo,
      },
      {
        name: "Wix Studio",
        logo: wixStudioLogo,
      },
    ],
  },

  {
    title: "Graphic Design",
    items: [
      {
        name: "Adobe Photoshop",
        logo: photoshopLogo,
      },
      {
        name: "Illustrator",
        logo: illustratorLogo,
      },
      {
        name: "Canva",
        logo: canvaLogo,
      },
    ],
  },

  {
    title: "Web Development",
    items: [
      {
        name: "HTML",
        logo: htmlLogo,
      },
      {
        name: "CSS",
        logo: cssLogo,
      },
      {
        name: "Bootstrap",
        logo: bootstrapLogo,
      },
      {
        name: "JavaScript",
        logo: javascriptLogo,
      },
      {
        name: "PHP",
        logo: phpLogo,
      },
      {
        name: "MySQL",
        logo: mysqlLogo,
      },
    ],
  },

  {
    title: "Project Tools",
    items: [
      {
        name: "Microsoft Office",
        logo: microsoftOfficeLogo,
      },
      {
        name: "Google Workspace",
        logo: googleWorkspaceLogo,
      },
    ],
  },

  {
    title: "Version Control",
    items: [
      {
        name: "GitHub",
        logo: githubLogo,
        note: "Basic",
      },
    ],
  },

  {
    title: "Virtualization",
    items: [
      {
        name: "VirtualBox",
        logo: virtualBoxLogo,
        note: "Basic",
      },
    ],
  },
];

// =====================================================
// UX PROCESS
// =====================================================

const uxProcess = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
];

// =====================================================
// SOFT SKILLS
// =====================================================

const softSkills = [
  "Creative Thinking",
  "Adaptability",
  "Leadership",
  "Team Management",
  "Collaboration",
  "Problem Solving",
  "Communication",
  "Organization",
  "Time Management",
];

// =====================================================
// COMPONENT
// =====================================================

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-black/[0.08] bg-white"
    >
      <div className="container-site mx-auto max-w-7xl py-20 sm:py-24 lg:py-32">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--green)] sm:w-10" />

              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
              >
                Skills
              </span>
            </div>

            <h2 className="mt-7 max-w-xl font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.78] tracking-[-0.06em]">
              Technical
              <br />
              <span className="italic text-[var(--green)]">
                & design.
              </span>
            </h2>
          </div>
        </div>

        {/* =====================================================
            TECHNICAL SKILLS
        ===================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-32">

          {/* HEADER */}

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex items-end justify-between gap-6 border-b border-black/[0.08] pb-5"
          >
            <div>
              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
              >
                Technical
              </span>

              <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Technical Skills
                <span className="text-[var(--green)]">.</span>
              </h3>
            </div>

            <span
              className={`${GeistMono.className} hidden text-[9px] uppercase tracking-[0.15em] text-neutral-400 sm:block`}
            >
              Tools & Technologies
            </span>
          </div>

          {/* CATEGORIES */}

          <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16">
            {technicalSkills.map((category, index) => (
              <SkillCategory
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            UX PROCESS
        ===================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-32">

          {/* HEADER */}

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex items-end justify-between gap-6 border-b border-black/[0.08] pb-5"
          >
            <div>
              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
              >
                Process
              </span>

              <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                UX Process
                <span className="text-[var(--green)]">.</span>
              </h3>
            </div>
          </div>

          {/* PROCESS GRID */}

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="mt-8 grid grid-cols-2 border-l border-t border-black/[0.08] sm:grid-cols-4"
          >
            {uxProcess.map((skill, index) => (
              <div
                key={skill}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
                className="group flex min-h-[120px] flex-col justify-between border-b border-r border-black/[0.08] p-5 transition-colors duration-300 hover:bg-[var(--green-light)] sm:min-h-[150px] sm:p-6 lg:p-7"
              >
                <span
                  className={`${GeistMono.className} text-[9px] text-neutral-300 transition-colors duration-300 group-hover:text-[var(--green)]`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-body text-[13px] text-neutral-700 sm:text-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SOFT SKILLS
        ===================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-32">

          {/* HEADER */}

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex items-end justify-between gap-6 border-b border-black/[0.08] pb-5"
          >
            <div>
              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
              >
                Personal
              </span>

              <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Soft Skills
                <span className="text-[var(--green)]">.</span>
              </h3>
            </div>
          </div>

          {/* SOFT SKILLS GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill, index) => (
              <div
                key={skill}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 70}
                className="group flex items-center gap-5 border-b border-black/[0.08] py-5 sm:py-6 lg:px-5 lg:py-7"
              >
                <span
                  className={`${GeistMono.className} text-[9px] text-neutral-300 transition-colors duration-300 group-hover:text-[var(--green)]`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-body text-sm text-neutral-700 transition-colors duration-300 group-hover:text-black sm:text-[15px]">
                  {skill}
                </span>

                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-neutral-200 transition-colors duration-300 group-hover:bg-[var(--green)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// SKILL CATEGORY
// =====================================================

function SkillCategory({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={index * 100}
    >
      {/* CATEGORY TITLE */}

      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <span
          className={`${GeistMono.className} text-[9px] tracking-[0.15em] text-neutral-300`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="h-px w-5 bg-black/[0.08]" />

        <h4
          className={`${GeistMono.className} text-[9px] uppercase tracking-[0.16em] text-neutral-500 sm:text-[10px]`}
        >
          {category.title}
        </h4>
      </div>

      {/* SKILL GRID */}

      <div className="grid grid-cols-2 border-l border-t border-black/[0.08] sm:grid-cols-3 lg:grid-cols-5">
        {category.items.map((item, itemIndex) => (
          <SkillCard
            key={`${category.title}-${item.name}`}
            item={item}
            index={itemIndex}
          />
        ))}
      </div>
    </div>
  );
}

// =====================================================
// SKILL CARD
// =====================================================

function SkillCard({ item, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 80}
      className="group flex min-h-[140px] flex-col items-center justify-between border-b border-r border-black/[0.08] p-5 transition-colors duration-300 hover:bg-[var(--green-light)] sm:min-h-[160px] sm:p-6"
    >
      {/* ICON */}

      <div className="flex h-10 w-10 items-center justify-center">
        <Image
          src={item.logo}
          alt={`${item.name} logo`}
          width={28}
          height={28}
          className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* NAME */}

      <div className="text-center">
        <span
          className={`${GeistMono.className} text-[8px] uppercase tracking-[0.08em] text-neutral-500 transition-colors duration-300 group-hover:text-[var(--green)]`}
        >
          {item.name}
        </span>

        {item.note && (
          <span
            className={`${GeistMono.className} mt-1 block text-[7px] uppercase tracking-[0.08em] text-neutral-300`}
          >
            {item.note}
          </span>
        )}
      </div>
    </div>
  );
}