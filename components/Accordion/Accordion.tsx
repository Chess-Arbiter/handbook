import Link from "next/link";
import React from "react";
import { menuTrees } from "../../data/menuTrees";
import getLink from "../../utils/getLink";
import Icon from "../Icon/Icon";
import styles from "./Accordion.module.css";

export default function Accordion({
  defaultOpenedItem,
  currentSlug,
  language,
  asPath,
}: {
  defaultOpenedItem: string;
  currentSlug: any;
  language: any;
  asPath: string;
}) {
  const basic = menuTrees.filter((el: any) => el.type === 2);

  return (
    <nav className={styles.navigation}>
      {basic.map((tree: any) => (
        <React.Fragment key={tree.id}>
          <input
            id={tree.id}
            type="radio"
            className={styles.input}
            name="sidebar"
            value={tree.id}
            defaultChecked={tree.id === defaultOpenedItem}
          />
          <label htmlFor={tree.id} className={styles.item}>
            {tree[`title_${language}`]}
            <Icon name="dropdown" />
          </label>
          <div className={styles.content}>
            {tree.pages.map((el: any) => (
              <Link
                href={getLink(asPath, 2, el.slug)}
                key={el.slug}
                className={`${currentSlug === el.slug ? styles.active : ""}  ${
                  styles.item
                }`}
              >
                {el.title_en}
              </Link>
            ))}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
}
