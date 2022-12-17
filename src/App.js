import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FirstSlide from "./components/FirstSlide";
import SecondSlide from "./components/SecondSlide";
import Mobile from "./components/Mobile";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app font-sans font-medium">
      <Navbar />
      <Header />
      <FirstSlide />
      <SecondSlide />
      <Mobile />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
