import React, {useState, useEffect, Components} from "react";
import axios from "axios";
import NaturalCard from "./NaturalCard";
import "./Natural.scss";
import {Image, Pagination, Button} from "semantic-ui-react";

const setTodaysDate = () => {
    let day = new Date();
    let dd = String(day.getDate()).padStart(2, '0');
    let mm = String(day.getMonth() + 1).padStart(2, '0');
    let yyyy = day.getFullYear();
    day = yyyy + '-' + mm + '-' + dd;
    return day;
}

const NaturalPhenoms = () => {
    let [naturals, setNaturals] = useState("none");
    let [date, setDate] = useState(setTodaysDate());
    let [inputElement, setInputElement] = useState({});
    
    useEffect(() => {
        setInputElement(document.querySelector("#dateInput"));
        setDate(inputElement.value);
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=jcmXeccxfgqv4RNBN9ud9UAEISYq3XMNAX37xTez&date=${date}`)
            .then((response) => {
                naturals = response.data;
                setNaturals(naturals);
            })
            .catch(error => {
                console.log(error.response)
            });
    }, [date]);

    return (
        <div>
             <div className="dropdown">
                <input type="date" id="dateInput"/>
                <Button primary>Search</Button>
            </div>
            <NaturalCard key='ss' url={naturals.url} title={naturals.title} desc={naturals.explanation} date={naturals.date}/>
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
            />
            <Image.Group size="small" className="image-group">
                <Image src={naturals.url}/>
                <Image src={naturals.url}/>
                <Image src={naturals.url}/>
            </Image.Group>
        </div>
    );
};

export default NaturalPhenoms;