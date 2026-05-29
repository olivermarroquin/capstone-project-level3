import { useEffect, useState } from "react";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";
import VehicleService from "../services/VehicleService";
import InquiryList from "../components/InquiryList";
import InquiryService from "../services/InquiryService";

export default function Admin() {
  const [vehicles, setVehicles] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  async function getVehicles() {
    const { data, error } = await VehicleService.getVehicles();

    console.log("Admin vehicles:", data);

    if (error) {
      console.log(error);
      return;
    }

    setVehicles(data);
  }

  async function getInquiries() {
    const { data, error } = await InquiryService.getInquiries();

    console.log("Customer inquiries:", data);

    if (error) {
      console.log(error);
      return;
    }

    setInquiries(data);
  }

  async function handleDelete(id) {
    const { error } = await VehicleService.deleteVehicle(id);

    if (error) {
      alert(error.message);
      return;
    }

    getVehicles();
  }

  async function handleToggleStatus(id, currentStatus) {
    const newStatus = currentStatus === "Available" ? "Sold" : "Available";

    const { error } = await VehicleService.updateVehicle(id, {
      status: newStatus,
    });

    if (error) {
      alert(error.message);
      return;
    }

    getVehicles();
  }

  useEffect(() => {
    getVehicles();
    getInquiries();
  }, []);

  return (
    <section>
      <h2>Dealer Dashboard</h2>

      <VehicleForm onVehicleAdded={getVehicles} />

      <h3>Manage Inventory</h3>

      <VehicleList
        vehicles={vehicles}
        isAdmin={true}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
      <InquiryList inquiries={inquiries} />
    </section>
  );
}
