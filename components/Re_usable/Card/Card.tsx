import React from "react";
import Image from 'next/image'
import Link from "next/link";
import Avatar from '@/public/image/liyue/avatar/xiao.png'
import Vision from '@/public/image/visions/anemo-vision.png'
import styles from "./style.module.css"

type Props = {
  avatar?: String;
  cha_name?: String;
  vision?: String;
};

export const Card = (props: Props) => {
  return ( 
  <div className={styles.cardContainer}>
    <Link href={`/character/12`}>
    <div className={styles.card}>
      <Image src={Vision} width={30} className={styles.visionIcon} alt="Vision"></Image>
      <Image src={Avatar} width={90} alt="Avatar" className={styles.avatarImage}></Image>
      <p className={styles.cardText}>Xiao</p>
    </div>
    </Link>
  </div>);
};
