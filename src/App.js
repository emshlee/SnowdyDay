
import logo from './img/logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Stopwatch from './components/Stopwatch'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext.js';
import { useContext } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import HomePage from "./components/home/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './img/logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import LogoutButton from './components/Logout.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext.js';
import { useContext } from 'react';




import Stopwatch from './components/Stopwatch'
import { useEffect } from 'react';
import { gapi } from 'gapi-script'
import HomePage from './components/home/homepage';


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
      return <Navigate to="/login" />
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/study" Component={Stopwatch} />
        </Routes>
      </Router>
      {/* <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
