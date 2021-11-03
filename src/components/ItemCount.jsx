import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
    //Variables de estado
    const [count, setCount] = useState(1);
    //Renderizado del componente
    return (
      <div className="item-count">
        <button disabled={count === 1 ? true : false} onClick={()=>setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button disabled={count === stock ? true : false} onClick={()=>setCount(count + 1)}>+</button>
        <div className="coton_count">
                <p>{count}</p>
                <button onClick={() => onAdd(count)}>Agregar</button>
            </div>
      </div>
    )
  }
export default ItemCount


