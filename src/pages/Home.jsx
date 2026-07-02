import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <Blog />
    </>
  );
}
