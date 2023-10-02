import React from "react";
import "./spinner.css";

function Spinner(props) {
  return (
    <div className="min-h-screen">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg"
        className="w-full h-20 object-cover object-top "
        alt="navbar background"
      />
      <div id="spinnerContainer">
        <div id="img1" className="animationClass"></div>
        <div id="img2" className="animationClass"></div>
        <div id="text">Loading</div>
      </div>
    </div>
  );
}

export default Spinner;

// credits - https://codepen.io/Roosa/pen/yOQrdg -
