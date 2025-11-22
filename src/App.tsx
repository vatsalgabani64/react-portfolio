import About from './components/About/About';
import Introduction from './components/Introduction/Introduction';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './components/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 lg:px-0 ">
        <Introduction />

        {/* <section id="about" className="min-h-screen">
          <h2 className="text-3xl font-semibold mb-6 text-text-light">
            01. About
          </h2>
        </section> */}
          <About/>
        <section id="experience" className="min-h-screen">
          <h2 className="text-3xl font-semibold mb-6 text-text-light">
            02. Experience
          </h2>
        </section>

        <section id="projects" className="min-h-screen">
          <h2 className="text-3xl font-semibold mb-6 text-text-light">
            03. Projects
          </h2>
        </section>

        <section id="contact" className="min-h-screen">
          <h2 className="text-3xl font-semibold mb-6 text-text-light">
            04. Contact
          </h2>
          <p className="text-lg text-text-light/70">
            Feel free to say hi — my inbox is always open.
          </p>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
