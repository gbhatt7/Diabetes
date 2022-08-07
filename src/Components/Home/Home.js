import React from 'react'
import './home.css'
import worldmap from "./worldmap2.png"

export default function Home() {
    return (
        <div className='homecontainer' id='home'>
            <div className="text">
                <h1>422 milliion people</h1>
                <h2>affected with Diabetes..</h2>
            </div>
            <img src={worldmap} alt="" />
        </div>
    )
}
