import React from "react";
import "./spinner.css";

function Spinner(props) {
  return (
    <div className="my-20 min-h-screen">
      <div id="spinnerContainer">
        <div id="img1" class="animationClass"></div>
        <div id="img2" class="animationClass"></div>
        <div id="text" class="">
          Loading
        </div>
      </div>
    </div>
  );
}

export default Spinner;

// credits - https://codepen.io/Roosa/pen/yOQrdg -
