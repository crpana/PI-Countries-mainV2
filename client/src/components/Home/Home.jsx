import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPagina, getCountries, filterCountriesByContinent, orderByCountryName, orderByPopulation, getActivity } from "../../redux/actions";
import { Link } from 'react-router-dom';

import Paginado from "../Paginado/Paginado";
import SearchBar from "../Search/SearchBar";
import ActivityFilter from '../ActivityFilter/ActivityFilter';
import Cards from "../Cards/Cards";
import ContinentFilter from "../ContinentFilter/ContinentFilter";
import PopulationFilter from "../PopulationFilter/PopulationFilter";
import NameFilter from "../NameFilter/NameFilter";

export default function Home() {
    const dispatch = useDispatch();
    const paises = useSelector((state) => state.countries);

    //ORDENADO A-Z Z-A
    const [orden, setOrden] = useState('');


    //PAGINADO---------------------------------------------
    const currentPage = useSelector(state => state.currentPage);
    const [countryPerPage] = useState(10);

    //logica para mostrar 9 paises

    const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countryPerPage - 1;
    const indexOfFirstCountry = currentPage === 1 ? 0 : indexOfLastCountry - countryPerPage;

    const currentCountry = paises.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginado = (pageNumber) => {
        dispatch(setPagina(pageNumber))
    };


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])



    function handleClick(e) {
        e.preventDefault()
        dispatch(getCountries())
    }

    return (
        <div>
            <Link to='/activities'>Agregar Actividad Turistica</Link>
            <h3></h3>
            <button onClick={e => { handleClick(e) }}>Volver a cargar paises</button>


            <div>
                <SearchBar />
            </div>

            <div>

                <NameFilter setOrden={setOrden}></NameFilter>

                <PopulationFilter setOrden={setOrden} ></PopulationFilter>

                <ContinentFilter></ContinentFilter>

                <ActivityFilter></ActivityFilter>

                <Paginado countryPerPage={countryPerPage} paises={paises.length} paginado={paginado} />

                <Cards currentCountry={currentCountry}></Cards>

            </div>

        </div>
    );


}
