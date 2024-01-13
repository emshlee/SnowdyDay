import React from "react";
import styles from "./group.module.css";
import Button from "../button/button";
import Navbar from "../Navbar";

const Group = ({ name, percentage }) => {
  return (
    <div className={styles.card}>
      
      <h1 className={styles.name}>{name}</h1>
      <h3 className={styles.percentage}>{percentage}</h3>
      <Button label="Join" className="join"></Button>
    </div>
  );
};

export default Group;
