import { useState } from "react";
import VehicleService from "../services/VehicleService";

export default function VehicleForm({ onVehicleAdded }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const newVehicle = {
      make,
      model,
      year: Number(year),
      price: Number(price),
      mileage: Number(mileage),
      description,
      image_url: imageUrl,
      status: "Available",
    };

    console.log("New vehicle:", newVehicle);

    const { error } = await VehicleService.addVehicle(newVehicle);

    if (error) {
      alert(error.message);
      return;
    }

    setMake("");
    setModel("");
    setYear("");
    setPrice("");
    setMileage("");
    setDescription("");
    setImageUrl("");

    onVehicleAdded();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Vehicle</h3>

      <input
        value={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Make"
      />

      <input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Model"
      />

      <input
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <input
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        placeholder="Mileage"
      />

      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Vehicle description"
      />

      <button type="submit">Add Vehicle</button>
    </form>
  );
}
