import logo from './img/logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Group from './pages/Group.jsx';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext.js';
import { useContext } from 'react';
import Stopwatch from "./components/Stopwatch";



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
      return <Navigate to="/home" />
    }
    return children
  }
}

export default App;
