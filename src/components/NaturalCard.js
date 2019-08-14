import React from "react";
import "./Natural.css";

const NaturalCard = (props) => {

    return (
        <div className="natural-card">
        <h2>{props.title}</h2>
        <img src={props.url} alt="the moon"></img>
        <p>{props.desc}</p>
        </div>
    );
};

export default NaturalCard;