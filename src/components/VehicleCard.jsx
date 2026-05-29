import React from "react";
import { Link } from "react-router-dom";

export default function VehicleCard({ id, make, model, year, price, status }) {
  return (
    <div>
      <h3>
        {year} {make} {model}
      </h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
      <Link to={`/vehicles/${id}`}>View Details</Link>
      <hr />
    </div>
  );
}
