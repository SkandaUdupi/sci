import React from "react";
import Mentor from "./Mentor";
import styles from "./mentorList.module.css";

const data = [
  { name: "Shubham", university: "Cambridge" },
  { name: "Pavan", university: "Harvard" },
  { name: "Varun", university: "Univeristy of California" },
  { name: "Adithya", university: "Univeristy of California" },
  { name: "Darshan", university: "Eth Zurich" },
  { name: "Pruthvi", university: "Univeristy of California" },
  { name: "Pradhan", university: "Eth Zurich" },
];

const MentorList = () => {
  return (
    <div className={styles.mentors}>
      <h2>Meet your Mentor</h2>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div className={styles["mentor-card"]}>
              <Mentor name={item.name} univ={item.university} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MentorList;
