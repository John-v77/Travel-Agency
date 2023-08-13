import React from "react";

function AmenetiesCard(props) {
  return (
    <div className="relative h-60">
      <img src={props.bg} alt="/" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/40">
        <p className="absolute left-4 bottom-4 text-xl text-white font-bold">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default AmenetiesCard;
