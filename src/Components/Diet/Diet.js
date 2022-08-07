import React from 'react'
import './diet.css'
import whattoeat from "./whattoeat.jpg"
import whentoeat from "./whentoeat.png"
import exercise from "./exercise.jpg"
import dietplan from "./dietplan.jpg"

export default function Diet() {
  let styleh = {
    fontSize: '50px',
    textAlign: 'center',
    color: '#44d43b'
  }
  let stylep = {
    fontSize: '22px',
    paddingLeft: '20px',
    paddingRight: '20px',
    color: '#444',
    lineHeight: '1.6'
  }
  return (
    <>
      <div className='dietcontainer' id='diet'>
        <h1 style={styleh}>Diet</h1>
        <p style={stylep}>Diet is the sum of food consumed by a person or other organism.<br />The word diet often implies the use of specific intake of nutrition for health reasons.</p>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="box">
            <img src={whattoeat} alt="" />
            <h3>What to eat</h3>
            <p>Tells you about what to eat to keep your self health by giving the details about the food items and the sugar level in them.</p>
            <a><button>read more</button></a>
          </div>
          <div className="box">
            <img src={whentoeat} alt="" />
            <h3>When to eat</h3>
            <p>Tells you about at what time you should eat your meals so that you could digest the comsumed food properly.</p>
            <a><button>read more</button></a>
          </div>
          <div className="box">
            <img src={exercise} alt="" />
            <h3>Exercise to do</h3>
            <p>Tells you about the different types of exercises that you should do on daily basis and at what time you should do them to get the best benefits.</p>
            <a><button>read more</button></a>
          </div>
          <div className="box">
            <img src={dietplan} alt="" />
            <h3>Custom Diet Plan</h3>
            <p>You can make your diet plan with this and keep in check the amount of sugar intake in your body and eat what you want to eat.</p>
            <a><button>read more</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
