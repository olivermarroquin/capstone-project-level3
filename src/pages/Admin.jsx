import { useEffect, useState } from "react";
import VehicleList from "../components/VehicleList";
import VehicleService from "../services/VehicleService";
import VehicleForm from "../components/VehicleForm";

export default function Admin() {
  const [vehicles, setVehicles] = useState([]);

  async function getVehicles() {
    const { data, error } = await VehicleService.getVehicles();

    console.log("Admin vehicles:", data);

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
    <section>
      <h2>Dealer Dashboard</h2>

      <VehicleForm onVehicleAdded={getVehicles} />

      <h3>Manage Inventory</h3>

      <VehicleList vehicles={vehicles} />
    </section>
  );
}
