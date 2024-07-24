import { Alert } from './Alert';
import PropTypes from 'prop-types';
import "../styles/ListAlerts.css";

export const ListAlerts = ({alerts, setSelected}) => {
    return(
    <section className='alerts'>
        <ul className='alerts-list'>
            {alerts.map((alert, index) => 
                <li key={index}>
                    <Alert 
                        alert={alert}
                        onClick={() => setSelected(alert)} 
                    />
                </li>        
        )}
        </ul>
    </section>
    );
}

ListAlerts.propTypes = {
    alerts: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired
};