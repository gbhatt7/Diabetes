import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="footercontainer">
                <div className="contact" id='contact'>
                    <h1>Diabetescare</h1>
                    <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Mail Open</title><path d="M441.6 171.61L266.87 85.37a24.57 24.57 0 00-21.74 0L70.4 171.61A40 40 0 0048 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 00-22.44-35.78z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M397.33 368L268.07 267.46a24 24 0 00-29.47 0L109.33 368M309.33 295l136-103M61.33 192l139 105" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                    </div>
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#home">ChatBot Ellis</a>
                </div>
                <div className="diet">
                    <a href='#diet'>Diet</a>
                    <a href='#what'>What to eat?</a>
                    <a href='#when'>When to eat</a>
                    <a href='#exercise'>Exercises to do</a>
                    <a href='#plan'>Custom Diet Plan</a>
                </div>
            </div>
            <div className="footcontainer">
                <h4>@diabetescare.ai</h4>
            </div>
        </>
    )
}
