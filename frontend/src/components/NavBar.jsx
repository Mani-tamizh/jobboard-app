import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='nav'>
            <div className="nav_links">
                <Link as={Link} to="/" className='link'>Home</Link>
            </div>
            <div>
                <h1 className='job_text'>Job Board App</h1>
            </div>
            <div></div>
        </div>
    )
}

export default NavBar