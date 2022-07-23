import React from 'react'
import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
    let styleheader = {
        fontFamily: 'Georgia'
    }
    return (
        <header className='header' style={styleheader}>
            <div className="logo">
                <h1>Diabetes Care</h1>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><Link><div className="text">About</div></Link></li>
                    <li><Link><div className="text">Problems</div></Link></li>
                    <li><Link><div className="text">Diet</div></Link></li>
                </ul>
            </nav>
            <Link><button>Contact Us</button></Link>
        </header>
    )
}
