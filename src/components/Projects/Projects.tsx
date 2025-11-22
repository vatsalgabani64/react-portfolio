import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS } from "../../constants/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-4 lg:px-0 py-20"
    >
      <h2 className="text-3xl font-semibold mb-10 text-text-light">
        03. Projects
      </h2>

      <div className="grid sm:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <Card
            key={project.title}
            className="h-full flex flex-col border border-foreground/10 bg-background/40 backdrop-blur-md"
          >
            <CardContent className="p-6 flex flex-col grow space-y-4">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-contain rounded-md border border-foreground/10 bg-background/20"
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/70 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs font-mono px-2 py-1 bg-foreground/10 rounded-md text-foreground/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="mt-auto flex gap-6 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
