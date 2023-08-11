"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/image/logo.png";
import styles from "./Navbar.module.css";

type Props = {};

export default function Navbar({}: Props) {
  const initialState = {
    characters: false,
    nations: false,
    weapons: false,
    visions: false,
  };
  const [active, setActive] = React.useState<{}>(initialState);
  return (
    <nav className={`${styles.navbarContainer}`}>
      <div className={`${styles.navLinksContainer}`}>
        <Link onClick={() => setActive(initialState)} href="/">
          <Image src={Logo} width={120} alt="logo" />
        </Link>
        <div className={styles.navLinkContainer}>
          <Link
            onClick={() =>
              setActive({
                characters: true,
              })
            }
            href="/characters"
            className={active.characters ? styles["active"] : ""}
          >
            Characters
          </Link>
          <Link
            onClick={() =>
              setActive({
                nations: true,
              })
            }
            href="/nations"
            className={active.nations ? styles["active"] : ""}
          >
            Nations
          </Link>
          {/* <Link  updated in new version
            onClick={() =>
              setActive({
                weapons: true,
              })
            }
            href="/weapons"
            className={active.weapons ? styles["active"] : ""}
          >
            Weapons
          </Link> */}
          <Link
            onClick={() =>
              setActive({
                visions: true,
              })
            }
            href="/visions"
            className={active.visions ? styles["active"] : ""}
          >
            Visions
          </Link>
        </div>
      </div>
    </nav>
  );
}
