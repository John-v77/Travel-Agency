import React from "react";
import Hero from "../../Features/hero/Hero";
import DestinationBoard from "../../Features/destinationsBoard/DestinationBoard";
import Ameneties from "../../Features/ameneties/Ameneties";

function Home(props) {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Hero />
      <DestinationBoard />
      <Ameneties />
    </div>
  );
}

export default Home;
