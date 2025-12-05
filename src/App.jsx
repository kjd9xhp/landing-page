import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Characters from "./components/Characters";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CharacterPage from "./components/CharacterPage";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { charactersData } from "./data/charactersData";

function HomePage() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Characters />
      <Gallery />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/character/:id"
          element={<CharacterPage characters={charactersData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
