import React, { useState } from "react";
import InquiryService from "../services/InquiryService";

export default function InquiryForm({ vehicleId }) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const newInquiry = {
      vehicle_id: vehicleId,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
      message,
    };

    console.log("New inquiry:", newInquiry);

    const { error } = await InquiryService.addInquiry(newInquiry);

    if (error) {
      alert(error.message);
      return;
    }

    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setMessage("");
    setSuccessMessage("Your inquiry has been submitted.");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Ask About This Vehicle</h2>
      <input
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Your name"
      />
      <input
        value={customerEmail}
        onChange={(e) => {
          setCustomerEmail(e.target.value);
        }}
        placeholder="Your email"
      />
      <input
        value={customerPhone}
        onChange={(e) => {
          setCustomerPhone(e.target.value);
        }}
        placeholder="Your phone"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      ></textarea>
      <button type="submit">Submit inquiry</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}
