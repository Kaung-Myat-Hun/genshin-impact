"use client"
import React, {useState , useEffect} from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import BtnImage from '@/public/image/btn.webp'

type Props = {
  getData?: (data: Object[]) => void;
}

type InitialTypes ={
  name : string;
  filter : string
}

const weaponsData = [
  {
  name : "Sword",
  },
  {
    name : "Polearm"
  },
  {
    name: "Claymore"
  },
  {
    name: "Bow"
  },
  {
    name : "Catalyst"
  }
]

const nationsData = [
  {
    name: "Mondsdatd"
  },
  {
    name: "Liyue",
  },
  {
    name: "Inazuma",
  },
  {
    name: "Sumeru"
  }
]

const visionsData = [
  {
    name: "Anemo",
  },
  {
    name: "Cryo",
  },
  {
    name: "Hydro"
  },
  {
    name: "Geo"
  },
  {
    name: "Pyro"
  },
  {
    name : "Electro"
  },
  {
    name: "Dendro"
  }
]
const sexData = [
  {
    name: "male"
  },
  {
    name: "female"
  }
]

const finalData = [
  {
    data: weaponsData,
    filter : "weapon",
  }, {
    data : nationsData,
    filter: "nation"
  }, {
    data: visionsData,
    filter: "vison"
  }, {
    data: sexData,
    filter: "sex"
  }
]

export default function FilterComponent(props: Props) {
  const [filter, setFilter] = useState<String>("")
  const [filteredString, setFilteredString] = useState<String>("")
  const [show, setShow] = useState<Boolean>(false)
  console.log(filter, "|", filteredString);
  return (
    <>
      <div className={styles.filterContainer}>
          {finalData.map((item : any, index : number) => (
            <div key={index}>
              <div className={styles.filterBtnContainer}>
                <Image src={BtnImage} className={styles.btn} alt='btn image'  />
                  <div className={styles.filterText} onClick={() => {
                    if(filteredString !== ""){
                      setFilteredString("")
                      setFilter(item.filter)
                      setShow(true)
                    }else{
                      setFilter(item.filter)
                      setShow(true)
                    }
                  }}>{filter === item.filter && filteredString !== "" ? filteredString : item.filter}</div>
              </div>
              <div>
                <div className={styles.filterDropdownContainer} style={item.filter === filter && show? {visibility: "visible"} : {}}>
                  {item.data.map((itemF : {
                    name: string
                  } , index : number,) => (
                    <div className={styles.filterBtnContainer} key={index}>
                    <Image src={BtnImage} className={styles.btn} alt='btn image'  />
                      <div className={styles.filterText} onClick={() => {
                        setShow(false)
                        setFilteredString(itemF.name)
                      }}>{itemF.name}</div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {
            filter !== "" || filteredString !== "" ? (
              <div className={styles.filterBtnContainer}>
              <Image src={BtnImage} className={styles.btn} alt='btn image'  />
              <div className={styles.filterText} onClick={() => {
                setFilter("")
                setFilteredString("")
                setShow(false)
              }}>Reset</div>
              </div>
            ) : <div style={{width: "150px"}}></div>
          }
        </div>
    </>
  )
}