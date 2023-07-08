import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/image/logo.png";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className={`p-2 `}>
      <div className={`w-9/12 mx-auto flex justify-between items-center`}>
        <Link href="/">
          <Image src={Logo} width={120} alt="logo" />
        </Link>
        <div>
          <Link className={`mx-3`} href="/characters">
            Characters
          </Link>
          <Link className={`mx-3`} href="/nations">
            Nations
          </Link>
          <Link className={`mx-3`} href="/weapons">
            Weapons
          </Link>
          <Link className={`mx-3`} href="/visions">
            Visions
          </Link>
        </div>
      </div>
    </nav>
  );
}
