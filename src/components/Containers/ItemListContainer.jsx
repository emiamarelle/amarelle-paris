import ItemCount from "../ItemCount";

const ItemListContainer = (props) => {
    return (
        <div className="contenedorDivBotonCount">
            <ItemCount initial={1} stock={5} />
        </div>
    )
}

export default ItemListContainer