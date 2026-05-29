import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h2>Find Your Next Vehicle</h2>

      <p>
        CarHub helps customers browse dealership inventory, view vehicle
        details, and submit inquiries on cars they are interested in.
      </p>

      <div className="home-actions">
        <Link className="button" to="/vehicles">
          Browse Vehicles
        </Link>

        <Link className="button" to="/admin">
          Dealer Admin
        </Link>
      </div>
    </section>
  );
}
