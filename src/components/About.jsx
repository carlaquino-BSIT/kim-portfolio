import { GeistMono } from "geist/font/mono";

const credentials = [
  {
    number: "01",
    label: "Education",
    title: "BSIT",
    description: "Bulacan Agricultural State College",
  },
  {
    number: "02",
    label: "Recognition",
    title: "Academic Distinction",
    description: "Recognized for academic achievement",
  },
  {
    number: "03",
    label: "Award",
    title: "Presidential Service Award",
    description: "Recognized for service and contribution",
  },
];

const services = [
  {
    number: "01",
    title: "Graphic Design",
  },
  {
    number: "02",
    title: "UI / UX Design",
  },
  {
    number: "03",
    title: "Brand Identity",
  },
  {
    number: "04",
    title: "Project Management",
  },
  {
    number: "05",
    title: "Video Production",
  },
  {
    number: "06",
    title: "Photography",
  },
  {
    number: "07",
    title: "Web Design",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-black/[0.08] bg-white"
    >
      <div className="container-site mx-auto max-w-7xl py-20 sm:py-24 lg:py-32">
        {/* =====================================================
            SECTION HEADER + BIO
        ===================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* =====================================================
              LEFT — SECTION TITLE
          ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--green)] sm:w-10" />

              <span
                className={`${GeistMono.className} text-[9px] uppercase tracking-[0.18em] text-[var(--green)] sm:text-[10px]`}
              >
                About
              </span>
            </div>

            <h2 className="mt-7 max-w-xl font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.78] tracking-[-0.06em]">
              Designing
              <br />
              with{" "}
              <span className="italic text-[var(--green)]">
                purpose.
              </span>
            </h2>
          </div>

          {/* =====================================================
              RIGHT — FULL BIO
          ===================================================== */}

          <div className="flex items-end">
            <div className="max-w-[680px]">
              {/* BIO 01 */}

              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="font-body text-[14px] leading-[1.8] tracking-[-0.005em] text-neutral-500 sm:text-[15px] sm:leading-[1.85]"
              >
                I am a Graphic Artist and UI/UX Designer with a Bachelor of
                Science in Information Technology from Bulacan Agricultural
                State College, recognized with Academic Distinction and the
                Presidential Service Award.
              </p>

              {/* BIO 02 */}

              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="150"
                className="mt-6 font-body text-[14px] leading-[1.8] tracking-[-0.005em] text-neutral-500 sm:text-[15px] sm:leading-[1.85]"
              >
                I have experience as a Project Manager and UI/UX Designer for
                the University of Kratie Website Development in Cambodia, and I
                have led projects such as TimbangApp and SIBOL Website.
              </p>

              {/* BIO 03 */}

              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="200"
                className="mt-6 font-body text-[14px] leading-[1.8] tracking-[-0.005em] text-neutral-500 sm:text-[15px] sm:leading-[1.85]"
              >
                I also worked as a UI/UX Designer for La Lima Muebles and as a
                Freelance Graphic Designer for the MN+LA brand, creating
                branding and marketing materials.
              </p>

              {/* BIO 04 */}

              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="250"
                className="mt-6 font-body text-[14px] leading-[1.8] tracking-[-0.005em] text-neutral-500 sm:text-[15px] sm:leading-[1.85]"
              >
                Additionally, I served as a Graphic Artist for an event
                organizing team affiliated with government and military
                sectors, handling social media content, video production,
                photography, and website management.
              </p>

              {/* BIO 05 */}

              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="300"
                className="mt-7 border-l border-[var(--green)] pl-5 font-body text-[14px] italic leading-[1.8] tracking-[-0.005em] text-neutral-600 sm:text-[15px] sm:leading-[1.85]"
              >
                These experiences strengthened my ability to combine creativity
                and functionality while delivering visually compelling and
                effective designs.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CREDENTIALS
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="mt-20 border-y border-black/[0.08] sm:mt-24"
        >
          <div className="grid grid-cols-1 divide-y divide-black/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {credentials.map((item, index) => (
              <div
                key={item.number}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={100 + index * 100}
                className="group relative px-0 py-7 sm:px-6 sm:py-8 lg:px-8"
              >
                {/* TOP META */}

                <div className="flex items-center justify-between">
                  <span
                    className={`${GeistMono.className} text-[9px] uppercase tracking-[0.16em] text-neutral-400`}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`${GeistMono.className} text-[8px] uppercase tracking-[0.14em] text-[var(--green)]`}
                  >
                    {item.label}
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="mt-8 font-display text-3xl leading-none tracking-[-0.035em] sm:text-4xl">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-4 max-w-xs font-body text-xs leading-5 text-neutral-500">
                  {item.description}
                </p>

                {/* HOVER LINE */}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--green)] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}