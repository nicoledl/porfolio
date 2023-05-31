"use client";
import styles from "./Navigation.module.css";
import { montserrat } from "../../app/fonts";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const titles = [
  { label: "About Me", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Proyects", to: "proyects" },
  { label: "Contact", to: "contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? styles.navigationScrolled : styles.navigation}>
      <div className="flex justify-center sm:grid sm:grid-cols-2 gap-4 ml-0 align-middle">
        <div className="hidden sm:flex border-r-2 border-black">
          <Marquee loop={0} autoFill={true}>
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
            <span>apis</span>
            <span>react</span>
            <span>boostrap</span>
            <span>node.js</span>
            <span>express</span>
            <span>mysql</span>
          </Marquee>
        </div>
        <ul className="flex justify-self-center space-x-3 sm:space-x-8">
          {titles.map((elem, i) => (
            <Link
              to={elem.to}
              key={i}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li key={i} className={montserrat.className}>
                {elem.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
