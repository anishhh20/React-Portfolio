import React from "react";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/about/about";
import Skill from "./components/skills/skills";
import Qualification from "./components/qualification/qualification";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";
import ScrollTop from "./components/scrollTop/scrollTop";
import Footer from "./components/footer/footer";
import "./App.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
  offset: 60,
});

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skill />
        <Qualification />
        <Project />
        <Contact />
        <Footer />
      </main>
      <ScrollTop />
    </>
  );
}

export default App;
