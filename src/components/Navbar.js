import React from "react"
import AirbnbLogo from "./images/airbnb1.png"

export default function Navbar() {
    return (
        <nav>
            <img src={AirbnbLogo} alt="Airbnb Logo" className="nav--logo" />
        </nav>
    )
}