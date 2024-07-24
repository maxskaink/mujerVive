import { Alert } from './Alert';
import PropTypes from 'prop-types';
import "../styles/ListAlerts.css";

export const ListAlerts = ({alerts}) => {
    return(
    <section className='alerts'>
        {/* <h2>Alertas: </h2> */}
        <ul className='alerts-list'>
            {alerts.map((alert, index) => 
                <li key={index}>
                    <Alert alert={alert}></Alert>
                </li>        
        )}
        </ul>
    </section>
    );
}

ListAlerts.propTypes = {
    alerts: PropTypes.array.isRequired
};