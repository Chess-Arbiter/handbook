import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Accordion.module.css";

export default function Accordion() {
  const openAccordion = (e: any) => {
    console.log(e.target.value);
  };

  const pages = ["page1", "page2"];

  return (
    <nav className={styles.navigation}>
      {pages.map((page) => (
        <React.Fragment key={page}>
          <input
            id={page}
            type="radio"
            className={styles.input}
            name="sidebar"
            onChange={openAccordion}
            value={page}
            defaultChecked
          />
          <label htmlFor={page} className={styles.item}>
            Intro
            <Icon name="dropdown" />
          </label>
          <div className={styles.content}>
            <div className={styles.item}>mi hat havayi ban</div>
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
}
