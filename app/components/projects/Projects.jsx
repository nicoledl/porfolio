"use client";
import { useState } from "react";
import projects from "./projects.json";
import style from "./Projects.module.css";
import { oleoScript } from "../../fonts";
import { Element } from "react-scroll/modules";
import { motion } from "framer-motion";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(false);
  function handleSelected(elem) {
    setCurrentProject(elem);
  }

  return (
    <Element name="projects">
      <div className={style.projects}>
        <motion.div className={oleoScript.className}>Projects</motion.div>
        <main className="container mx-auto align-center grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 mt-8 h-max">
          <div className="relative container mx-auto flex h-[100px] sm:h-[600px] pb-[90%]">
            <div
              className="absolute w-[400px] sm:w-[600px] right-0 left-0 mx-auto max-w-[87%] m-auto h-auto"
              style={{
                perspective: "600px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src="images/tv.png"
                alt="tv"
                className="absolute z-40 scale-x-[-1]"
              />
              {currentProject ? (
                <img
                  src={currentProject.urlImg1}
                  alt={currentProject.name}
                  className={style.tvScreen}
                />
              ) : (
                <img
                  src="images/vcr-glitching.gif"
                  alt="GIF animado"
                  className={style.tvScreen}
                />
              )}
            </div>
          </div>
          <div className="grid content-center px-[40px]">
            {projects.map((elem, i) => (
              <div
                key={i}
                className={style.vhs}
                onClick={() => handleSelected(elem)}
              >
                <div>{elem.name}</div>
                <div></div>
              </div>
            ))}
            <section className="mt-[50px] bg-amber-100 p-[20px] justify-items-center grid mb-5">
              {currentProject && (
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 1 }}
                  className="relative"
                >
                  <p className="m-3">{currentProject.role}</p>
                  <p className="mb-5 m-3">{currentProject.technologies}</p>
                  <a
                    target="_blank"
                    href={currentProject.github}
                    className="text-pink-500 mb-1 mt-3 uppercase font-bold text-end inline-flex items-center"
                  >
                    Github
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  {currentProject.id !== 3 ? (
                    <a
                      target="_blank"
                      href={currentProject.url}
                      className="text-violet-500  uppercase font-bold inline-flex items-center"
                    >
                      Visit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ) : (
                    <p
                      href={currentProject.github}
                      className="text-violet-500  uppercase font-bold inline-flex items-center"
                    >
                      Work in progress
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  )}

                  <button
                    onClick={() => setCurrentProject(false)}
                    className="absolute top-[-15px] right-[-10px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-pink-500 hover:text-pink-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </motion.div>
              )}
            </section>
          </div>
        </main>
      </div>
    </Element>
  );
}
