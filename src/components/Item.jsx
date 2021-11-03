import React from "react";
import ItemCount from './ItemCount';

const Item = ({detail}) => {
    return (
        <div>
            <div>
                <img src={detail.pictureUrl} alt={detail.name} />
            </div>
            <h3> {detail.name} </h3>
            <p> {detail.description} </p>
            <p> {detail.price} </p>
            <ItemCount stock={detail.stock} />

        </div>
    )
}

export default Item