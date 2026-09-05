"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Experience",
    target: "experience",
  },
  {
    label: "Skills",
    target: "skills",
  },
  {
    label: "Projects",
    target: "projects",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // =====================================================
  // ACTIVE SECTION
  // =====================================================

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.target))
      .filter(Boolean);

    const contactSection = document.getElementById("contact");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // ===================================================
    // CONTACT SECTION
    // No navigation item should be active here
    // ===================================================

    let contactObserver;

    if (contactSection) {
      contactObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (entry.isIntersecting) {
            setActiveSection(null);
          }
        },
        {
          root: null,
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        }
      );

      contactObserver.observe(contactSection);
    }

    // ===================================================
    // KEEP HOME ACTIVE AT THE VERY TOP
    // ===================================================

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      contactObserver?.disconnect();

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // SCROLL TO SECTION
  // =====================================================

  const scrollToSection = (target) => {
    const section = document.getElementById(target);

    if (!section) return;

    setActiveSection(target);
    setMenuOpen(false);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.08] bg-white/90 backdrop-blur-xl">
      <div className="container-site mx-auto max-w-7xl">
        <nav className="flex h-15 items-center justify-between">
          {/* =================================================
              LOGO
          ================================================= */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
            aria-label="Go to home"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-[var(--green)] text-sm font-semibold text-white transition-transform duration-300 group-hover:rotate-[-4deg]">
              K
            </span>

            <span className="font-body text-sm font-medium tracking-[-0.02em]">
              Kimberly
            </span>
          </button>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.target;

              return (
                <button
                  key={item.target}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.target)
                  }
                  className={`group relative px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                    active
                      ? "text-[var(--green)]"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px origin-left bg-[var(--green)] transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden items-center gap-2 bg-[var(--green)] px-4 py-2.5 font-body text-xs font-medium text-white transition-all duration-300 hover:bg-[var(--green-dark)] md:flex"
          >
             Get In Touch

            <i
              className="ri-arrow-right-up-line text-sm"
              aria-hidden="true"
            />
          </button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center border border-black/[0.08] text-lg text-black transition-colors hover:border-[var(--green)] hover:text-[var(--green)] md:hidden"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            <i
              className={
                menuOpen
                  ? "ri-close-line"
                  : "ri-menu-4-line"
              }
              aria-hidden="true"
            />
          </button>
        </nav>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`overflow-hidden border-t border-black/[0.08] bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="container-site mx-auto max-w-7xl py-4">
          <div className="flex flex-col">
            {navItems.map((item) => {
              const active =
                activeSection === item.target;

              return (
                <button
                  key={item.target}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.target)
                  }
                  className={`flex items-center justify-between border-b border-black/[0.06] py-4 text-left transition-colors ${
                    active
                      ? "text-[var(--green)]"
                      : "text-neutral-600 hover:text-black"
                  }`}
                >
                  <span className="font-body text-sm font-medium">
                    {item.label}
                  </span>

                  <i
                    className={`ri-arrow-right-line text-sm transition-transform duration-300 ${
                      active
                        ? "translate-x-0.5"
                        : "text-neutral-300"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}

            {/* =================================================
                MOBILE CTA
            ================================================= */}

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-4 flex items-center justify-center gap-2 bg-[var(--green)] px-4 py-3 font-body text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--green-dark)]"
            >
              Get In Touch

              <i
                className="ri-arrow-right-up-line"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}