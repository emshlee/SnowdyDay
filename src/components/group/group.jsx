import React, { useContext } from "react";
import styles from "./group.module.css";
import Button from "../button/button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { GroupContext } from "../../context/GroupContext";

import { db } from "../../firebase";


const Group = ({ name, percentage }) => {
  return (
    <div className={styles.card}>
      
      <h1 className={styles.name}>{name}</h1>
      <h3 className={styles.percentage}>{percentage}</h3>
      <Link to={"../study"}><Button label="Join" className="join"></Button></Link>
    </div>
  );
};

export default Group;
