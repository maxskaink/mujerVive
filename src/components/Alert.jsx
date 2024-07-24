import PropTypes from 'prop-types';
import "../styles/Alert.css";

/* nombre: "Maria",
ubicacion: [2.443312, -76.606636],
fecha: "2021-10-10",
prioridad: "alta"
 */
export const Alert = ({ alert, onClick }) => {
    return (
        <section className='alert' onClick={onClick}>
            <img src="silueta.svg" alt="sielueta mujer" />
            <div className='description'>
                <p>{`Nombre: ${alert.nombre}`}</p>
                <p>{`Coordenadas    : ${alert.ubicacion[0]}, ${alert.ubicacion[1]}`}</p>
                <p>{`Fecha: ${alert.fecha}`}</p>
                <p>{`Prioridad: ${alert.prioridad}`}</p>
            </div>
        </section>
    );
}

Alert.propTypes = {
    alert: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};