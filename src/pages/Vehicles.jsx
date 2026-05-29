import React, { useEffect, useState } from "react";
import VehicleList from "../components/VehicleList";
import VehicleService from "../services/VehicleService";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const filteredVehicles =
    filter === "All"
      ? vehicles
      : vehicles.filter((vehicles) => vehicles.status === filter);

  return (
    <div>
      <h2>Vehicle Inventory</h2>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Available")}>Available</button>
      <button onClick={() => setFilter("Sold")}>Sold</button>

      <VehicleList vehicles={filteredVehicles} />
    </div>
  );
}
