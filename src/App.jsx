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
import { Navigate } from "react-router-dom";

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
  console.log("App session:", session);

  return (
    <>
      <Header session={session} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route
            path="/login"
            element={session ? <Navigate to="/admin" /> : <Login />}
          />
          s
          <Route
            path="/admin"
            element={session ? <Admin /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
