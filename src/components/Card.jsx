import React from "react";
import '../Styles/Card.css'

export default function Card({ ship }) {
  return (
    <div className="card">
      <h1>Shipname: {ship.name}</h1>
      <div className="card-content">
        <h2>Model: {ship.model} </h2>
        <h2>Manufacturer: {ship.manufacturer}</h2>
      </div>
    </div>
  );
}
