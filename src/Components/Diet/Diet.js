import React from 'react'
import './diet.css'

export default function Diet() {
  let styleh = {
    fontFamily: 'Montserrat',
    fontSize: '3.2rem',
    textAlign: 'center',
    color: '#44d43b'
  }
  let stylep = {
    fontFamily: 'Montserrat',
    fontWeight: 'lighter',
    fontSize: '1.3rem',
    paddingLeft: '20px',
    paddingRight: '20px'
  }
  return (
    <div className='dietcontainer' id='diet'>
      <h1 style={styleh}>Diet</h1>
      <p style={stylep}>Diet is the sum of food consumed by a person or other organism. The word diet often implies the use of specific intake of nutrition for health reasons.</p>
      <div className="subcontainer">
        <div className="container1">
          <div className="imgbx"></div>
          <div className="content">
            <div className="details"></div>
          </div>
        </div>
        <div className="container2">
          <div className="imgbx"></div>
          <div className="content">
            <div className="details"></div>
          </div>
        </div>
        <div className="container3">
          <div className="imgbx"></div>
          <div className="content">
            <div className="details"></div>
          </div>
        </div>
        <div className="container4">
          <div className="imgbx"></div>
          <div className="content">
            <div className="details"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
