import React from 'react'
import '../NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBarContainer">
            <h1 className="NavBarH">Paris</h1>
            <ul className="NavBarLista">
                <li className="NavBarItem">
                    <a href="index.html">Nosotros</a> 
                </li>
                <li className="NavBarItem">
                    <a href="index.html">Productos</a>
                </li>
                <li className="NavBarItem">
                    <a href="index.html">Contacto</a>
                </li>
            </ul>   
        </div>
    )
}

export default NavBar

