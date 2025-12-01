import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Characters from "./components/Characters";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
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
