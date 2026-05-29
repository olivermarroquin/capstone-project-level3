import React, { useEffect, useState } from "react";
import VehicleList from "../components/VehicleList";
import VehicleService from "../services/VehicleService";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  async function getVehicles() {
    const { data, error } = await VehicleService.getVehicle();

    console.log("Vehicles:", data);

    if (error) {
      console.log(error);
      return;
    }
    setVehicles(data);
  }

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div>
      <h2>Vehicles inventory</h2>
      <VehicleList vehicles={vehicles} />
    </div>
  );
}
