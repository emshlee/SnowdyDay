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




function App() {

  const {currentUser} = useContext(AuthContext);


  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/">
          <Route index element={
          <ProtectedRoute>
            <Home />
            </ProtectedRoute>
          } 
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
