import { Card, CardContent } from "@/components/ui/card";
import { ABOUT_INFO } from "../../constants/about";

const About = () => {
  const { description, tech } = ABOUT_INFO;

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-4 lg:px-0 py-20"
    >
      <h2 className="text-3xl font-semibold mb-10 text-text-light">
        01. About
      </h2>

      {/* Description */}
      <div className=" space-y-4 text-foreground/70 leading-relaxed text-base sm:text-lg">
        {description.split("\n").map((para, index) => (
          <p key={index}>- {para.trim()}</p>
        ))}
      </div>

      {/* Tech Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {tech.map((category) => (
          <Card
            key={category.title}
            className="border border-foreground/10 bg-card transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl"
          >
            <CardContent className="py-6">
              <p className="font-mono text-xl mb-6 text-center">
                {category.title}
              </p>

              <ul
                className={
                  category.items.length === 5
                    ? "grid grid-cols-2 gap-4"
                    : "grid grid-cols-2 gap-4"
                }
              >
                {category.items.map((item, index) => (
                  <li
                    key={item.name}
                    className={`flex items-center gap-3 text-sm text-foreground/80
                      ${
                        category.items.length === 5 &&
                        index === 4 &&
                        "col-span-2 flex justify-center"
                      }
                    `}
                  >
                    {/* Inverted Icon */}
                    <item.icon size={26} className="text-foreground" />

                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;
