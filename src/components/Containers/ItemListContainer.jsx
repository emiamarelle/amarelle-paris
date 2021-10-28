import ItemCount from '../ItemCount';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList';


const ItemListContainer = (props) => {
    const [users, setUsers] = useState([])
    console.log(users)

    const getUser = async() => {
        const data = await fetch ("https://jsonplaceholder.typicode.com/users")
        const dataUsers = await data.json()
        setUsers(dataUsers)
        }

    useEffect(() => {
        setTimeout (()=> getUser(), 2000)

    }
    , [])
    
    const handleClick=(counter) => {
        
        alert(`La cantidad agregada es ${ counter }`)
     }

    return (
        <div className="contenedorDivBotonCount">
          <h1>{props.greeting}</h1>
          <ItemCount initial={1} stock={5} onAdd={handleClick} />
            <ItemList users={ users }/>
        </div>
    )
}
;
export default ItemListContainer