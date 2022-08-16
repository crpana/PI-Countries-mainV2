import React from "react";
import { useDispatch } from "react-redux";
import { setPagina ,orderByCountryName} from "../../redux/actions";

export default function NameFilter({setOrden}) {
    const dispatch = useDispatch();


    function handleOrderName(e) {
        e.preventDefault();
        dispatch(orderByCountryName(e.target.value))
        setPagina(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    return (
        <div>
            <select onChange={e => handleOrderName(e)}>
                <option value='All'>ordenar paises por nombre</option>
                <option value='ascendente'>A-Z</option>
                <option value='descendente'>Z-A</option>
            </select>
        </div>
    );

}