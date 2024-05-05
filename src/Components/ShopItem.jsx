import React from 'react'

export const ShopItem = ({item}) => {
  const {name, price, color, img} = item;

  return (
    <div className='shop-item'>
      <img className='item-image' src={img} alt="name"/>
      <div className='item-title'>{name.toUpperCase()}</div>
      <div className='item-color'>{color}</div>
      <div className='item-price'>${price}</div>
      <div className='item-button-container'>
        <button className='item-button'>ADD TO CART</button>
      </div>
  </div>
  )
}
