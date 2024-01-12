import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productList}) => {
  return (
    <div className="container d-flex flex-wrap w-100">
      {productList.map((prod, index)=><Item key={index}prod={prod}/>)}
    </div>

  )
}

export default ItemList
