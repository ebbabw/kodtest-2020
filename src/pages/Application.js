import React from 'react'

import data from '../data/data.json'

import '../css/App.css'


export const Application = () => {

  


    return (
    <div>

        {data.map((item) => (
        <section>
        
        <div className="section-wrapper" >

        <div className="banner">
        <div className="banner-title">
        <p>{item.layout}</p>
        </div>
        <img className="img-1"  src={`/assets/${item.promotion_banner}`} alt='maner'/>
        </div>
        
        <div className="product">
        <div className="product-wrapper">
        <img className="img-2" src={`/assets/${item.promotion_image}`} alt='blabar'/>
        </div>
        </div>

        <div className="offer">
        <img className="img-3" src='/assets/splash.svg' alt='offer' />
        <div className="offer-wrapper">
        <p className="offer-title">{item.promotion_unit}</p>
        <p className="offer-title2">{item.promotion_sub_unit}</p>
        <p className="offer-title3">/{item.article_unit_of_measurement}</p>
        </div>
        </div>
        
        <div className="undertext">
        <div className="undertext-wrapper">
        <p className="text-box" id="article-name">{item.article_name}</p>
        <p className="text-box" id="article-name2">{item.article_brand_name} {item.article_origin_country} {item.article_package_info}</p>
        </div>
        </div>
        
        </div>
        </section>

))}


    </div>
  )
}
