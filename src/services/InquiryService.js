import { supabase } from "../supabase";

class InquiryService {
  async getInquiries() {
    return await supabase
      .from("inquiries")
      .select("*, vehicles(make, model, year)")
      .order("created_at", { ascending: false });
  }

  async addInquiry(inquiry) {
    return await supabase.from("inquiries").insert(inquiry);
  }
}

export default new InquiryService();
