import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import bgVideo from "../../public/video/main-bg.gif";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div>
        <div className={""}>
          <Image
            src={bgVideo}
            width={500}
            height={500}
            alt="bg image"
            className={styles.video}
          ></Image>
          <div className={styles.motionDivBg}></div>
        </div>
      </div>
      <div className={`${styles.heroContent}`}>
        <h1>Hello</h1>
      </div>
    </>
  );
}
