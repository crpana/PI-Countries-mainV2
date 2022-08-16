import React from "react";
import a from '../Paginado/paginado.css';

export default function Paginado({ countryPerPage, paises, paginado }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(paises / countryPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination" >
                {pageNumbers?.map(number => (
                    <li>
                        <button onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))}

            </ul>
        </nav>

    )

}