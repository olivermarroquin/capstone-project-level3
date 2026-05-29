import { Link } from "react-router-dom";
import { supabase } from "../supabase";

export default function Header({ session }) {
  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <header>
      <h1>CarHub</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/admin">Dealer Admin</Link>

        {session && <button onClick={handleSignOut}>Sign Out</button>}
      </nav>
    </header>
  );
}
