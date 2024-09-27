// spell-checker:disable
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";

export default function StarshipsAPI() {
  const url = "https://swapi.dev/api/starships/";

  const [starships, setStarships] = useState([]);

  const getStarships = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setStarships(data.results);
    } catch (e) {
      console.error(e);
    }
  };

  const loaded = () => {
    return (
      <div>
        <h1>Starships</h1>
        <div className="starships-container">
          {starships.map((ship, index) => (
            <Card key={index} ship={ship} />
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    getStarships();
  }, []);

  return <div>{starships.length ? loaded() : <h1>loading starships</h1>}</div>;
}
