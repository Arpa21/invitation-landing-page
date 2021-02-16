import "./App.scss";
import React from "react";
import { NavSection } from "./components/NavSection";
import { HeroSection } from "./components/HeroSection";
import { PartnerLogos } from "./components/PartnerLogos";
import { DetailsSection } from "./components/DetailsSection";
import { MainCtaSection } from "./components/MainCtaSection";
import { Gallery } from "./components/Gallery";
import { FooterSection } from "./components/FooterSection";

const App = () => {
  return (
    <div className="App">
      <NavSection />
      <HeroSection />
      <PartnerLogos />
      <DetailsSection />
      <MainCtaSection />
      <Gallery />
      <FooterSection />
    </div>
  );
};

export default App;
