import React from "react";
import styles from './style.module.css'
import FilterComponent from '../../components/Filters/FilterComponent'
import {Card} from '@/components/Re_usable/Card/Card'

type Props = {};

export default function page({}: Props) {
  const getData = (data: Object[]) =>{
    console.log(data);
  }
  const arr = [
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },{
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },
    {
      avatar : "this is avatar",
      cha_name: "this is chaname",
      vision: "this is vision"
    },

  ]
  return (
    <div className={styles.characterContainer}>
      <FilterComponent />
      <div className={styles.cardContainer}>
        {arr.map((item ,index) => (
          <Card key={index} avatar={item.avatar} vision={item.vision} cha_name={item.cha_name} />
        ))}
      </div>
    </div>
  );
}
