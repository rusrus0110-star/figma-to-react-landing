import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Logos from "./components/logos";
import PlanManage from "./components/planManage";
import Features from "./components/features";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Logos />
      <PlanManage />
      <Features />
    </>
  );
}

export default App;
