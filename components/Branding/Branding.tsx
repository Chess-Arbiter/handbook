import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "./Branding.module.css";

export default function Branding() {
  return (
    <div className={styles.branding}>
      <Image src={logo} alt="logo" />
      <span>Chess arbiter</span>
    </div>
  );
}
