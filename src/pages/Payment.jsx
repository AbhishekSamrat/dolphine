import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { makePayment } from "../api";

const Payment = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const res = await makePayment({ userId, amount: 500 });
      if (res.data.status === "success") {
        alert("Payment Successful!");
        navigate(`/assessment/${userId}`);
      } else {
        alert("Payment Failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error processing payment");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment</h2>
      <p>Amount: ₹500</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
