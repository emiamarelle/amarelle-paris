import Item from './Item'

const ItemList = (props) => {
    console.log("Soy las props del ITEMlIST", props)
    
    //Acá tenmos que recibir las props
    return (
        <div>
            <h3> Soy el Item List </h3>
            <Item id={ id } username={ username } />

        </div>
    )
}

export default ItemList