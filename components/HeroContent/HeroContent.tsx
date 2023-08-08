import React from "react";
import styles from "./HeroContent.module.css";
import Image from "next/image";
import primogemLogo from "/public/image/primogem.webp";

type Props = {};

export default function HeroContent({}: Props) {
  return (
    <div className={`${styles.contentContainer}`}>
      <Image
        src={primogemLogo}
        alt="primogem"
        className={styles.primogem}
      ></Image>
      <div className={styles.dropDown}></div>
    </div>
  );
}
