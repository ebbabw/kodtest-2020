import React from 'react'

import '../css/App.css'


export const Application = () => {

    return (
    <div>


        <section>
        
        <div className="section-wrapper" >

        <div className="banner">
        <div className="banner-title">
        <p>Veckans pris!</p>
        </div>
        <img className="img-1" src='/assets/maner.png' alt='maner'/>
        </div>
        
        <div className="product">
        <div className="product-wrapper">
        <img className="img-2" src='/assets/blabar.png' alt='blabar'/>
        </div>
        </div>

        <div className="offer">
        <img className="img-3" src='/assets/splash.svg' alt='offer' />
        <div className="offer-title">
        <p>29</p>
        </div>
        </div>
        
        
        </div>
        </section>



    </div>
  )
}
