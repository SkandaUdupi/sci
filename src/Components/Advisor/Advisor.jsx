import React from "react";
import styles from "./mentor.module.css";
import Person from "../Assets/person.png";
import Button from "../UI/Button";

const Advisor = (props) => {
  return (
    <div className={styles.mentor}>
      <div className={styles.icon}>
        <img src={Person} alt="icon" />
      </div>
      <ul>
        <li>{props.name}</li>
        <li>{props.desc}</li>
        <li>{props.univ}</li>
      </ul>
      {props.name !== "Dr. Omkar" && <Button name={"Contact me"} />}
    </div>
  );
};

export default Advisor;
