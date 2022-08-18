import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { postActivity, getCountries } from "../../redux/actions";

function Validar(input) {
    var regNombre = /[A-Za-z0-9]+/g;

    var error = {};
    if (!input.name) {
        error.name = 'ingrese nombre de actividad turistica';

    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
        error.name = "No se permite numero o caracteres especiales";
    }

    else if (input.difficulty < 1 || input.difficulty > 5) {   // [1,5]
        error.difficulty = 'ingrese valores entre 1 y 5';
    } else if (input.duration < 0) {
        error.duration = 'ingrese un tiempo mayor o igual a cero';
    }
    return error;

}
// else if(){
//     error.name='nombre solo con letras' 

export default function CreateActivity() {
    const dispatch = useDispatch();
    const paises = useSelector((state) => state.countries);
    const [error, setError] = useState({});
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: ['Verano', ' Otoño', 'Invierno', 'Primavera'],
        countries: [],
    })



    useEffect(() => {
        dispatch(getCountries())
    }, [])


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })

        setError(Validar({
            ...input,
            [e.target.name]: e.target.value,
        }))
        console.log(input);
    }


    function handleCheck(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                season: e.target.value
            })
        }
    }

    function handleSelect(e) {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input);
        dispatch(postActivity(input))
        alert('se creo con exito!!')
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: ['Verano', ' Otoño', 'Invierno', 'Primavera'],
            countries: [],
        })
    }



    return (
        <div>
            <Link to='/home'>
                <button>Volver Home</button>
            </Link>
            <h1>Agregar Actividad</h1>


            <form onSubmit={(e) => handleSubmit(e)}>

                <div>
                    <label>Nombre </label>
                    <input type='text' value={input.name} name='name' onChange={handleChange}></input>
                    {
                        error.name && (
                            <p>{error.name}</p>
                        )
                    }
                </div>


                <div>
                    <label>Dificultad </label>
                    <input type='number' value={input.difficulty} name='difficulty' onChange={handleChange}></input>
                    {
                        error.difficulty && (
                            <p>{error.difficulty}</p>
                        )
                    }
                </div>


                <div>
                    <label>Duración </label>
                    <input type='number' value={input.duration} name='duration' onChange={handleChange}></input>
                    {
                        error.duration && (
                            <p>{error.duration}</p>
                        )
                    }
                </div>


                <div>
                    <label>Temporada </label>

                    <label><input type='checkbox' value='Verano' name='Verano' onChange={e => handleCheck(e)}></input>Verano</label>
                    <label><input type='checkbox' value='Otoño' name='Otoño' onChange={e => handleCheck(e)}></input>Otoño</label>
                    <label><input type='checkbox' value='Invierno' name='Invierno' onChange={e => handleCheck(e)}></input>Invierno</label>
                    <label><input type='checkbox' value='Primavera' name='Primavera' onChange={e => handleCheck(e)}></input>Primavera</label>

                </div>
                <select onChange={e => handleSelect(e)}>
                    {
                        paises.map((a) => (
                            <option value={a.name}>{a.name}</option>
                        ))
                    }
                </select>

                <div>
                    {
                        input.countries.map(p => p + ', ')
                    }
                </div>



                <div>
                    {
                        error.name || !input.difficulty || !input.duration || !input.countries?
                            <button type="submit" disabled={true}>Crear Actividad1</button> :
                            <button type="submit" disabled={false}>Crear Actividad2</button>
                    }

                </div>
            </form>
        </div>
    );


}
