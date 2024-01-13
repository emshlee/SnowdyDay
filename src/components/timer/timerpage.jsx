import React from "react";
import styles from "./timerpage.module.css";
import Member from "./member";
import Stopwatch from "./Stopwatch";

function TimerPage() {
  return (
    <>
      <h1 className="text"> SnowdyDay.</h1>
      <div className={styles.column}>
        <div className={styles.content}>
          <img src="src/images/1.jpeg" />
          <Stopwatch />
        </div>
        <div className={styles.content}>
          <Member name="Jinwon" />
          <Member name="Ahreum" />
        </div>
      </div>
    </>
  );
}

export default TimerPage;
