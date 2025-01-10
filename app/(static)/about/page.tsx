import Image from "next/image";
import { data } from "./data";
import styles from "./about.module.css";
import { siteTitle } from "../../../constants/titles";

export const metadata = {
  title: `About us | ${siteTitle}`,
  description: `Meet ${siteTitle} team.`,
};

export default function About() {
  return (
    <>
      <p>
        The Chess Arbiter program is NOT an official FIDE program, it was
        created by the initiative of two chess players. When editing the
        material, materials from the official FIDE website, websites of chess
        federations of different countries, as well as from other chess websites
        were used and translated. Below is our team.
      </p>
      <h2 className={styles.h2}>Our team</h2>
      <div className={styles.card_container}>
        <Card person="artyom" />
        <Card person="taron" />
      </div>
    </>
  );
}

function Card({ person }: { person: "artyom" | "taron" }) {
  const { name, bio, img, links } = data[person];

  return (
    <div>
      <h3 className={styles.h3}>{name}</h3>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <Image src={img} fill alt={name} priority />
        </div>
        <div className={styles.details}>
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
      </div>
      <div>
        {Object.entries(links).map(([key, value]) => {
          return (
            <div className={styles.link} key={value}>
              <a href={value.toString()} target="_blank" rel="no-referer">
                {key}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
