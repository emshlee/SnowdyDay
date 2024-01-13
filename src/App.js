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
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
