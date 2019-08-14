import React, {useState, useEffect} from "react";
import axios from "axios";
import NaturalCard from "./NaturalCard";

const NaturalPhenoms = () => {

    let [naturals, setNaturals] = useState("none");

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=jcmXeccxfgqv4RNBN9ud9UAEISYq3XMNAX37xTez")
            .then((response) => {
                naturals = response.data;
                setNaturals(naturals);
            });
    }, []);

    return (
        <div>
            <NaturalCard key='ss' url={naturals.url} title={naturals.title} desc={naturals.explanation}/>
        </div>
    );
};

export default NaturalPhenoms;