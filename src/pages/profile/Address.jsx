import React, { useContext } from "react";
import { stateArr } from "./stateArr";

import { Profile } from "./Profile";

import { AddressContext } from "../../context/AddressContext";

export const Address = ({ checkout }) => {
  const {
    address,
    handleAddressInput,
    handleAddAddress,
    handleReset,
    handleRandom,
    setShowForm,
  } = useContext(AddressContext);

  return (
    <>
      {checkout ? " " : <Profile />}

      <div className="modal-overlay">
        <div className="address_form_container">
          <u>
            <h1>Please Enter Your Address Details</h1>
          </u>
          <br />
          <span className="close-button" onClick={() => setShowForm(false)}>
            &times;
          </span>
          <form className="address_form">
            <input
              type="text"
              name="name"
              placeholder="name"
              value={address.name}
              onChange={handleAddressInput}
              required
            />

            <input
              type="tel"
              name="mobile"
              pattern="[0-9]{10}"
              placeholder="mobile no."
              value={address.mobile}
              onChange={handleAddressInput}
              required
            />

            <input
              type="text"
              name="pincode"
              placeholder="pincode"
              value={address.pincode}
              onChange={handleAddressInput}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="city"
              value={address.city}
              onChange={handleAddressInput}
              required
            />

            <textarea
              name="address"
              rows="4"
              cols="20"
              placeholder="address"
              value={address.address}
              onChange={handleAddressInput}
              required
            />

            <input
              className="address_alternate_mobile"
              type="tel"
              name="alternateMobile"
              placeholder="alternate number(optional)"
              value={address.alternateMobile}
              onChange={handleAddressInput}
              pattern="[0-9]{10}"
              required
            />

            <select
              className="address_choose_state"
              name="state"
              value={address.state}
              onChange={handleAddressInput}
            >
              <option>Choose state</option>
              {stateArr.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
            <div className="address_form_buttons">
              <button type="button" onClick={handleAddAddress}>
                Add
              </button>
              <button type="button" onClick={handleReset}>
                Reset
              </button>

              <button type="button" onClick={handleRandom}>
                Random
              </button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
