import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import { resumeData } from "./data/resumeData";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NavTabs from "./components/NavTabs";

function App() {
  return (
    <div className="App">
      <NavTabs />
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Projects data={resumeData.projects} />
    </div>
  );
}

export default App;
