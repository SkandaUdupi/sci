import React from "react";
import Univ from "./Univ";
import styles from "./university.module.css";
const univ = [
  { id: 1, name: "Cambridge" },
  { id: 2, name: "Harvard" },
  { id: 3, name: "Univeristy of California " },
  { id: 4, name: "ETH Zurich" },
  { id: 5, name: "Max Planck " },
  { id: 6, name: "Univeristy of Edinberg " },
  { id: 7, name: "John Hopkins " },
  { id: 8, name: "Michigan State University " },
  { id: 9, name: "University of Illinois " },
  { id: 10, name: "Humboldt University of Berlin" },
];

const University = () => {
  return (
    <div className={styles.container}>
      {univ.map((item) => (
        <Univ name={item.name} />
      ))}
    </div>
  );
};

export default University;
