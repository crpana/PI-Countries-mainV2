import { Link } from 'react-router-dom';
import React from 'react';
import a from './landingpage.module.css';

export default function LandingPage() {
    return (
        <div className={a.landing}> 


            <div>
                <h3>Welcome Countries App Page!!</h3>
                <Link to='/home'>
                    <button className={a.boton}>ENTER</button>
                </Link>
            </div>

        </div>

    )
}