import { Link } from "react-router-dom";

export default function VehicleCard({
  id,
  make,
  model,
  year,
  price,
  mileage,
  status,
  description,
  image_url,
  isAdmin,
  onDelete,
  onToggleStatus,
}) {
  return (
    <div className="card">
      <img src={image_url} alt={`${year} ${make} ${model}`} width="300" />

      <h3>
        {year} {make} {model}
      </h3>

      <p>Price: ${price}</p>
      <p>Mileage: {mileage}</p>
      <p>Status: {status}</p>
      <p>{description}</p>

      {!isAdmin && <Link to={`/vehicles/${id}`}>View Details</Link>}

      {isAdmin && (
        <div className="card-actions">
          <button onClick={() => onToggleStatus(id, status)}>
            Mark {status === "Available" ? "Sold" : "Available"}
          </button>

          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      )}

      <hr />
    </div>
  );
}
