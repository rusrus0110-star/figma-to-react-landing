import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Logos from "./components/logos";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Logos />
    </>
  );
}

export default App;
