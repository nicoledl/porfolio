"use client";
import styles from "./Header.module.css";
import { abrilFatface, yesevaOne, concertOne } from "../../fonts";
import { Element } from "react-scroll/modules";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <Element name="header">
      <header className="container mx-auto xl:px-lg">
        <div className={styles.header}>
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={abrilFatface.className}
            >
              full stack developer
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={styles.clipAnimation}
            >
              <p className="text-black">
                Bring your <br />
                <span className="text-red-500">page</span>
                <br />
                to life!
              </p>
            </motion.div>
          </div>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute grid pb-5 z-40 bottom-0 mb-8 lg:ms-[10vw]">
              <h3 className={yesevaOne.className}>Know me</h3>
              <h2>
                Nicole D.
                <br /> Losana
              </h2>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-0 mx-auto left-0 right-0 z-[-100]"
              src="/images/nicoledl.png"
              alt="Nicole Losana"
            />
            <div className="absolute grid pb-5 z-40 bottom-0 right-0 text-right mb-8 lg:me-[10vw]">
              <h4 className="mb-5">tech stack that I use</h4>
              <h6 className={concertOne.className}>JavaScript</h6>
              <h5 className={concertOne.className}>React</h5>
              <h4 className={concertOne.className}>Node.js</h4>
              <h4 className={concertOne.className}>and more...</h4>
            </div>
          </motion.main>
        </div>
      </header>
    </Element>
  );
}
