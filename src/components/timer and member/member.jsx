import React from 'react'
import styles from'./member.module.css'

const Member = ({ name, percentage }) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.name}>{name}</h1>
        </div>
    );
  }

  export default Member;