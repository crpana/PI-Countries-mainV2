import { Link } from 'react-router-dom';
import React from 'react';
import a from './landingpage.module.css';

export default function LandingPage() {
    return (
        
        <div className={a.landingpage}> 
            {/* <img src="./landin2.jpg" alt="fondodelandind" /> */}
            <div >
                <h3 className={a.header}>Welcome Countries App Page!!</h3>
                <Link to='/home'>
                    <button className={a.boton}>ENTER</button>
                </Link>
            </div>

        </div>

    )
}