import React from 'react'
import './about.css'

export default function About() {
    let styleabout = {
        fontFamily: 'Tabitha'
    }
    let heading = {
        fontWeight: 'lighter',
        fontSize: '60px'
    }
    return (
        <>
            <div className="diabetes" style={styleabout}>
                <h1 style={heading}>What is Diabetes?</h1>
                <p>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy. Sometimes your body doesn’t make enough—or any—insulin or doesn’t use insulin well. Glucose then stays in your blood and doesn't reach your cells.</p>
            </div>
            <div className='aboutcontainer' style={styleabout}>
                <h1 style={heading}>About Us</h1>
                <p>We are a small team which focuses to help the people suffering with Diabetes and its efeects by making a small AI bot with which you can discuss your problems and dealing with them.</p>
            </div>
        </>
    )
}
