import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar =()=>{
    

    return(
        <header>
        <div className="bg-blue-500 p-4">
            <Link to='/'>
                <h1>Workout Buddy</h1>
            </Link>
        </div>
        </header>
    )
}