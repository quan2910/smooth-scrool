"use client";

import Intro from "@/components/Intro";
import styles from "./page.module.css";
import { useEffect } from "react";
import Description from "@/components/Description";
import Project from "@/components/Project";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Project />
    </main>
  );
}
