"use client";
import style from "./About.module.css";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Element name="about">
      <div ref={ref} className={style.aboutContainer}>
        {inView && (
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="pt-[80px] text-center"
          >
            ABOUT ME
          </motion.h1>
        )}
        <motion.div className={style.card}>
          <div>
            <div></div>
            <img src="/images/diary.png" />
          </div>
          <div>
            <h2>
              Hi! <br /> Know me a bit...
            </h2>
            <p>
              I'll start with what I consider one of my strength, that is be
              emotional and empathetic. <br />I like argue about many subjects,
              and learning about differents points of view. People actions or
              thoughts intrigued me.
              <br /> I'm a person that like learning with practice and
              searching. Another strength that i have is the tolerance of facing
              troubles, i dont give up until i find the solution.
              <br className="mb-3" />
              <b className="text-pink-500 uppercase">🤭Nonsense ps</b>: i love
              colors, romantic, drama and horror movies/series; music, draw,
              animals, food, nature and the city.
            </p>
            <p className="text-right flex justify-center items-center">
              <span className="text-lg">🙂</span>Nikki
            </p>
          </div>
        </motion.div>
      </div>
    </Element>
  );
}
