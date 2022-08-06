import React from 'react'
import './about.css'
import diabetesimg from "./diabetesimage.png"
import aboutus from "./aboutus.jpg"

export default function About() {
    let styleh = {
        fontFamily: 'Montserrat',
        fontSize: '3.2rem',
        textAlign: 'center'
    }
    let stylep = {
        fontFamily: 'Montserrat',
        fontWeight: 'lighter',
        fontSize: '1.3rem',
        paddingLeft: '20px',
        paddingRight: '20px'
    }
    return (
        <>
            <div className="diabetescontainer" id='about'>
                <div className="container1">
                    <h1 style={styleh}>What is Diabetes?</h1>
                    <p style={stylep}>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy. Sometimes your body doesn’t make enough—or any—insulin or doesn’t use insulin well. Glucose then stays in your blood and doesn't reach your cells.</p>
                </div>
                <div className="container2">
                    <img src={diabetesimg} alt="" />
                </div>
            </div>
            <div className='aboutcontainer'>
                <div className="container1">
                    <img src={aboutus} alt="" />
                </div>
                <div className="container2">
                    <h1 style={styleh}>About Us</h1>
                    <p style={stylep}>We are a small team which focuses to help the people suffering with Diabetes and its efeects by making a small AI bot with which you can discuss your problems and dealing with them.</p>
                </div>
            </div>
        </>
    )
}
