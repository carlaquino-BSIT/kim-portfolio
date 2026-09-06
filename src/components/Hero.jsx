import Image from "next/image";
import { GeistMono } from "geist/font/mono";

import profileImage from "@/assets/images/prof.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-auto overflow-hidden border-b border-black/[0.08] bg-white lg:h-[100svh]"
    >
      <div className="container-site mx-auto flex h-full max-w-7xl flex-col">
        {/* MAIN HERO */}

        <div className="grid flex-1 grid-cols-1 items-center gap-10 pt-28 pb-10 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20 lg:pb-8">
          {/* LEFT CONTENT */}

          <div className="relative z-10">
            {/* META */}

            <div
              data-aos="fade-down"
              data-aos-duration="700"
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[var(--green)] sm:w-10" />

              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
              >
                Graphic Artist / UI/UX Designer
              </span>
            </div>

            {/* TITLE */}

            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="mt-7 max-w-3xl font-display text-[clamp(3.6rem,7vw,7rem)] leading-[0.8] tracking-[-0.06em]"
            >
              Kimberly
              <br />
              <span className="italic text-[var(--green)]">
                Sinaguinan
              </span>
              <span className="text-black">.</span>
            </h1>

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="mt-7 max-w-lg font-body text-sm leading-6 text-neutral-600 sm:mt-8 sm:text-base sm:leading-7"
            >
              I believe creativity has no limits. As a Graphic Artist and
              UI/UX Designer, I turn ideas into bold visuals and user-focused
              designs that create meaningful and memorable digital experiences.
            </p>

            {/* ACTIONS */}

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7"
            >
              {/* DOWNLOAD CV */}

              <a
                href="/cv/CV-KIMBERLY C SINAGUINAN.pdf"
                download
                className="group inline-flex items-center gap-3 bg-[var(--green)] px-5 py-3 font-body text-xs font-medium text-white transition-colors duration-300 hover:bg-[var(--green-dark)]"
              >
                <i
                  className="ri-download-2-line text-sm"
                  aria-hidden="true"
                />

                Download CV
              </a>

              {/* SOCIAL / CONTACT ICONS */}

              <div className="flex items-center gap-2">
                {/* EMAIL */}

                <a
                  href="mailto:kimsinaguinan08@gmail.com"
                  aria-label="Email me"
                  className="group flex h-10 w-10 items-center justify-center border border-black/[0.12] text-black transition-all duration-300 hover:border-[var(--green)] hover:bg-[var(--green)] hover:text-white"
                >
                  <i
                    className="ri-mail-line text-base transition-transform duration-300 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://ph.linkedin.com/in/kimberly-sinaguinan-237668361"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center border border-black/[0.12] text-black transition-all duration-300 hover:border-[var(--green)] hover:bg-[var(--green)] hover:text-white"
                >
                  <i
                    className="ri-linkedin-line text-base transition-transform duration-300 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                {/* PHONE */}

                <a
                  href="tel:+639682226666"
                  aria-label="Call me"
                  className="group flex h-10 w-10 items-center justify-center border border-black/[0.12] text-black transition-all duration-300 hover:border-[var(--green)] hover:bg-[var(--green)] hover:text-white"
                >
                  <i
                    className="ri-phone-line text-base transition-transform duration-300 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            {/* GREEN CORNER */}

            <div className="absolute -right-4 -top-4 z-10 h-20 w-20 border-r border-t border-[var(--green)] sm:-right-5 sm:-top-5 sm:h-24 sm:w-24" />

            {/* IMAGE */}

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--surface)]">
              <Image
                src={profileImage}
                alt="Kimberly Sinaguinam"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM META */}

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="400"
          className="shrink-0 border-t border-black/[0.08] py-4"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span
              className={`${GeistMono.className} text-[8px] uppercase tracking-[0.18em] text-neutral-400 sm:text-[9px]`}
            >
              Based in the Philippines
            </span>

            <span
              className={`${GeistMono.className} text-[8px] uppercase tracking-[0.18em] text-neutral-400 sm:text-[9px]`}
            >
              Available for creative projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
