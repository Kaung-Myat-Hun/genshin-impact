import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'
import Paimon from '../../public/image/nations/paimon_like.gif'
type Props = {}

const Loading = (props: Props) => {
  return (
    <div className={`${styles.loadingContainer } bg-gray-900`}>
      <Image src={Paimon} alt="Loading" className={styles.loadingImage} />
      <p className={styles.loadingText}>Loading...</p>
    </div>
  )
}
export default Loading;