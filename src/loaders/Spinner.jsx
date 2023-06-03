import React from "react";

export const Spinner = () => {
    return (
        <div className="blades">
            <div style={{ transform: "rotate(72deg) translateY(5px)" }}></div>
            <div style={{ transform: "rotate(144deg) translateY(5px)" }}></div>
            <div style={{ transform: "rotate(216deg) translateY(5px)" }}></div>
            <div style={{ transform: "rotate(288deg) translateY(5px)" }}></div>
            <div style={{ transform: "rotate(360deg) translateY(5px)" }}></div>
        </div>
    );
};


