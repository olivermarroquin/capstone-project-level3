import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VehicleService from "../services/VehicleService";
import InquiryForm from "../components/InquiryForm";

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
    <>
      <section className="details">
        <div>
          <img
            src={vehicle.image_url}
            alt={`${vehicle.year} ${vehicle.make}`}
          />
        </div>

        <div>
          <h2>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h2>

          <p>
            <strong>Price:</strong> ${vehicle.price}
          </p>
          <p>
            <strong>Mileage:</strong> {vehicle.mileage}
          </p>
          <p>
            <strong>Status:</strong> {vehicle.status}
          </p>

          <p>{vehicle.description}</p>
        </div>
      </section>

      <InquiryForm vehicleId={vehicle.id} />
    </>
  );
}
