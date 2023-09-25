import React from "react";
import styles from './style.module.css'
import Image, { StaticImageData } from "next/image";
import Mondsdadt from '../../public/image/mondsdatd.webp.png'
import Liyue from '../../public/image/liyue.webp'
import Inazuma from '../../public/image/inazuma.webp'
import Sumeru from '../../public/image/sumeru1.webp'

type Props = {};
type CardProps = {
  image: string | StaticImageData;
}

const imgArray = [
  {
    id: 1,
    image: Mondsdadt,
    name: "mondsdadt"
  },{
    id: 2, 
    image: Liyue,
    name : "liyue"
  },{
    id: 3,
    image: Inazuma,
    name: "inazuma"
  },{
    id: 4,
    image: Sumeru,
    name: "sumeru"
  }
]

export default function page({}: Props) {
  const getData = (data: Object[]) =>{
    console.log(data);
  }
  return (
    <div className={styles.characterContainer}>
      <div className={styles.nationsContainer}>
        {imgArray.map((item)=>(
          <NationCard image={item.image} key={item.id} />
        ))}
      </div>
    </div>
  );
}

const NationCard = (props: CardProps) =>{
  return (
    <div className={styles.cardContainer}>
      <Image src={props.image} alt="card Image" className={styles.cardImage}></Image>
    </div>
  )
}