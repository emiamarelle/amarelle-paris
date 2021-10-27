import ItemCount from '../ItemCount';



const ItemListContainer = (props) => {
    
    const handleClick=(counter) => {
        // alert('La cantidad agregada es ${ counter }')
        alert(`La cantidad agregada es ${ counter }`)
     }

    return (
        <div className="contenedorDivBotonCount">
          <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={handleClick} />
        </div>
    )
}
;
export default ItemListContainer