import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./api/api";
import Card from "./components/Card";

function App() {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key =
      "live_9nf7MTAgVOl0iyYGaqkbYpt8VaLPrFN5BljxBnqCMBGpWtMBFsV3kKy9a7zR86Kf";
    api
      .get(`v1/images/search?limit=10&breed_ids=6&api_key=${key}`)
      .then((response) => {
        setRes(response.data);
        setLoading(false)
        console.log(res);
      });
  }, []);

  return (
    <div className="main-container">
      <Card />
      <Card />
    </div>
  );
}

export default App;
