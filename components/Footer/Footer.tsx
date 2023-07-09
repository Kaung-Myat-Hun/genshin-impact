import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import hoyoverseLogo from "@/public/image/hoyoverse-logo.png";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={`bg-slate-900`}>
      <div className={`w-9/12 mx-auto py-6`}>
        <div>
          <Image
            src={hoyoverseLogo}
            alt="hoyoverse"
            className={styles.hoyoverse}
          ></Image>
        </div>
      </div>
    </div>
  );
}
