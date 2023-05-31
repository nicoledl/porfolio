"use client";
import { Element } from "react-scroll/modules";
import style from "./Skills.module.css";
import tech from "./technologies.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function cd(params, i) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: i / 3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={style.cdCase}
      key={params.tech}
    >
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
        {inView ? (
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="pt-[80px] text-center"
          >
            Skills
          </motion.h1>
        ) : (
          <div className="h-screen"></div>
        )}

        <motion.main
          ref={ref}
          className="flex flex-wrap container mx-auto justify-center items-center"
        >
          {inView && tech.map((elem, i) => cd(elem, i))}
        </motion.main>
      </div>
    </Element>
  );
}
