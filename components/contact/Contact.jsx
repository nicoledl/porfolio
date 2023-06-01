"use client";
import { Element } from "react-scroll/modules";
import style from "./Contact.module.css";
import { Link } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact">
      <div
        className="h-[150px] sm:h-[300px] bg-contain overflow-auto"
        style={{
          backgroundImage: "url('images/contact.gif')",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FFABBE",
          backgroundPosition: "bottom left",
        }}
      >
        <div className="pe-[10%] flex justify-end gap-[5%] items-center h-full relative">
          <a href={`mailto:nicolelosana@gmail.com`} className={style.button}>
            Email me!
          </a>
          <a
            href="https://www.linkedin.com/in/nicole-losana-88b1b6257/"
            className={style.button}
            target="_blank"
          >
            Linkedin
          </a>
          <p className="absolute bottom-0 left-0 text-rose-200 m-1 flex">
            Gif by Luiza Lima{" "}
            <a
              target="_blank"
              href="https://dribbble.com/shots/15084808-back-to-2005-GIF"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </a>
          </p>
          <Link
            to="header"
            smooth={true}
            duration={500}
            className=" justify-end items-center h-full relative cursor-pointer hover:text-rose-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 absolute bottom-[20px] right-0"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Element>
  );
}
