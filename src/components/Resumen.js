import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {primeraEnMayuscula} from '../helpers/cotizador';
const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) =>{
    //extraer de datos
    const {marca, year, plan} = datos;
    if(marca === '' || year === '' || plan === '') return null;

    return(
        <ContenedorResumen>
        <h2>Resumen de cotizacion</h2>
        <ul>
            <li>Marca: {primeraEnMayuscula(marca)}</li>
            <li>Plan: {primeraEnMayuscula(plan)}</li>
            <li>Modelo del vehículo: {year}</li>
        </ul>
        </ContenedorResumen>
    )

}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;