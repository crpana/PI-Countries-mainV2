import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNames } from "../../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInput(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(e.target);

    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNames(name))
    }

    return (

        <div>
            <input type='text' placeholder='Ingrese nombre...'
                onChange={ e=>handleInput(e)} value={name}/>
            <button type="submit" onClick={e=>handleSubmit(e)}>buscar</button>
        </div>

    );
}