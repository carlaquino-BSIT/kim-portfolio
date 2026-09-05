"use client";

import { GeistMono } from "geist/font/mono";

const contactLinks = [
  {
    label: "Email",
    value: "kimsinaguinan08@gmail.com",
    href: "mailto:kimsinaguinan08@gmail.com",
    icon: "ri-mail-line",
  },
  {
    label: "LinkedIn",
    value: "Kimberly Sinaguinan",
    href: "https://ph.linkedin.com/in/kimberly-sinaguinan-237668361",
    icon: "ri-linkedin-line",
  },
  {
    label: "Contact",
    value: "+63 968 222 6666",
    href: "tel:+639682226666",
    icon: "ri-phone-line",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-black/[0.08] bg-white"
    >
      <div className="container-site mx-auto max-w-7xl py-16 sm:py-20 lg:py-24">

        {/* =====================================================
            MAIN CTA
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <a
            href="mailto:kimsinaguinan08@gmail.com"
            className="group relative flex min-h-[150px] items-center justify-between overflow-hidden border border-black/[0.08] bg-[var(--green)] px-6 py-7 transition-colors duration-300 hover:bg-[var(--green-dark)] sm:min-h-[180px] sm:px-9 sm:py-8 lg:min-h-[200px] lg:px-12"
          >
            {/* BACKGROUND DECORATION */}

            <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-150" />

            <span className="pointer-events-none absolute -bottom-16 right-20 h-48 w-48 rounded-full border border-white/[0.06] transition-transform duration-700 group-hover:scale-125" />

            {/* TEXT */}

            <div className="relative z-10">
              <span
                className={`${GeistMono.className} text-[8px] uppercase tracking-[0.18em] text-white/60 sm:text-[9px]`}
              >
                Start a conversation
              </span>

              <h3 className="mt-3 font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.85] tracking-[-0.055em] text-white sm:mt-4">
                Get in touch
                <span className="text-white/50">.</span>
              </h3>
            </div>

            {/* ARROW */}

            <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white sm:h-14 sm:w-14 lg:h-16 lg:w-16">
              <i
                className="ri-arrow-right-up-line text-lg text-white transition-colors duration-300 group-hover:text-[var(--green)] sm:text-xl lg:text-2xl"
                aria-hidden="true"
              />
            </div>
          </a>
        </div>

        {/* =====================================================
            CONTACT LINKS
        ===================================================== */}

        <div
          className="mt-10 sm:mt-12 lg:mt-14"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          {/* SECTION LABEL */}

          <div className="mb-5 flex items-center justify-between border-b border-black/[0.08] pb-4">
            <span
              className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
            >
              Contact Details
            </span>

            <span
              className={`${GeistMono.className} hidden text-[8px] uppercase tracking-[0.14em] text-neutral-300 sm:block sm:text-[9px]`}
            >
              Available for opportunities
            </span>
          </div>

          {/* CONTACT GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-3">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                data-aos-duration="700"
                className={`group flex items-center gap-4 border-b border-black/[0.08] py-5 transition-colors duration-300 hover:bg-[var(--green-light)] sm:px-5 sm:py-6 ${
                  index !== 0 ? "sm:border-l" : ""
                }`}
              >
                {/* ICON */}

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] transition-all duration-300 group-hover:border-[var(--green)] group-hover:bg-[var(--green)]">
                  <i
                    className={`${link.icon} text-base text-neutral-400 transition-colors duration-300 group-hover:text-white`}
                    aria-hidden="true"
                  />
                </div>

                {/* TEXT */}

                <div className="min-w-0">
                  <span
                    className={`${GeistMono.className} block text-[8px] uppercase tracking-[0.15em] text-neutral-400`}
                  >
                    {link.label}
                  </span>

                  <span className="mt-1 block truncate font-body text-[12px] text-neutral-700 transition-colors duration-300 group-hover:text-[var(--green)] sm:text-[13px]">
                    {link.value}
                  </span>
                </div>

                {/* ARROW */}

                <i
                  className="ri-arrow-right-up-line ml-auto text-sm text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--green)]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}