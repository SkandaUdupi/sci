import React from "react";
import styles from "./mentor.module.css";
import PersonIcon from "../Assets/person.png";

const Mentor = (props) => {
  return (
    <div className={styles.mentor}>
      <div className={styles.icon}>
        {/* <PersonIcon style={{ fontSize: "130px", marginTop: "20px" }} /> */}
        <img src={PersonIcon} alt="icon" />
      </div>
      <ul>
        <li>{props.name}</li>
        <li>{props.univ}</li>
      </ul>
    </div>
  );
};

export default Mentor;
