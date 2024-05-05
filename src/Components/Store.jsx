import { useState } from "react"
import productsList from "../GoodsData/GoodsData"
import { IconSwitch } from "./IconSwitch";
import { CardsView } from "./CardsView";
import { ListView } from "./ListView";


export const Store = () => {
  const products = productsList;
  const iconMode = ["view_list", "view_module"]
  const [selected, setSelect] = useState(1)
  // console.log(selected)
  // let icon = iconMode[0]
  // const [icon, setIcon] = useState(iconMode[selected])
  // console.log(icon)

  const onSwitch = () => {
    setSelect((selected + 1) % iconMode.length)
  }


  return (
    <>
      <IconSwitch icon={iconMode[selected]} onSwitch={onSwitch}/>
      { selected ? <CardsView cards={products}/> : <ListView items={products}/> }
    </>
  )
}
