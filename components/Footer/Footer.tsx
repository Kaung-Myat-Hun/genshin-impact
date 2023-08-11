import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import hoyoverseLogo from "@/public/image/hoyoverse-logo.png";
import Link from 'next/link'

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={`bg-slate-900 ${styles.footercontainer}`}>
      <div className={`w-9/12 mx-auto py-6 flex justify-between`}>
        <div>
          <Image
            src={hoyoverseLogo}
            alt="hoyoverse"
            className={styles.hoyoverse}
          ></Image>
          <br />
          <p className={`text-sm text-center`}>Credits to <br /> <Link href="https://hoyoverse.com/">hoyoverse.com</Link></p>
        </div>
        <div className={`flex flex-col text-center items-center`}>
          <p>Cross Platform RPG</p>
          <p>Avaliable at : </p>
          <small>Redesign and created by <Link href="https://github.com">Bate Thar</Link></small>
        </div>
        <div className={`text-center`}>
          <Link href="/"><small>Home</small></Link> <br />
          <Link href="/contact"><small>Contact</small></Link> <br />
          <Link href="https://genshin.hoyoverse.com"><small>Go to official site</small></Link>
        </div>
      </div>
    </div>
  );
}
