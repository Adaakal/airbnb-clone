import React from "react"
import GroupPic from "../components/images/Group77.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={GroupPic} alt="Cluster of pictures" />
            <text>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </text>
        </section>
        
    )
}
