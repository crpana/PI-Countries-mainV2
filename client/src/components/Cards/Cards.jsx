import React from "react";
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import styl from './cards.module.css'
export default function Cards({ currentCountry }) {

    return (
        <div className={styl.cards}>
            {currentCountry?.map((c) => {
                return (
                    <Link to={`/home/${c.id}`}>
                        <Card flag={c.flag} name={c.name} continent={c.continent} key={c.id} />
                    </Link>
                );
            })
            }
        </div>
    );

} 