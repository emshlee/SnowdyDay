import React, { useState, useEffect } from "react";
import styles from "./timerpage.module.css";
import Member from "../components/timer and member/member";
import Stopwatch from "../components/timer and member/Stopwatch";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function TimerPage() {
  const image1 =
    "https://static.vecteezy.com/system/resources/previews/022/512/269/original/christmas-snowing-day-christmas-snowman-cute-snowman-clipart-transparent-background-free-png.png";
  const image3 =
    "https://www.pngkey.com/png/full/66-666392_melted-snowman-svg-scrapbook-cut-file-cute-clipart.png";
  const image2 =
    "https://cdni.iconscout.com/illustration/free/thumb/free-melting-snowman-4640093-3868816.png";
  const image4 =
    "https://alphaphigamma.org/wp-content/uploads/2022/12/Snowmanz-Juliane-Wera.png";
  const image5 =
    "https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-puddle-water-aqua-liquid-vector-png-image_4842332.png";

  const [time, setTime] = useState(0);
  const [imageSrc, setImageSrc] = useState(image1);

  useEffect(() => {
    console.log(time)
    if (time > 20000) {
      setImageSrc(image5)
    }
    else if (time > 15000) {
      setImageSrc(image4)
    }
    else if (time > 10000){
      setImageSrc(image3)
    }
    else if (time > 5000){
      setImageSrc(image2)
    }
    else if (time < 5000){
      setImageSrc(image1)
    }
  }, [time]);

  return (
    <>
    <Navbar className="navbar" />
      <h1 className="text"> SnowdyDay.</h1>
      <div className={styles.column}>
        <div className={styles.content}>
          <img src={imageSrc} alt="Snowman" />
          <Stopwatch time={time} setTime={setTime} />
        </div>
        <Search/>
        <div className={styles.friends}>
          <Member name="Jinwon" />
          <Member name="Ahreum" />
        </div>
      </div>
    </>
  );
}

export default TimerPage;
