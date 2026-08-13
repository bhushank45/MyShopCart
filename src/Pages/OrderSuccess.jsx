import { useNavigate } from "react-router-dom";
import "./pages.css";

function OrderSuccess() {
  var navigate = useNavigate();
  return (
    <div>
      <div className="success-container">
        <div className="success-card">
          <h4>Order Placed Successfully</h4>
          <h5>Thank you for Shoping with Shopcart</h5>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
export default OrderSuccess;
