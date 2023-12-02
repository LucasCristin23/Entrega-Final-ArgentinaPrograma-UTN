import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <>
        <h1>Pagina no encontrada</h1>
        <NavLink to='/'>Volver a pagina principal</NavLink>
        </>
    );
};

export default NotFound404;