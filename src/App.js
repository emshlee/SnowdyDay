import "./App.css";
import HomePage from "./pages/home/homepage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext.js";
import { useContext } from "react";
import TimerPage from "./components/timer/timerpage";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Snowfall from "react-snowfall";
import GroupPage from "./pages/group/grouppage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/homepage" />;
    }
    return children;
  };

  return (
    <>
      <div className="App">
        <Snowfall
          color="white"
          // Applied to the canvas element.
          // Controls the number of snowflakes that are created (defaults to 150).
          snowflakeCount={130}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/study-session" element={<TimerPage />} />
            <Route path="/group" element={<GroupPage />} />
            {/* <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
