import React, { useEffect, useState } from "react";
import VehicleList from "../components/VehicleList";
import VehicleService from "../services/VehicleService";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [filter, setFilter] = useState("All");

  async function getVehicles() {
    const { data, error } = await VehicleService.getVehicles();

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
      : vehicles.filter((vehicle) => vehicle.status === filter);

  return (
    <div>
      <h2>Vehicle Inventory</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Available")}>Available</button>
        <button onClick={() => setFilter("Sold")}>Sold</button>
      </div>

      <VehicleList vehicles={filteredVehicles} isAdmin={false} />
    </div>
  );
}
