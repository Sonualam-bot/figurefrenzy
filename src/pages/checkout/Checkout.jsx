import { useContext } from "react";
import { Address } from "../profile/Address";
import { CartContext } from "../../context/CartContext";

import { toast } from "react-toastify";

import { useNavigate } from "react-router";
import { Header } from "../../header/Header";
import { AddressContext } from "../../context/AddressContext";

export const Checkout = () => {
  const { cartItems, totalPrice, totalDiscount, deliveryCharge, finalPrice } =
    useContext(CartContext);
  const {
    addresses,
    setShowForm,
    showForm,
    selectedAddress,
    handleAddressSelect,
    handleEditAddress,
    handleDeleteAddress,
  } = useContext(AddressContext);
  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_W4XQY3kmlZ1HXe",
      currency: "INR",
      amount: amount * 100,
      name: "Renon",
      description: "Thanks for purchasing",
      image: "logo",

      handler: function (response) {
        const paymentId = response.razorpay_payment_id;

        toast.success("Payment is successfull");
        navigate(
          "/profile/history",
          localStorage.setItem("paymentId", paymentId)
        );
      },

      prefill: {
        name: "Figure Frenzy",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    // navigate('/profile/history', { state: { paymentId } })
  };

  const handleUserAddress = () => {
    if (addresses.length === 0) {
      toast.error("Please add an address first");
      return;
    }

    displayRazorpay(Math.round(finalPrice));
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <div className="checkout_container">
        <div className="checkout_address">
          <u>
            <h1>Checkout</h1>
          </u>
          <button className="showform_button" onClick={() => setShowForm(true)}>
            Add Address
          </button>
        </div>

        {showForm && <Address checkout />}

        <div className="address_filled">
          {addresses.map((addr, index) => (
            <div
              key={index}
              className="show_address"
              onClick={() => handleAddressSelect(index)}
            >
              <input
                type="radio"
                name="selectedAddress"
                checked={index === selectedAddress}
              />
              <p>
                {" "}
                <span> {addr.name} </span>{" "}
              </p>
              <span>{addr.city}</span>,<span>{addr.address} </span>,
              <span>{addr.state} </span>,<span>{addr.pincode} </span>
              <p>
                {" "}
                <span>Mobile No </span>: {addr.mobile}
              </p>
              <div className="show_addresss_buttons">
                <button type="button" onClick={() => handleEditAddress(index)}>
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteAddress(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="checkout_price">
          <h3>Price Details</h3>
          <hr />
          <div className="price_details">
            <p>Price ({cartItems.length}) </p>
            <h3>&#x20B9; {Math.round(totalPrice)} </h3>
          </div>
          <div className="price_details">
            <p>Discount </p>
            <h3> - &#x20B9; {Math.round(totalDiscount)} </h3>
          </div>
          <div className="price_details">
            <p>Delivery Charge</p>
            <h3>&#x20B9; {deliveryCharge} </h3>
          </div>
          <hr />
          <div className="price_details">
            <p>Total Price</p>
            <h3>&#x20B9; {Math.round(finalPrice)} </h3>
          </div>
          <hr />
          <button className="remove_button" onClick={handleUserAddress}>
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};
