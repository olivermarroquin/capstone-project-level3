import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VehicleService from "../services/VehicleService";

export default function VehicleDetails() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    async function getVehicle() {
      const { data, error } = await VehicleService.getVehicleById(id);

      console.log("Single vehicle:", data);

      if (error) {
        console.log(error);
        return;
      }
      setVehicle(data);
    }
    getVehicle();
  }, [id]);

  if (!vehicle) {
    return <p>Loading vehicle...</p>;
  }

  return (
    <section>
      <h2>
        {vehicle.year} {vehicle.make} {vehicle.model}
      </h2>

      <img
        src={vehicle.image_url}
        alt={`${vehicle.year} ${vehicle.make}`}
        width="400"
      />

      <p>Price: ${vehicle.price}</p>
      <p>Mileage: {vehicle.mileage}</p>
      <p>Status: {vehicle.status}</p>
      <p>{vehicle.description}</p>
    </section>
  );
}
