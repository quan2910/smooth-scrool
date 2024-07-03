import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Description = () => {
  const phrases = [
    "LOS FLAMENCOS NATIONAL RESERVE",
    "IS A NATURE RESERVE LOCATED",
    "IN THE COMMUNE OF SAN PEDRO DE ATACAMA",
    "THE RESERVE COVERS A TOTAL AREA",
    "OF 740 SQUARE KILOMETRES (290 SQ MI)",
  ];

  return (
    <div className={styles.description}>
      {phrases.map((phrase, i) => (
        <AnimatedText key={i}>{phrase}</AnimatedText>
      ))}
    </div>
  );
};

export default Description;

function AnimatedText({ children }: { children: string }) {
  const text = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
        markers: true,
      },
      left: "-200px",
      opacity: 0,
    });
  }, []);
  return <p ref={text}>{children}</p>;
}
