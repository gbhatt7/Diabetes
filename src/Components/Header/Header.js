import React from 'react'
import './header.css'

export default function Header() {
    let styleheader = {
        fontFamily: 'Montserrat'
    }
    return (
        <header className='header' style={styleheader}>
            <div className="logo">
                <h1>Diabetes Care</h1>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href='#about'><div className="text">About</div></a></li>
                    <li><a href='#problem'><div className="text">Problems</div></a></li>
                    <li><a href='#diet'><div className="text">Diet</div></a></li>
                </ul>
            </nav>
            <a href='#contact'><button>Contact Us</button></a>
        </header>
    )
}
