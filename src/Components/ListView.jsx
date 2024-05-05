import { ShopItem } from "./ShopItem"

export const ListView = ({items}) => {
  return (
    <div className='items'>
      {items.map((item, index) => {
        return(
          <ShopItem item={item} key={index}/>
        )
      })}
    </div>
  )
}
