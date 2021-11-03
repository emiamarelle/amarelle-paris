import ItemList from '../ItemList';
import React from 'react';


const ItemListContainer = ({greeting}) => {
    return (
    <div className="item-list-container">
      {greeting}
      <ItemList />
    </div>
    )
}
;
export default ItemListContainer