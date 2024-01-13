import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import HomePage from "./components/home/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/study" Component={Stopwatch} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
