import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
