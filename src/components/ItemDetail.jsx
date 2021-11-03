import React from 'react';
import ItemCount from './ItemCount';
//import "./ItemDetail.scss";

const ItemDetail = ({detail}) => {

    const handleClick=(count) => {
        // alert('La cantidad agregada es ${ counter }')
        alert(`La cantidad agregada es ${ count }`)
     }

  return (
    <>
      <div className="detail-img">
        <figure>
          <img src={detail.pictureUrl} alt="" />
        </figure>
      </div>
      <div className="detail-list">
        <div>
          <h2 className="title">{detail.name}</h2>
          <p>{detail.description}</p>
        </div>
        <div>
          <span className="price">${detail.price}</span>
          <ItemCount stock={detail.stock} onAdd={handleClick} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail
