# Database Design

## Vehicles Table

id
bigint

make
text

model
text

year
integer

price
numeric

mileage
integer

status
text

description
text

image_url
text

created_at
timestamp

---

## Inquiries Table

id
bigint

vehicle_id
foreign key

customer_name
text

customer_email
text

customer_phone
text

message
text

created_at
timestamp

---

## Relationships

One Vehicle
↓
Many Inquiries
