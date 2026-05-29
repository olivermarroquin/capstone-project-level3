import React from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleList({ vehicles }) {
  return (
    <>
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          id={vehicle.id}
          make={vehicle.make}
          model={vehicle.model}
          year={vehicle.year}
          price={vehicle.price}
          status={vehicle.status}
        />
      ))}
    </>
  );
}
