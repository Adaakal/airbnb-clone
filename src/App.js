/* eslint-disable array-callback-return */
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
    const cardData = data.map(data => {
        return <Card

            img={data.coverImg}
            rating={data.stats.rating}
            reviewCount={data.stats.reviewCount}
            location={data.location}
            title={data.title}
            price={data.price}
            openSpots={data.openSpots}
        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardData}
            </section>
        </div>
    )
}