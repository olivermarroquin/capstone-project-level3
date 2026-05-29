import React from "react";
import { Link } from "react-router-dom";

export default function VehicleCard({
  id,
  make,
  model,
  year,
  price,
  mileage,
  status,
  description,
  image_url,
}) {
  return (
    <div>
      <img src={image_url} alt={`${year} ${make} ${model}`} width="300" />
      <h3>
        {year} {make} {model}
      </h3>
      <p>Price: ${price}</p>
      <p>Mileage: {mileage}</p>
      <p>Status: {status}</p>
      <p>{description}</p>
      <Link to={`/vehicles/${id}`}>View Details</Link>
      <hr />
    </div>
  );
}
