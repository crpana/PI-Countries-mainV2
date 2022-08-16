import React from "react";
import styl from './card.module.css';
export default function Card({flag,name,continent,id}){
    return (
        <div className={styl.card}>
            <img src={flag}/>
            <h2>{name}</h2>
            <h3>{continent}</h3>
        </div>
    );

}