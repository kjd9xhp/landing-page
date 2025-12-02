import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Characters from "./components/Characters";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import useScrollAnimation from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Characters />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
