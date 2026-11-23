import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Research from '../components/Research';
import AboutExperience from '../components/AboutExperience';
import Skills from '../components/Skills';
import StackBand from '../components/StackBand';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const container = 'mx-auto flex max-w-[1280px] flex-col gap-7 px-4 sm:px-6';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-7">
        <div className={container}>
          <Hero />
          <FeaturedWork />
          <Research />
          <AboutExperience />
          <Skills />
        </div>
        <StackBand />
        <div className={`${container} mb-7`}>
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
