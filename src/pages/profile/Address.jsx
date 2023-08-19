import React, { useContext } from "react";
import { stateArr } from "./stateArr";

import { Profile } from "./Profile";


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
                            {/* <div className="address_some_input"> */}
                            <div className="two_address_field" >
                                <div>
                                    {/* <label htmlFor="name" >Name</label> */}
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
                                    {/* <label htmlFor="mobile" >Phone</label> */}
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
                                    {/* <label htmlFor="pincode" >Pincode</label> */}
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
                                    {/* <label htmlFor="city" >City</label> */}
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
                                    {/* <label htmlFor="alternate-mobile" >Alternate Mobile</label> */}
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
                                </div>
                                <div>
                                    {/* <label htmlFor="state" >State</label> */}
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


                            {/* </div> */}


                            <div className="address_buttons">
                                <div className="address_two_btns_first" >
                                    <button type="button" onClick={handleAddAddress}>Add</button>
                                    <button type="button" onClick={handleReset}>Reset</button>
                                </div>

                                <div className="address_two_btns_second">
                                    <button type="button" onClick={handleRandom}>Random</button>
                                    <button type="button" onClick={() => setShowForm(!showForm)}>Cancel</button>
                                </div>


                            </div>
                        </form> : <button className="showform_button" onClick={() => setShowForm(!showForm)}>Add Address</button>}
                </div>

                <div className="address_filled"  >
                    {addresses.map((addr, index) => (
                        <div key={index} className="show_address" onClick={() => handleAddressSelect(index)} >
                            <input
                                type="radio"
                                name="selectedAddress"
                                checked={index === selectedAddress}

                            />
                            <p> <span> {addr.name} </span> </p>
                            <span>{addr.city}</span>,
                            <span>{addr.address} </span>,<span>{addr.state} </span>,<span>{addr.pincode} </span>

                            <p> <span>Mobile No </span>: {addr.mobile}</p>


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
