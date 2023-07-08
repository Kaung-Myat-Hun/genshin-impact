import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import bgVideo from "../../public/video/main-bg.gif";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div>
      <div className={""}>
        <Image
          src={bgVideo}
          width={500}
          height={500}
          alt="bg image"
          className={styles.video}
        ></Image>
      </div>
      <h1>Hero</h1>
    </div>
  );
}
