import React from "react";
import styles from "./timerpage.module.css";
import Member from "./member";
import Stopwatch from "./Stopwatch";

function TimerPage() {

    const time = 50;

    const image1 = 'https://static.vecteezy.com/system/resources/previews/022/512/269/original/christmas-snowing-day-christmas-snowman-cute-snowman-clipart-transparent-background-free-png.png'
    const image2 = 'https://www.pngkey.com/png/full/66-666392_melted-snowman-svg-scrapbook-cut-file-cute-clipart.png'
    const image3 = 'https://cdni.iconscout.com/illustration/free/thumb/free-melting-snowman-4640093-3868816.png'
    const image4 = 'https://alphaphigamma.org/wp-content/uploads/2022/12/Snowmanz-Juliane-Wera.png'
    const image5 ='https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-puddle-water-aqua-liquid-vector-png-image_4842332.png'

    const getImageSource = () => {
        if (time > 40) {
          return image1;
        } else if (time > 30) {
          return image2;
        } else if (time > 20) {
            return image3;
        } else if (time > 10) {
            return image4;
        } else if (time < 5) {
            return image5;
        }
      };

  return (
    <>
      <h1 className="text"> SnowdyDay.</h1>
      <div className={styles.column}>
        <div className={styles.content}>
          <img src={getImageSource()} alt="Snowman"/>
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
