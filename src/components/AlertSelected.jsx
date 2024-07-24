
import PropTypes from 'prop-types';
import "../styles/AlertSelected.css";


export const AlertSelected = ({alert}) => {
    console.log(alert);
    return(
    <section className='alertSelected'>
        <img src="silueta.svg" alt="sielueta mujer" />
        <div className='description'>
            <p>{`Nombre: ${alert.nombre}`}</p>
            <p>{`Coordenadas    : ${alert.ubicacion[0]}, ${alert.ubicacion[1]}`}</p>
            <p>{`Fecha: ${alert.fecha}`}</p>
            <p>{`Prioridad: ${alert.prioridad}`}</p>
        </div>
    </section>
    )
};

AlertSelected.propTypes = {
    alert: PropTypes.object
};