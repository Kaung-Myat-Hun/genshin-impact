import React from "react";
import styles from "./Hero.module.css";
import Link from 'next/link';
import Image from "next/image";
import bgVideo from "../../public/video/main-bg.gif";
import btnExplore from '../../public/image/btn.webp'
type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={``}>
          <Image
            src={bgVideo}
            width={500}
            height={500}
            alt="bg image"
            className={styles.video}
          ></Image>
          <div className={styles.btnOuterContainer}>
            <div className={styles.btnContainer}>
              <Image src={btnExplore} alt="btn explore" className={styles.btnExplore}/>
              <Link className={styles.btnText} href="/characters">Explore</Link>
            </div>
          </div>
          <div className={styles.motionDivBg}></div>
        </div>
      </div>
    </>
  );
}
