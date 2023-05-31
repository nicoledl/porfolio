import Header from "@/components/header/Header";
import AboutMe from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Proyects from "@/components/proyects/Proyects";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
}
