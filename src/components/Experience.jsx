import { GeistMono } from "geist/font/mono";

const workExperience = [
  {
    number: "01",
    date: "May 2026 – Present",
    company: "RAMP-S CORP",
    role: "Marketing Officer",
    description:
      "My duties and responsibilities as a Marketing Officer include planning and implementing marketing strategies to promote the company's products, services, and events. I manage social media and website content, create marketing collaterals and promotional materials, conduct market research, coordinate campaigns and events, monitor marketing performance, and ensure consistent brand representation. I also collaborate with internal teams and external stakeholders to support the organization's marketing and business objectives.",
  },
  {
    number: "02",
    date: "October 2025 – April 2026",
    company: "THEMEWORKS",
    role: "Graphic Artist",
    description:
      "Designed and produced marketing and promotional materials for events, supported social media content, video production, photography, and ensured strong brand consistency across all outputs.",
  },
  {
    number: "03",
    date: "Aug – Sep 2025",
    company: "MN+LA Brand",
    role: "Graphic Designer",
    type: "Freelance",
    description:
      "Created branding, marketing, and promotional materials for digital and print platforms while maintaining consistent visual identity across campaigns.",
  },
  {
    number: "04",
    date: "Apr – Jun 2025",
    company: "La Lima Muebles",
    role: "UI/UX Designer",
    type: "Startup, San Francisco",
    description:
      "Designed user interfaces and wireframes for a furniture-focused platform, ensuring clean layouts, intuitive navigation, and strong brand alignment through close client collaboration.",
  },
  {
    number: "05",
    date: "Feb – May 2025",
    company: "University of Kratie Website Development",
    role: "Project Manager / UI/UX Designer",
    description:
      "Led website development for the University of Kratie, Cambodia, managing design direction, user experience, and project coordination.",
  },
];

const education = [
  {
    number: "01",
    date: "Class of 2025",
    title: "Bachelor of Science in Information Technology",
    institution:
      "Bulacan Agricultural State College, Pinaod, San Ildefonso, Bulacan",
    recognition: "With Academic Distinction & Leadership Awardee",
  },
  {
    number: "02",
    date: "2015 – 2021",
    title: "Secondary Education",
    institution:
      "San Miguel National High School, San Juan, San Miguel, Bulacan",
    recognition: "With Honors",
  },
  {
    number: "03",
    date: "2009 – 2015",
    title: "Primary Education",
    institution:
      "San Jose Elementary School, San Jose, San Miguel, Bulacan",
    recognition: "Completed",
  },
];

const leadership = [
  {
    number: "01",
    date: "2021 – 2023",
    title: "Class Officer – Mayor",
    organization: "Bulacan Agricultural State College",
    description:
      "Facilitated communication between students and faculty, and coordinated class involvement in school activities.",
  },
  {
    number: "02",
    date: "2023 – 2024",
    title: "Secretary / OIC President – BITS Organization",
    organization: "Bulacan Agricultural State College",
    description:
      "Managed internal documentation and led the organization during the transition period.",
  },
  {
    number: "03",
    date: "2024 – 2025",
    title: "President – BITS Organization",
    organization: "Bulacan Agricultural State College",
    description:
      "Oversaw officer coordination, planned IT-related events, managed social media branding, and designed digital content.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-black/[0.08] bg-white"
    >
      <div className="container-site mx-auto max-w-7xl py-20 sm:py-24 lg:py-32">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            {/* LEFT */}

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--green)] sm:w-10" />

              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
              >
                Experience
              </span>
            </div>

            <h2 className="mt-7 max-w-xl font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.82] tracking-[-0.06em]">
              Selected{" "}
              <span className="italic text-[var(--green)]">
                Experience.
              </span>
            </h2>
          </div>
        </div>

        {/* =====================================================
            WORK EXPERIENCE
        ===================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-32">
          {/* SECTION LABEL */}

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex items-end justify-between gap-6 border-b border-black/[0.08] pb-5"
          >
            <div>
              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
              >
                Professional
              </span>

              <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Work Experience
                <span className="text-[var(--green)]">.</span>
              </h3>
            </div>
          </div>

          {/* EXPERIENCE LIST */}

          <div>
            {workExperience.map((item, index) => (
              <ExperienceItem
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BACKGROUND HEADER
        ===================================================== */}

        <div className="mt-24 border-t border-black/[0.08] pt-20 sm:mt-32 sm:pt-24 lg:mt-40">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--green)] sm:w-10" />

                <span
                  className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
                >
                  Background
                </span>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.8] tracking-[-0.06em]">
                Education
                <span className="italic text-[var(--green)]">
                  {" "}
                  & leadership.
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-28">
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
                Academic
              </span>

              <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Education
                <span className="text-[var(--green)]">.</span>
              </h3>
            </div>
          </div>

          {/* EDUCATION LIST */}

          <div>
            {education.map((item, index) => (
              <EducationItem
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            LEADERSHIP
        ===================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-28">
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
                Leadership
              </span>

              <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Extracurricular
                <br className="sm:hidden" /> & Leadership
                <span className="text-[var(--green)]">.</span>
              </h3>
            </div>
          </div>

          {/* LEADERSHIP LIST */}

          <div>
            {leadership.map((item, index) => (
              <LeadershipItem
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   EXPERIENCE ITEM
===================================================== */

function ExperienceItem({ item, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={index * 100}
      className="group grid grid-cols-1 gap-6 border-b border-black/[0.08] py-8 sm:py-10 lg:grid-cols-[90px_180px_minmax(0,1fr)] lg:gap-8 lg:py-12"
    >
      {/* NUMBER */}

      <div className="flex items-start justify-between lg:block">
        <span
          className={`${GeistMono.className} text-[10px] tracking-[0.12em] text-neutral-300 transition-colors duration-300 group-hover:text-[var(--green)]`}
        >
          {item.number}
        </span>

        {/* MOBILE DATE */}

        <span
          className={`${GeistMono.className} text-[8px] uppercase tracking-[0.13em] text-neutral-400 sm:text-[9px] lg:hidden`}
        >
          {item.date}
        </span>
      </div>

      {/* DATE */}

      <div className="hidden lg:block">
        <span
          className={`${GeistMono.className} text-[9px] uppercase leading-5 tracking-[0.13em] text-neutral-400`}
        >
          {item.date}
        </span>
      </div>

      {/* CONTENT */}

      <div>
        {/* ROLE */}

        <h4 className="max-w-3xl font-display text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.92] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[var(--green)]">
          {item.role}
        </h4>

        {/* COMPANY */}

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-body text-sm text-neutral-800">
            {item.company}
          </span>

          {item.type && (
            <>
              <span className="h-1 w-1 bg-neutral-300" />

              <span
                className={`${GeistMono.className} text-[8px] uppercase tracking-[0.14em] text-neutral-400`}
              >
                {item.type}
              </span>
            </>
          )}
        </div>

        {/* DESCRIPTION */}

        <p className="mt-5 max-w-3xl font-body text-[13px] leading-[1.8] tracking-[-0.003em] text-neutral-500 sm:text-[14px] sm:leading-[1.85]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

/* =====================================================
   EDUCATION ITEM
===================================================== */

function EducationItem({ item, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={index * 100}
      className="group grid grid-cols-1 gap-6 border-b border-black/[0.08] py-8 sm:py-10 lg:grid-cols-[90px_180px_minmax(0,1fr)] lg:gap-8 lg:py-12"
    >
      {/* NUMBER */}

      <div className="flex items-start justify-between lg:block">
        <span
          className={`${GeistMono.className} text-[10px] tracking-[0.12em] text-neutral-300 transition-colors duration-300 group-hover:text-[var(--green)]`}
        >
          {item.number}
        </span>

        {/* MOBILE DATE */}

        <span
          className={`${GeistMono.className} text-[8px] uppercase tracking-[0.13em] text-neutral-400 sm:text-[9px] lg:hidden`}
        >
          {item.date}
        </span>
      </div>

      {/* DATE */}

      <div className="hidden lg:block">
        <span
          className={`${GeistMono.className} text-[9px] uppercase leading-5 tracking-[0.13em] text-neutral-400`}
        >
          {item.date}
        </span>
      </div>

      {/* CONTENT */}

      <div>
        {/* DEGREE */}

        <h4 className="max-w-3xl font-display text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.92] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[var(--green)]">
          {item.title}
        </h4>

        {/* SCHOOL */}

        <p className="mt-4 max-w-2xl font-body text-sm leading-6 text-neutral-800">
          {item.institution}
        </p>

        {/* RECOGNITION */}

        <div className="mt-4 flex items-center gap-3">
          <span className="h-px w-5 bg-[var(--green)]" />

          <span
            className={`${GeistMono.className} text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[9px]`}
          >
            {item.recognition}
          </span>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   LEADERSHIP ITEM
===================================================== */

function LeadershipItem({ item, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={index * 100}
      className="group grid grid-cols-1 gap-6 border-b border-black/[0.08] py-8 sm:py-10 lg:grid-cols-[90px_180px_minmax(0,1fr)] lg:gap-8 lg:py-12"
    >
      {/* NUMBER */}

      <div className="flex items-start justify-between lg:block">
        <span
          className={`${GeistMono.className} text-[10px] tracking-[0.12em] text-neutral-300 transition-colors duration-300 group-hover:text-[var(--green)]`}
        >
          {item.number}
        </span>

        {/* MOBILE DATE */}

        <span
          className={`${GeistMono.className} text-[8px] uppercase tracking-[0.13em] text-neutral-400 sm:text-[9px] lg:hidden`}
        >
          {item.date}
        </span>
      </div>

      {/* DATE */}

      <div className="hidden lg:block">
        <span
          className={`${GeistMono.className} text-[9px] uppercase leading-5 tracking-[0.13em] text-neutral-400`}
        >
          {item.date}
        </span>
      </div>

      {/* CONTENT */}

      <div>
        {/* POSITION */}

        <h4 className="max-w-3xl font-display text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.92] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[var(--green)]">
          {item.title}
        </h4>

        {/* ORGANIZATION */}

        <p className="mt-4 font-body text-sm text-neutral-800">
          {item.organization}
        </p>

        {/* DESCRIPTION */}

        <p className="mt-5 max-w-3xl font-body text-[13px] leading-[1.8] tracking-[-0.003em] text-neutral-500 sm:text-[14px] sm:leading-[1.85]">
          {item.description}
        </p>
      </div>
    </article>
  );
}