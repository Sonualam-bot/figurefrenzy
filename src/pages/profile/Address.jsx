import React, { useState, useEffect } from "react";
import { stateArr } from "./stateArr";

export const Address = ({ checkout }) => {
    const [address, setAddress] = useState({
        name: "",
        mobile: "",
        pincode: "",
        city: "",
        address: "",
        alternateMobile: "",
        state: ""
    });
    const [addresses, setAddresses] = useState([]);
    const [showForm, setShowForm] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleAddressInput = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleAddAddress = (e) => {
        e.preventDefault();
        if (isAddressValid(address)) {
            setAddresses([...addresses, address]);
            setAddress({
                name: "",
                mobile: "",
                pincode: "",
                city: "",
                address: "",
                alternateMobile: "",
                state: ""
            });
        }
    };

    const isAddressValid = (address) => {
        for (let key in address) {
            if (key !== "alternateMobile" && address[key].trim() === "") {
                return false;
            }
        }
        return true;
    };


    const handleReset = () => {
        setAddress({
            name: "",
            mobile: "",
            pincode: "",
            city: "",
            address: "",
            alternateMobile: "",
            state: ""
        });
    };

    const handleRandom = () => {
        // Generate random values for the form fields
        const randomAddress = {
            name: "Random Name",
            mobile: "1234567890",
            pincode: "123456",
            city: "Random City",
            address: "Random Address",
            alternateMobile: "0987654321",
            state: "Random State"
        };
        setAddress(randomAddress);
    };


    const handleAddressSelect = (index) => {
        setSelectedAddress(index);
    };


    const handleEditAddress = (index) => {
        const selectedAddr = addresses[index];
        setAddresses(addresses.filter((_, i) => i !== index));
        setSelectedAddress(null);
        setAddress(selectedAddr);
        setShowForm(true);
    };


    const handleDeleteAddress = (index) => {
        setAddresses(addresses.filter((_, i) => i !== index));
        setSelectedAddress(null);
    };

    //this useeffect hook will retrieve the savdd addresses from localstorage on the first run when the component mounts. if addresses are found they are parsed from json and set in the addresses state
    useEffect(() => {
        const savedAddresses = localStorage.getItem("addresses");
        if (savedAddresses) {
            setAddresses(JSON.parse(savedAddresses));
        }
    }, []);


    //now this useEffect is trgerred each time when there is a change in the addresses state. and will update the saved address in the local storage by converting the addresses array to json and storing it
    useEffect(() => {
        localStorage.setItem("addresses", JSON.stringify(addresses));
    }, [addresses]);


    return (
        <>
            {showForm ?
                <form className="address_form">
                    <div className="address_some_input">
                        <div>
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
                        </div>
                        <div>
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
                    <div className="address_alternate_state">
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
                    <div className="address_buttons">
                        <button type="button" onClick={handleAddAddress}>Add</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                        <button type="button" onClick={handleRandom}>Random</button>
                        <button type="button" onClick={() => setShowForm(!showForm)}>Cancel</button>
                    </div>
                </form> : <button className="showform_button" onClick={() => setShowForm(!showForm)}  >Show Form</button>}

            <div>
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

                        {!checkout && <div>
                            <button type="button" onClick={() => handleEditAddress(index)}>
                                Edit
                            </button>
                            <button type="button" onClick={() => handleDeleteAddress(index)}>
                                Delete
                            </button>
                        </div>}



                    </div>
                ))}
            </div>
        </>
    );
};
