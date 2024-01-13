import logo from './img/logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import HomePage from './pages/home/homepage.jsx';
import Group from './pages/group/group.jsx';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext.js';
import { useContext } from 'react';
import Stopwatch from "./components/Stopwatch";


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
  const studyClick = () => {
    // Your button click logic here
    // console.log('Button clicked!');
    fetch("/study") // Assuming your Django server is running on the same domain
      .then((response) => response.json()) // If the response is JSON, you can parse it
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const {currentUser} = useContext(AuthContext);


  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/homepage" />
    }
    return children
  }

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
      {/* <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Group />
              </ProtectedRoute>
            }
          />
          <Route path="homepage" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
    </>
  );
}

export default App;
