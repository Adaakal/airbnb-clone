import React from "react"
import Star from "../components/images/Star1.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="Class reference"className="katie"/>
            <div className="soldout">SOLD OUT</div>
            <div classsName="card--stats">
                <img src={Star} alt="star" className="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
                
                
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span>From ${props.price}</span> / person</p>
        </div>
    )
}