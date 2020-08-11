import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import { resumeData } from "./data/resumeData";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
    </div>
  );
}

export default App;
