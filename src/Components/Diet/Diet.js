import React from 'react'
import './diet.css'

export default function Diet() {
  let stylediet = {
    fontFamily: 'Tabitha',
  }
  return (
    <div className='dietcontainer' style={stylediet}>
      <h1>Diet</h1>
      <p>diet is the sum of food consumed by a person or other organism. The word diet often implies the use of specific intake of nutrition for health reasons.</p>
      <div className="subcontainer">
        <div className="container1">
          <h2>What to eat?</h2>
        </div>
        <div className="container2">
          <h3>When to eat?</h3>
        </div>
      </div>
      <div className="container3">
        <h4>Food items and their effect on your body</h4>
      </div>
    </div>
  )
}
