import Header from "@/app/components/header/Header";
import AboutMe from "@/app/components/about/About";
import Skills from "@/app/components/skills/Skills";
import Projects from "@/app/components/projects/Projects";
import Contact from "@/app/components/contact/Contact";

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
