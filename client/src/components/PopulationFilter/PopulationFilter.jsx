import React from "react";
import { orderByPopulation ,setPagina } from "../../redux/actions";
import { useDispatch } from "react-redux";


export default function PopulationFilter({setOrden}) {
    const dispatch = useDispatch();


    function handleOrderPopulation(e) {
        e.preventDefault()
        dispatch(orderByPopulation(e.target.value))
        setPagina(1)
        setOrden(`Ordenado ${e.target.value}`)
    }



    return (
        <div>
            <select onChange={e => handleOrderPopulation(e)}>
                <option>Population</option>
                <option value='mayor'>high</option>
                <option value='menor'>lower</option>
            </select>

        </div>

    );

}