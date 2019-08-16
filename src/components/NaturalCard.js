import React, {Component} from "react";
import "./Natural.scss";
import {Label, Image} from "semantic-ui-react";

const NaturalCard = (props) => {

    return (
        <div className="natural-card">
            <h2>{props.title}</h2>
            <Label as='a' image>{props.date}</Label>
            <Image src={props.url} alt="the moon" fluid></Image>
            <p><b>{props.desc}</b></p>
        </div>
    );
};

export default NaturalCard;