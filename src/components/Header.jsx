import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>CarHub</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/admin">Dealer Admin</Link>
      </nav>
    </header>
  );
}
