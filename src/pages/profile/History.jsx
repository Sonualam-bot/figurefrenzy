import { Profile } from "./Profile";
import { useContext } from "react";
import { AddressContext } from "../../context/AddressContext";
import { CartContext } from "../../context/CartContext";

export const History = () => {
  // const { paymentId } = location.state || {}; // Destructure paymentId from location.state
  const { addresses, addressForOrder } = useContext(AddressContext);
  const { finalPrice, cartItems } = useContext(CartContext);

  const paymentId = localStorage.getItem("paymentId");

  console.log("thsi is addresses from history page", typeof addresses);

  let today = new Date().toISOString().slice(0, 10);

  return (
    <>
      <Profile />

      <div className="order_container">
        {paymentId ? (
          <div className="order_main_details">
            <div className="order_payment_details">
              <p>
                Payment Id: <span>{paymentId}</span>
              </p>
              <p>
                Order Date : <span> {today} </span>{" "}
              </p>
              <p>
                Total Amount : <span>₹{Math.round(finalPrice)}</span>{" "}
              </p>
              <div>
                Order address :{/* <p> */}
                <span> {addressForOrder?.city}</span>
                <span> {addressForOrder?.state} </span>
                <p>
                  Mobile: <span> {addressForOrder?.mobile} </span>{" "}
                </p>
                <p>
                  Pin:- <span> {addressForOrder?.pincode} </span>{" "}
                </p>
                {/* </p> */}
              </div>
            </div>

            <p className="order_items_container">
              {cartItems?.map((el) => {
                return (
                  <div className="order_details_div">
                    <div className="order_img_div">
                      <img src={el.image_url} alt="elemnt" />
                    </div>

                    <div className="order_summary">
                      <p> {el.name} </p>
                      <p>
                        {" "}
                        ₹{Math.round(el.price)}{" "}
                        <span> ₹{Math.round(el.originalPrice)}</span>{" "}
                      </p>
                      <p> {el.discount} %OFF </p>
                      <p> Quantity: {el.qty} </p>
                    </div>
                  </div>
                );
              })}
            </p>
          </div>
        ) : (
          "No Order History"
        )}
      </div>
    </>
  );
};
