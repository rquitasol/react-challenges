import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "../src/main/Header";
import { MainPage } from "../src/main/MainPage";
import { NavBar } from "./main/NavBar";

function App() {
  const challenges = ["Challenge 1", "Challenge 2"];

  return (
    <div>
      <Header />
      <NavBar challenges={challenges} />
      <MainPage />
    </div>
  );
}

export default App;
