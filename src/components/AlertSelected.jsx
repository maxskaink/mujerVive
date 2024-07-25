
import PropTypes from 'prop-types';
import "../styles/AlertSelected.css";

export const AlertSelected = ({alert}) => {
    console.log(alert);
    return(
    <section className='alertSelected'>
        <img src="silueta.svg" alt="sielueta mujer" />
        <div className='description'>
            <p>{`Fecha: ${alert.fecha}`}</p>
            <p>{`Prioridad: ${alert.prioridad}`}</p>
            <p>{`Nombre: ${alert.nombre}`}</p>
            <p>{`Apellido: ${alert.apellido}`}</p>
            <p>{`Cedula: ${alert.cedula}`}</p>
            <p>{`Barrio: ${alert.barrio}`}</p>
            <p>{`Coordenadas    : ${alert.ubicacion[0]}, ${alert.ubicacion[1]}`}</p>
            <p>{`Fecha de nacimiento: ${alert.fechaNacimiento}`}</p>
            <p>{`Telefono: ${alert.telefono}`}</p>
            <p>{`Estado civil: ${alert.estadoCivil}`}</p>
            <p>{`Numero de hijos: ${alert.numeroHijos}`}</p>

        </div>
    </section>
    )
};

AlertSelected.propTypes = {
    alert: PropTypes.object
};