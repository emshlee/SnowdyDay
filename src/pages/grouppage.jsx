import React from "react";
import styles from "./grouppage.module.css";
import Group from "../components/group/group";
import Navbar from "../components/Navbar";

function GroupPage() {
  return (
    <>
    <Navbar />
      <h1 className="text"> SnowdyDay.</h1>
      <div className={styles.content}>
        <h3 className={styles.title}>YOUR GROUPS</h3>
        <div className={styles.list}>
          <Group name="Group 1" percentage="30%" />
          <Group name="Group 2" percentage="40%" />
        </div>
      </div>
    </>
  );
}

export default GroupPage;
