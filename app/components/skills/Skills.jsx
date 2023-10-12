"use client";
import { Element } from "react-scroll/modules";
import style from "./Skills.module.css";
import tech from "./technologies.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {russoOne} from "../../fonts"

function cd(params, i) {
  return (
    <motion.div className={style.cdCase} key={params.tech}>
      <div
        style={{
          backgroundImage: `url("${params.imgUrl}")`,
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className="absolute"></span>
      <div></div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <Element name="skills">
      <div ref={ref} className={style.skills}>
        <motion.h1
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className={russoOne.className}
        >
          Skills
        </motion.h1>
        <motion.main
          ref={ref}
          className="flex flex-wrap container mx-auto justify-center items-center"
        >
          {tech.map((elem, i) => cd(elem, i))}
        </motion.main>
      </div>
    </Element>
  );
}
