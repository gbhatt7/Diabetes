import React from 'react'
import './header.css'

export default function Header() {
    let styleheader = {
        fontFamily: 'Georgia'
    }
    return (
        <header className='header' style={styleheader}>
            <div className="logo">
                <h1>kommunicate</h1>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Problems</a></li>
                    <li><a href="#">Diet</a></li>
                </ul>
            </nav>
            <a href="#"><button>Contact Us</button></a>
        </header>
    )
}
