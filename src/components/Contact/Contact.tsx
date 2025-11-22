import { PERSONAL_INFO } from "@/constants/introduction";

const Contact = () => {
  const { mailId } = PERSONAL_INFO;
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-6 text-text-light">
        04. Contact
      </h2>

      {/* Heading */}
      <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
        Let's Build Something Together.
      </h3>

      {/* Description */}
      <p className="max-w-xl text-foreground/70 text-base sm:text-lg leading-relaxed mb-10">
         I'm actively exploring opportunities in full-stack development, frontend engineering, and AI-integrated products.
        <br />
        <br />
        Whether you have a question, a project idea, or just want to connect, my
        inbox is always open.
      </p>

      {/* Email Button */}
      <a
        href={`mailto:${mailId}`}
        className="inline-block px-8 py-4 border border-foreground/20 rounded-md text-sm text-foreground hover:bg-foreground/10 transition"
      >
        Say Hello →
      </a>
    </section>
  );
};

export default Contact;
