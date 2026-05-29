import VehicleCard from "./VehicleCard";

export default function VehicleList({ vehicles }) {
  return (
    <div>
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          id={vehicle.id}
          make={vehicle.make}
          model={vehicle.model}
          year={vehicle.year}
          price={vehicle.price}
          mileage={vehicle.mileage}
          status={vehicle.status}
          description={vehicle.description}
          image_url={vehicle.image_url}
        />
      ))}
    </div>
  );
}
