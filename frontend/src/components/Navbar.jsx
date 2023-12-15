import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar =()=>{
    

    return(
        <header>
        <div className="bg-blue-500 p-4">
            <Link to='/'>
                <h1>Workout Buddy</h1>
            </Link>
            <nav>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>

                </div>
            </nav>
        </div>
        </header>
    )
}