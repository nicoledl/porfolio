"use client";
import { Element } from "react-scroll/modules";
import style from "./Skills.module.css";
import tech from "./technologies.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <motion.h1 className="pt-[80px] text-center">Skills</motion.h1>
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
