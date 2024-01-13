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
          <img src="" alt="Snowman"/>
          <Stopwatch />
        </div>
        <div className={styles.friends}>
          <Member name="Jinwon" />
          <Member name="Ahreum" />
        </div>
      </div>
    </>
  );
}

export default TimerPage;
