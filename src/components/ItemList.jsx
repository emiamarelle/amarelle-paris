import Item from './Item'
import {getData} from "./getData";
import Loader from "./loader";
import React, {useState, useEffect} from 'react';


const ItemList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getData
        .then(res => setData(res))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
      }, [])

    //Acá tenmos que recibir las props
    return (
        <div>
            {
        loading 
        ? <Loader />
        : data.map(prod => <Item key={prod.id} detail={prod} />)
      }
        </div>
    )
}

export default ItemList