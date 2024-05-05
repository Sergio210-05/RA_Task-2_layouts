import React from 'react'

export const ShopCard = ({card}) => {
  // console.log(card)
  const {name, price, color, img} = card;

  return (
    <div className='shop-card' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
      <div className='card-title'>{name.toUpperCase()}</div>
      <div className='card-color'>{color}</div>
      <div className='card-footer'>
        <div className='card-price'>${price}</div>
        <div className='card-button-container'>
          <button className='card-button'>ADD TO CART</button>
        </div>
      </div>

    </div>
  )
}
