import React from 'react'
import { ShopCard } from './ShopCard'

export const CardsView = ({cards}) => {

  return (
    <div className='cards'>
      {cards.map((card, index) => {
        return(
          <ShopCard card={card} key={index}/>
        )
      })}
    </div>
  )
}
