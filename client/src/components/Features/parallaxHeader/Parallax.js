import React, { useState } from "react";
import "./parallax.css";

import background from "../../../assets/Parallax/background.png";
import sun_rays from "../../../assets/Parallax/sun_rays.png";
import shadow from "../../../assets/Parallax/black_shadow.png";

import mountain1 from "../../../assets/Parallax/mountain_1.png";
import mountain2 from "../../../assets/Parallax/mountain_2.png";
import mountain3 from "../../../assets/Parallax/mountain_3.png";
import mountain4 from "../../../assets/Parallax/mountain_4.png";
import mountain5 from "../../../assets/Parallax/mountain_5.png";
import mountain6 from "../../../assets/Parallax/mountain_6.png";
import mountain7 from "../../../assets/Parallax/mountain_7.png";
import mountain8 from "../../../assets/Parallax/mountain_8.png";
import mountain9 from "../../../assets/Parallax/mountain_9.png";
import mountain10 from "../../../assets/Parallax/mountain_10.png";

import fog1 from "../../../assets/Parallax/fog_1.png";
import fog2 from "../../../assets/Parallax/fog_2.png";
import fog3 from "../../../assets/Parallax/fog_3.png";
import fog4 from "../../../assets/Parallax/fog_4.png";
import fog5 from "../../../assets/Parallax/fog_5.png";
import fog6 from "../../../assets/Parallax/fog_6.png";
import fog7 from "../../../assets/Parallax/fog_7.png";

function Parallax(props) {
  const [MousePosition, setMousePosition] = useState({
    xValue: 0,
    yValue: 0,
  });

  console.log(window.innerHeight / 2, window.innerWidth / 2);

  function handleMouseMove(e) {
    setMousePosition({
      xValue: e.xValue - window.innerWidth / 2,
      yValue: e.yValue - window.innerHeight / 2,
    });
    console.log(MousePosition.xValue, MousePosition.yValue);
  }
  return (
    <div className="main_div" onMouseMove={(e) => handleMouseMove(e)}>
      <img src={background} alt="" className="bg_image parallax" />
      <img src={fog7} alt="" className="fog-7 parallax" />
      <img src={mountain10} alt="" className="mountain-10 parallax" />
      <img src={fog6} alt="" className="fog-6 parallax" />
      <img src={mountain9} alt="" className="mountain-9 parallax" />
      <img src={mountain8} alt="" className="mountain-8 parallax" />
      <img src={fog5} alt="" className="fog-5 parallax" />
      <img src={mountain7} alt="" className="mountain-7 parallax" />
      <div className="text parallax">
        <h1>A Daring</h1>
        <h2>Adventure</h2>
      </div>
      <img src={mountain6} alt="" className="mountain-6 parallax" />
      <img src={fog4} alt="" className="fog-4 parallax" />
      <img src={mountain5} alt="" className="mountain-5 parallax" />
      <img src={fog3} alt="" className="fog-3 parallax" />
      <img src={mountain4} alt="" className="mountain-4 parallax" />
      <img src={mountain3} alt="" className="mountain-3 parallax" />

      <img src={fog2} alt="" className="fog-2 parallax" />
      <img src={mountain2} alt="" className="mountain-2 parallax" />
      <img src={mountain1} alt="" className="mountain-1 parallax" />
      <img src={sun_rays} alt="" className=" parallax" />
      <img src={shadow} alt="" className="shadow-bt parallax" />
      <img src={fog1} alt="" className="fog-1 parallax" />
    </div>
  );
}

export default Parallax;
