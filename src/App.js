import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/timer/Stopwatch";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import HomePage from "./components/home/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimerPage from "./components/timer/timerpage";
import Snowfall from 'react-snowfall'
import GroupPage from "./components/group/grouppage";

function App() {
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   };

  //   gapi.load('client:auth2', start);
  // });
  const studyClick = () => {
    // Your button click logic here
    // console.log('Button clicked!');
    fetch("/study") // Assuming your Django server is running on the same domain
      .then((response) => response.json()) // If the response is JSON, you can parse it
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
    <div className="App">
      <Snowfall
          // The color of the snowflake, can be any valid CSS color.
          color="white"
          // Applied to the canvas element.
          // Controls the number of snowflakes that are created (defaults to 150).
          snowflakeCount={130}
        />
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/group" Component={GroupPage} />
          <Route path="/study" Component={TimerPage} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
