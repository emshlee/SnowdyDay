import React from "react";
import styles from "./homepage.module.css";
import Button from "../components/button/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>SnowdyDay.</h1>
      <Link to={"/login"}>
        <Button label="Get Started" className="login" />
      </Link>
    </div>
  );
}

export default HomePage;
