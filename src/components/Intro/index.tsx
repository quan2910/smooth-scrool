import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import bg from "@/images/background.jpeg";
import intro from "@/images/intro.png";
function index() {
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image src={bg} alt="background image" fill={true} />
      </div>

      <div className={styles.introContainer}>
        <div className={styles.introImage}>
          <Image alt="background image" fill={true} src={intro} />
        </div>
        <h1>Smooth scroll</h1>
      </div>
    </div>
  );
}

export default index;
