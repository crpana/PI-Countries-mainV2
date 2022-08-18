import React from "react";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styl from './countrydetail.module.css'
export default function CountryDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();


    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch])

    const miPais = useSelector((state) => state.countriesDetail);


    return (

        <div className={styl.containerPrincipal}>

            {
                Object.keys(miPais).length > 0 ?


                    <div  className={styl.pais}>
                        {/* <div className={styl.imgContainer}>
                            <img src={miPais.flag} />
                        </div> */}

                        <div>
                            <img src={miPais.flag} />
                            <h2>{miPais.id}</h2>
                            <h3>Pais: {miPais.name}</h3>
                            <h3>Continente: {miPais.continent}</h3>
                            <h3>Capital: {miPais.capital}</h3>
                            <h3>Subregion: {miPais.subregion}</h3>
                            <h3>Área: {miPais.area}</h3>
                            <h3>Población: {miPais.population}</h3>
                        </div>

                        <div>
                            <h2>Actividades Turísticas</h2>
                            {
                                miPais.activities.length > 0 ?
                                    miPais.activities.map(act =>
                                        <div>
                                            <h2>Nombre: {act.name}</h2>
                                            <h3>Dificultad: {act.difficulty}</h3>
                                            <h3>Duracion: {act.duration}</h3>
                                            <h3>Temporata: {act.season}</h3>
                                        </div>
                                    ) : (
                                        <div>
                                            <h2>No hay actividades creadas</h2>
                                            <Link to='/activities'>
                                                <button>Crear Actividad</button>
                                            </Link>
                                        </div>
                                    )

                            }
                        </div>

                    </div>


                    :
                    <p>loading...</p>

                    



            }
            
            <div  className={styl.headerBoton}>
                <Link to='/home'>
                    <button className={styl.boton}>Back to Home</button>
                </Link>
            </div>

        </div>
    )

}