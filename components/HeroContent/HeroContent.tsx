import React from "react";
import styles from "./HeroContent.module.css";

type Props = {};

export default function HeroContent({}: Props) {
  return <div className={`${styles.contentContainer}`}>HeroContent</div>;
}
