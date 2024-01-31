import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/auth/SignUp";
import Login from "./Components/auth/Login";
import Main from "./Components/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
