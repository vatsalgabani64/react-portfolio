import { useState } from "react";
import { EXPERIENCE } from "../../constants/experience";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = EXPERIENCE[activeIndex];

  return (
    <section
      id="experience"
      className="min-h-screen px-4 lg:px-0 py-20 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-semibold mb-10">02. Experience</h2>

      <div className="grid lg:grid-cols-[180px_1fr] gap-10">
        {/* LEFT — Tabs */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2">
          {EXPERIENCE.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-left font-mono text-sm border-l-2 lg:border-l-2 transition 
                ${
                  index === activeIndex
                    ? ""
                    : "border-transparent text-foreground/60 hover:text-foreground"
                }
              `}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* RIGHT — Job Details */}
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {active.role}{" "}
            <span>
              @ {active.url ? (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {active.company}
                </a>
              ) : (
                active.company
              )}
            </span>
          </h3>

          <p className="text-sm mt-1 mb-4 text-foreground/60">
            {active.period}
          </p>

          <ul className="space-y-3">
            {active.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 text-foreground/70 leading-relaxed"
              >
                <span className="text-accent">▹</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
