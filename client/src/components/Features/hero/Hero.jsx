import React from "react";
import video1 from "../../../assets/video/beachVid.mp4";

function Hero(props) {
  return (
    <div className="w-full h-screen bg-slate-500 relative  rounded-b-sm header_clip_path ">
      <video
        className="w-full h-full object-cover"
        src={video1}
        loop
        autoPlay
        muted
      />
      <div className="absolute w-full h-full left-0 top-0 bg-gray-900/30"></div>
      <div className="absolute top-2 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-2">Top 1% Location Worldwide</h2>
      </div>
    </div>
  );
}

export default Hero;
