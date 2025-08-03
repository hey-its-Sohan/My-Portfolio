import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects";
import Qualification from "./Components/Qualification";
import Skills from "./Components/Skills";


function App() {
  return (
    <>

      <div className="min-h-screen w-full relative bg-white overflow-hidden">
        {/* Cool Blue Glow Top */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "#ffffff",
            backgroundImage: `
              radial-gradient(
                circle at top center,
                rgba(70, 130, 180, 0.5),
                transparent 70%
              )
            `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Your Content/Components with z-10 */}
        <div className="relative z-10 scroll-smooth">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App
