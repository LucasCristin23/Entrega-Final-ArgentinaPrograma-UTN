import React from "react";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <header className="header">
            <div className="container">
                <h1>Consumo de Agua</h1>
                <nav>
                    <ul>
                        <NavLink to='/'><li><a href="index.html">Inicio</a></li></NavLink>
                        <NavLink to ='/consejos'><li><a href="#consejos">Consejos</a></li></NavLink>
                        <NavLink to='/calculadora'><li><a href="calculator">Calculadora</a></li></NavLink>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        </>
    )




}

export default Header;