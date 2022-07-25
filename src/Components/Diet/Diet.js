import React from 'react'
import './diet.css'

export default function Diet() {
  let styleh = {
    fontFamily: 'Kaushan Script',
    fontWeight: 'lighter',
    fontSize: '60px',
    textDecoration: 'underline',
    textUnderlineOffset: '5px'
  }
  let stylep = {
    fontFamily: 'Merienda',
    fontWeight: 'lighter',
    fontSize: '26px',
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
      </div>
    </div>
  )
}
