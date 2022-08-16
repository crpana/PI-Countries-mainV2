import React from "react";
import { filterCountriesByContinent } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function ContinentFilter() {
    const dispatch = useDispatch();

    function handleFilterContinent(e) {
        dispatch(filterCountriesByContinent(e.target.value))
    }

    return (
        <div>
            <select onChange={e => handleFilterContinent(e)}>

                <option>Continent</option>

                <option value='Africa'>Africa</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='North America'>North America</option>
                <option value='Oceania'>Oceania</option>
                <option value='South America'>South America</option>
            </select>

        </div>

    );
}