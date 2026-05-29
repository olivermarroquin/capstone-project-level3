import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    }

    getSession();

    const { data } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log(event);
        setSession(currentSession);
      },
    );

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  console.log("Session:", session);

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
