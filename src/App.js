import React from "react";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import UserContext from "./components/UserContext";
import Profile from "./components/Profile";
import EnglishTest from "./components/EnglishText";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserContext>
      <div className="App">
        <Routes>
          <Route path="/home" element={<h1>Flying circus</h1>} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<EnglishTest />} />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;
