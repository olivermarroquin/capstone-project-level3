export default function InquiryList({ inquiries }) {
  return (
    <div>
      <h2>Customer Inquiries</h2>

      {inquiries.map((inquiry) => (
        <div key={inquiry.id}>
          <h3>{inquiry.customer_name}</h3>

          <p>Email: {inquiry.customer_email}</p>
          <p>Phone: {inquiry.customer_phone}</p>
          <p>Message: {inquiry.message}</p>

          {inquiry.vehicles && (
            <p>
              Vehicle: {inquiry.vehicles.year} {inquiry.vehicles.make}{" "}
              {inquiry.vehicles.model}
            </p>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
}
