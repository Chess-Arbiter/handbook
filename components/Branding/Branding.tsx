import Image from "next/image";
import Link from "next/link";
import { siteTitle } from "../../constants/titles";
import logo from "../../public/images/logo.webp";
import styles from "./Branding.module.css";

export default function Branding() {
  return (
    <div className={styles.branding}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <span>{siteTitle}</span>
    </div>
  );
}
