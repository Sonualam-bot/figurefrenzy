import { createContext } from "react";
import { useState, useEffect } from "react";

export const AddressContext = createContext()

export const AddressProvider = ({ children }) => {


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
    const [selectedAddress, setSelectedAddress] = useState(0);

    const addressForOrder = addresses[selectedAddress]


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
        setSelectedAddress(0);
        setAddress(selectedAddr);
        setShowForm(true);
    };


    const handleDeleteAddress = (index) => {
        setAddresses(addresses.filter((_, i) => i !== index));
        setSelectedAddress(0);
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

    const value = {
        showForm,
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
        handleDeleteAddress,
        addressForOrder
    }


    return (
        <AddressContext.Provider value={value} >
            {children}

        </AddressContext.Provider>

    )
}