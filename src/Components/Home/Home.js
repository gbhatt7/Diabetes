import React from 'react'
import './home.css'
import worldmap from "./worldmap2.png"

export default function Home() {
    let stylehome = {
        fontFamily: 'Tabitha'
    }
    return (
        <div className='homecontainer' style={stylehome}>
            <h1>422 milliion people</h1>
            <h2>affected with Diabetes..</h2>
            <img src="worldmap" alt="" />
        </div>
    )
}
