import React from 'react'
import styles from'./homepage.module.css'
import { useEffect } from 'react';
import { gapi } from 'gapi-script'
import Button from '../button/button';

const clientId = '314682349715-vvl2mgqregs4hokcnsmkhu8s796ru1da.apps.googleusercontent.com';


function HomePage() {

    useEffect(() => {
        function start() { 
          gapi.client.init({
            clientId: clientId,
            scope: ""
          })
        };
    
        gapi.load('client:auth2', start);
      });

      const loginClick = () => {
        // Your button click logic here
        // console.log('Button clicked!');
        fetch('/login')  // Assuming your Django server is running on the same domain
            .then(response => response.json())  // If the response is JSON, you can parse it
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
      };

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>SnowdyDay.</h1>
            <Button onClick={loginClick} label="Get Started" className="login"/>
        </div>
    );
  }
  
  export default HomePage;
  