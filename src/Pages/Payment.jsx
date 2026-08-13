import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./pages.css";

function Payment() {
  const { cart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const total =
    totalPrice || cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const handlePayment = () => {
    alert("Payment Successful");
    navigate("/success");
  };

  return (
    <div>
      <div className="payment-container">
        <div className="payment-card">
          <h4>Payment</h4>
          <p>Total: ₹ {total.toFixed(2)}</p>
          <input type="text" placeholder="Card Holder Name" />
          <input type="number" placeholder="Card Number" />
          <input type="date" placeholder="Expiry date" />
          <input type="number" placeholder="CVV" />
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}
export default Payment;
