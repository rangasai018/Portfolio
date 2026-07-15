import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSection from './components/EducationSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import BackToTop from './components/BackToTop';
import { navLinks } from './data/portfolio';
import { useActiveSection } from './hooks/usePortfolioEffects';

function App() {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  return (
    <>
      <SocialSidebar />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <EducationSection />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
