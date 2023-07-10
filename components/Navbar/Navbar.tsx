import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/image/logo.png";
import styles from "./Navbar.module.css";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className={`${styles.navbarContainer}`}>
      <div className={`${styles.navLinksContainer}`}>
        <Link href="/">
          <Image src={Logo} width={120} alt="logo" />
        </Link>
        <div className={styles.navLinkContainer}>
          <Link href="/characters">Characters</Link>
          <Link href="/nations">Nations</Link>
          <Link href="/weapons">Weapons</Link>
          <Link href="/visions">Visions</Link>
        </div>
      </div>
    </nav>
  );
}
