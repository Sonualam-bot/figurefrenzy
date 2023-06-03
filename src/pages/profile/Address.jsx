import React, { useState, useEffect, useContext } from "react";
import { stateArr } from "./stateArr";

import { Profile } from "./Profile";
import { NavLink } from "react-router-dom";

import { AddressContext } from "../../context/AddressContext";


export const Address = ({ checkout }) => {
    const { showForm,
        address,
        handleAddressInput,
        handleAddAddress,
        handleReset,
        handleRandom,
        setShowForm,
        addresses,
        selectedAddress,
        handleAddressSelect,
        handleEditAddress,
        handleDeleteAddress } = useContext(AddressContext)





    return (
        <>
            {checkout ? " " : <Profile />}

            <div className="address_form_container" >

                <div className="form_container" >
                    {showForm ?
                        <form className="address_form">
                            <div className="address_some_input">
                                <div className="two_address_field" >
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="name"
                                            value={address.name}
                                            onChange={handleAddressInput}
                                            required
                                        />
                                    </div>
                                    <div>

                                        <input
                                            type="tel"
                                            name="mobile"
                                            pattern="[0-9]{10}"
                                            placeholder="mobile no."
                                            value={address.mobile}
                                            onChange={handleAddressInput}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="two_address_field">
                                    <div>
                                        <input
                                            type="text"
                                            name="pincode"
                                            placeholder="pincode"
                                            value={address.pincode}
                                            onChange={handleAddressInput}
                                            required
                                        />
                                    </div>

                                    <div>

                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="city"
                                            value={address.city}
                                            onChange={handleAddressInput}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="textarea">
                                <textarea
                                    name="address"
                                    rows="4"
                                    cols="20"
                                    placeholder="address"
                                    value={address.address}
                                    onChange={handleAddressInput}
                                    required
                                />
                            </div>
                            <div className="two_address_field">
                                <div>
                                    <input
                                        className="address_alternate_mobile"
                                        type="tel"
                                        name="alternateMobile"
                                        placeholder="alternate ph(optional)"
                                        value={address.alternateMobile}
                                        onChange={handleAddressInput}
                                        pattern="[0-9]{10}"
                                        required
                                    />
                                </div>
                                <div>
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
                                </div>

                            </div>
                            <div className="address_buttons">
                                <button type="button" onClick={handleAddAddress}>Add</button>
                                <button type="button" onClick={handleReset}>Reset</button>
                                <button type="button" onClick={handleRandom}>Random</button>
                                <button type="button" onClick={() => setShowForm(!showForm)}>Cancel</button>
                            </div>
                        </form> : <button className="showform_button" onClick={() => setShowForm(!showForm)}  >Add Address</button>}
                </div>

                <div className="address_filled"  >
                    {addresses.map((addr, index) => (
                        <div key={index} className="show_address" >
                            <input
                                type="radio"
                                name="selectedAddress"
                                checked={index === selectedAddress}
                                onChange={() => handleAddressSelect(index)}
                            />
                            <p> Name : {addr.name}</p>
                            <p>Mobile No : {addr.mobile}</p>
                            <p>Pincode : {addr.pincode} </p>
                            <p>City : {addr.city} </p>
                            <p>Address : {addr.address} </p>
                            <p>ALternate Mobile : {addr.alternateMobile} </p>
                            <p>State : {addr.state} </p>
                            {/* Display other address details */}

                            <div className="show_addresss_buttons" >
                                <button type="button" onClick={() => handleEditAddress(index)}>
                                    Edit
                                </button>
                                <button type="button" onClick={() => handleDeleteAddress(index)}>
                                    Delete
                                </button>
                            </div>



                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
