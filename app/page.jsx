import Header from "@/components/header/Header";
import AboutMe from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
