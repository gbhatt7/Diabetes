import React from 'react'
import './header.css'

export default function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <a href='#home'><h1>Diabetescare</h1></a>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href='#home'><div className="text">Home</div></a></li>
                    <li><a href='#about'><div className="text">About</div></a></li>
                    <li><a href='#diet'><div className="text">Diet</div></a></li>
                </ul>
            </nav>
            <a href='#contact'><button>Contact Us</button></a>
        </header>
    )
}