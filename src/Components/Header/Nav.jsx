import React from "react";
import Button from "../UI/Button";
import styles from "./nav.module.css";
const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="logo" />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a href="a">HOME</a>
          </li>
          <li>
            <a href="a">COURSES</a>
          </li>
          <li>
            <a href="a">SELECTIONS</a>
          </li>
          <li>
            <a href="a">BLOGS</a>
          </li>
          <li>
            <a href="a">MATERIALṢ̣</a>
          </li>
          <li>
            <a href="a">TEAM</a>
          </li>
          <li>
            <a href="a">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className={styles["nav - button"]}>
        <Button name={"LOGIN"} />
      </div>
    </header>
  );
};

export default Nav;
