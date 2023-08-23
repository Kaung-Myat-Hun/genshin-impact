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
  useEffect(() => {
    console.log(filter);
  }, [])
  
  return (
    <>
      <div className={styles.filterContainer}>
          {finalData.map((item : any, index : number) => (
            <div key={index} onClick={() => {
              if(filter === item.filter){
                setFilter("")
              }else{
                setFilter(item.filter)
              }
            }}>
              <div className={styles.filterBtnContainer}>
                <Image src={BtnImage} className={styles.btn} alt='btn image'  />
                  <div className={styles.filterText} onClick={() => {
                    if(filter === item.filter){
                      setFilter("")
                    }else{
                      setFilter(item.filter)
                    }
                  }}>{item.filter}</div>
              </div>
              <div>
                <div className={styles.filterDropdownContainer} style={filter===item.filter? {visibility: "visible"} : {}}>
                  {item.data.map((itemF : {
                    name: string
                  } , index : number,) => (
                    <div className={styles.filterBtnContainer} key={index}>
                    <Image src={BtnImage} className={styles.btn} alt='btn image'  />
                      <div className={styles.filterText} onClick={() => {
                        setFilter(itemF.name )
                      }}>{itemF.name }</div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {
            filter !== "" ? (
              <div className={styles.filterBtnContainer}>
              <Image src={BtnImage} className={styles.btn} alt='btn image'  />
              <div className={styles.filterText} onClick={() => {
                setFilter("")
              }}>Reset</div>
              </div>
            ) : <div style={{width: "150px"}}></div>
          }
        </div>
    </>
  )
}