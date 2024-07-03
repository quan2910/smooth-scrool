import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import bg from "@/images/background.jpeg";
import intro from "@/images/intro.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Intro() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
        markers: true,
      },
    });
    timeline
      .from(backgroundImage.current, { clipPath: "inset(15%)" })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image src={bg} alt="background image" fill={true} />
      </div>

      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image alt="background image" fill={true} src={intro} />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          Smooth scroll
        </h1>
      </div>
    </div>
  );
}

export default Intro;
