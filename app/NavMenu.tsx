import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import { SignInButton } from "@/components/buttons";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image src="/favicon.ico" alt="logo" width={216} height={30} />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}