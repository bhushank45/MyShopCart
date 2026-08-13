import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//IMPORT CART CONTEXT
function Payment(){
    var{cart}=useContext(CartContext);
    var total=cart.reduce((sum,item)=>sum+item.price,0);
    var handlePayment=()=>{
        alert("Payment Successful");
        navigate("/success");
    }
    return(
        <div>
            <div className="payment-container">
                <div className="payment-card">
                    <h4>Payment</h4>
                    <p>Total:{total}</p>
                    <input type="text" placeholder="Card Holder Name"/>
                    <input type="number" placeholder="Card Number"/>
                    <input type="date" placeholder="Expiry date"/>
                    <input type="number" placeholder="CVV"/>
                    <button onClick={handlePayment}>Pay Now</button>
                </div>

            </div>
            <h4>Do Payment</h4>
        </div>
    )
}
export default Payment;