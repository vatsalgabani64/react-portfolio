import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Introduction from './components/Introduction/Introduction';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import { ThemeProvider } from './components/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 lg:px-0 ">
        <Introduction />

        <About/>

        <Experience />

        <Projects />

        <Contact />
      </main>
    </ThemeProvider>
  );
};

export default App;
