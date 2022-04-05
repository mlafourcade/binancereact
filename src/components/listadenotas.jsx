
import CardNotas from "./cardnota";
import React, { Component } from "react";


export default class ListaDeNotas extends Component {
    render() {
        return(
            <ul>
                {Array.of("Ítem 1", "Ítem 2", "Ítem 3").map((texto, index) => {
                    return (
                        <li key={index}>
                            <div>{texto}</div>
                            <CardNotas />
                        </li>
                    )
                })}                
            </ul>
        );
    }
}






