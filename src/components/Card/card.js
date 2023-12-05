import React from "react";
import "./card-style.css"
function Card() {
  return (
    <div className="container">
      <div className="">foto</div>
      <div style={{display: "flex"}}>
        <h1>título</h1>
        <p>Descrição </p>
      </div>
    </div>
  );
}

export default Card;
