import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./api/api";

function App() {
  const [res, setRes] = useState({});
  const [swap, setSwap] = useState(false);
console.log(res)
  useEffect(() => {
      api
        .get("v1/images/search")
        .then((response) => {
          setRes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  function switchState() {
    setSwap(!swap);
  }

  return (
    <div className="container">
      <h1 className="text">Seja bem-vindo a API Dogos</h1>
      <div className="inner-div">
        <input></input>
        <button onClick={switchState}>Procurar</button>
      </div>
      <div className={swap ? "images-div-show" : "images-div-hidden"}>
        <img src={res[0].url} alt="Imagem aleatória de cachorro"/>
      </div>
    </div>
  );
}

export default App;
