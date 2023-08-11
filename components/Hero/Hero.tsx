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
      <div>
        <div className={""}>
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
              <p className={styles.btnText}><Link href="/characters">Explore</Link></p>
            </div>
          </div>
          <div className={styles.motionDivBg}></div>
        </div>
      </div>
    </>
  );
}
