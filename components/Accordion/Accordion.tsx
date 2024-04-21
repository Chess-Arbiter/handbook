import React from "react";
import Link from "next/link";
import Icon from "../Icon/Icon";
import { IMenuTrees, IPages, menuTrees } from "../../data/menuTrees";
import getLink from "../../utils/getLink";
import { IAccordionProps } from "./Accordion.types";
import styles from "./Accordion.module.css";

export default function Accordion({
  defaultOpenedItem,
  currentSlug,
  language,
  asPath,
  currentTab,
}: IAccordionProps) {
  const MORE = menuTrees.filter((el: IMenuTrees) => el.type === currentTab);

  return (
    <div className={styles.navigation}>
      <nav>
        {MORE.map((tree: IMenuTrees) => (
          <React.Fragment key={tree.id}>
            <input
              id={tree.id}
              type="checkbox"
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
              {tree.pages.map((el: IPages) => (
                <Link
                  href={getLink(asPath, 2, el.slug)}
                  rel="keep-params"
                  key={el.slug}
                  className={`${
                    currentSlug === el.slug ? styles.active : ""
                  }  ${styles.item}`}
                >
                  {el[`title_${language}`]}
                </Link>
              ))}
            </div>
          </React.Fragment>
        ))}
      <div className={styles.personal}>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/about">About Us</Link>
      </div>
      </nav>
    </div>
  );
}
