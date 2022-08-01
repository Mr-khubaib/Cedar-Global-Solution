import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Components/homepage/Home";
import SidebarSecond from "./Components/sidebar/SidebarSecond";
import HomeSecond from "./Components/homepage/HomeSecond";
import Navbar from "./Components/header/Navbar";
import NavbarScond from "./Components/header/NavbarScond";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Home />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <NavbarScond />
              <SidebarSecond />
              <HomeSecond />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
