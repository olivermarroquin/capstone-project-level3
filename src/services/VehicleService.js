import { supabase } from "../supabase";

class VehicleService {
  async getVehicle() {
    return await supabase
      .from("vehicles")
      .select("*")
      .order("id", { ascending: true });
  }

  async getVehicleById(id) {
    return await supabase.from("vehicles").select("*").eq("id", id).single();
  }

  async addVehicle(vehicle) {
    return await supabase.from("vehicles").insert(vehicle);
  }

  async updateVehicle(id, updates) {
    return await supabase.from("vehicles").update(updates).eq("id", id);
  }

  async deleteVehicle(id) {
    return await supabase.from("vehicles").delete().eq("id", id);
  }
}

export default new VehicleService();
