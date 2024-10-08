import Image from "next/image";

import githubIcon from "../../public/images/github.png";
import styles from "./GithubLink.module.css";

const URL = "https://github.com/Chess-Arbiter";

export default function GithubLink() {
  return (
    <a
      href={URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.github_link}
    >
      <Image src={githubIcon} alt="github" />
    </a>
  );
}
