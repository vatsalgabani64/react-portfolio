import { PERSONAL_INFO } from "../../constants/introduction";

const Introduction = () => {
  const { intro, name, profileImage, resume, social } = PERSONAL_INFO;

  return (
    <section
      id="introduction"
      className="min-h-screen flex flex-col justify-center px-4 mt-0 lg:px-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center">
        
        {/* 1/4 — Profile Picture */}
        <div className="flex lg:col-span-1 justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 sm:w-52 sm:h-52 lg:w-62 lg:h-62 rounded-full object-cover border border-foreground/20 shadow-md"
          />
        </div>
        <div className="lg:col-span-3">
          
          {/* Intro line */}
          <p className="font-mono text-sm text-foreground/60">{intro.line1}</p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {name}.
          </h1>

          {/* Subheading */}
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground/70 leading-tight mb-6">
            {intro.headline}
          </h2>

          {/* Description */}
          <p className="max-w-4xl text-foreground/70 text-base sm:text- leading-relaxed">
            {intro.description}
          </p>

          {/* Resume + Social Icons */}
          <div className="flex items-center gap-6 mt-6">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-6 py-3 border border-foreground/20 rounded-md text-sm text-foreground hover:bg-foreground/10 transition"
            >
              Checkout my Resume →
            </a>

            {
              social.map((item)=>(
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition"
                >
                  <item.icon size={22}/>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
