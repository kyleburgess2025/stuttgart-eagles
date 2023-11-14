import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Board from "./pages/Board";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Join from "./pages/Join";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/board" element={<Board />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/join" element={<Join />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userhome" element={<UserHome />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
