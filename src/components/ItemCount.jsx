import { useState } from 'react';
import ImgResta from '../Img/ImgResta.png';
import ImgSuma from '../Img/ImgSuma.png';
import './ItemCount.css';


const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);
        const aumentarContador = () => counter >= 1 ? setCounter(counter + 1) : console.log(`No puede ser mayor a ${stock}`);
        const disminuirContador = () => counter < stock ? setCounter(counter - 1) : console.log('No puede ser menor a 1');

    return(

        <div className="divBotonCount">

            <button onClick={disminuirContador} className="buttonCount">
                <img src={ImgResta} alt="Icono de resta" className="imgCount"/>
            </button>

            <div className="coton_count">
                <p>{counter}</p>
                <button>Agregar</button>
            </div>

            <button onClick={aumentarContador} className="buttonCount">
                <img src={ImgSuma} alt="Icono de suma" className="imgCount" />
            </button>

        </div>
    )
}

export default ItemCount