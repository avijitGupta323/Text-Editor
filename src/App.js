// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("primary");
  const [mode2, setMode2] = useState("light");
  const [mode3, setMode3] = useState("light");
  const [mode4, setMode4] = useState("dark");

  const toogleMode = () => {
    if (mode === "primary") {
      setMode("dark");
    } else {
      setMode("primary");
    }

    if (mode2 === "light") {
      setMode2("secondary");
    } else {
      setMode2("light");
    }

    if (mode3 === "light") {
      setMode3("dark");
    } else {
      setMode3("light");
    }

    if (mode4 === "dark") {
      setMode4("light");
    } else {
      setMode4("dark");
    }
  };

  return (
    <>
      <Navbar color={mode} toogleMode={toogleMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                  color={mode2}
                  color2={mode3}
                  textColor={mode4}
                  buttonColor={mode}
              />
            }
          ></Route>
          <Route
            path="/about"
            element={
              <About bg_color={mode2} t_color={mode4}/>
            }
          ></Route>
        </Routes>
    </>
  );
}

export default App;
