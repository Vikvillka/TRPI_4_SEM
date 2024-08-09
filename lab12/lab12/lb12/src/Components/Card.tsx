import React from "react";
import {Film} from "../Scripts/Base";
import "../Css/Card.css"
import { Link } from "react-router-dom";

function Card(props:{film:Film}):JSX.Element{
    return(
        <div className="Card">
            <figure>
                <div className="imgCont">
                    <img src={props.film.imgSrc} alt={props.film.name}/>
                </div>
                <figcaption>
                <h3>{props.film.name}</h3>
                    <div className="info">
                        <p className="year">{props.film.year}</p>
                        <p className="type">{props.film.type}</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card;

































//<Link className="type" to = {"/"+props.film.type}>{props.film.type}</Link>