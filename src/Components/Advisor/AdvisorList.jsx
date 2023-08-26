import React from "react";
import Advisor from "./Advisor";
import styles from "./mentorList.module.css";
const data = [
  {
    name: "Dr. Omkar",
    desc: "Principal Project Scientist",
    university: "IIT Madras",
  },

  {
    name: "Akhil Tripathi",
    desc: "Cofounder SciAstra, Mentor ",
    university: "Student at NISER",
  },
  {
    name: "Vivek Dwivedi",
    desc: "Founder SciAstra, Mentor",
    university: "Student at NISER",
  },
];
const AdvisorList = () => {
  return (
    <div className={styles.mentors}>
      <h2>Mentor & Advisor</h2>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div className={styles["mentor-card"]}>
              <Advisor
                name={item.name}
                univ={item.university}
                desc={item.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvisorList;
