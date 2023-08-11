import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import hoyoverseLogo from "@/public/image/hoyoverse-logo.png";
import Link from 'next/link';
import microsoftIcon from '../../public/image/icons/micorsoft.png';
import appleIcon from '../../public/image/icons/apple.png';
import androidIcon from '../../public/image/icons/android.png';
import playstationIcon from '../../public/image/icons/playstation.png';

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={` bg-slate-950 ${styles.footercontainer}`}>
      <div className={`w-9/12 mx-auto py-4 flex justify-between`}>
        <div className={`pt-5`}>
          <Image
            src={hoyoverseLogo}
            alt="hoyoverse"
            className={styles.hoyoverse}
          ></Image>
          <br />
          <p className={`text-sm text-center`}>Credits to <br /> <Link href="https://hoyoverse.com/">hoyoverse.com</Link></p>
        </div>
        <div className={`flex flex-col text-center items-center`}>
          <p>Cross Platform RPG Game</p>
          <p className={`flex items-center justify-center`}> 
          <p>Available at : </p>
            <Link href="">
              <Image src={microsoftIcon} alt="microsoft" className={styles.microsoftIcon}></Image>
            </Link>
            <Link href="">
              <Image src={appleIcon} alt="microsoft" className={styles.appleIcon}></Image>
            </Link>
            <Link href="">
              <Image src={androidIcon} alt="microsoft" className={styles.androidIcon}></Image>
            </Link>
            <Link href="">
              <Image src={playstationIcon} alt="microsoft" className={styles.playstationIcon}></Image>
            </Link>
          </p>
          <small>Redesign and created by <Link href="https://github.com/KaungMyatHun-15691">Bate Thar</Link></small>
        </div>
        <div className={`text-center pt-5`}>
          <Link href="/"><small>Home</small></Link> <br />
          <Link href="/contact"><small>Contact</small></Link> <br />
          <Link href="https://genshin.hoyoverse.com"><small>Go to official site</small></Link>
        </div>
      </div>
    </div>
  );
}
