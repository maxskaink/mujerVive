import { Map, Marker } from "pigeon-maps"
import "../styles/Map.css"
import PropTypes from 'prop-types';

const print = (info) => console.log(info);

export const MapComp = ({ alerts = [], setSelected = print, selected={}}) => {
    return (
        <section className="mapa">
            {name && <h1>{name}</h1>}
            <Map 
                height={730}
                width={800} 
                defaultCenter={[2.442312, -76.606636]} 
                defaultZoom={15}
                boxClassname="mapaPigeon"    
            >
            {alerts.map((alert, index) =>  
                <Marker 
                    key={index} 
                    width={selected?.nombre === alert.nombre ? 40: 35} 
                    anchor={alert.ubicacion}
                    hover= {true}
                    onClick={() => setSelected(alert)}
                    color= {selected?.nombre === alert.nombre ? "red": "#943D8A"}
                />
            )}
            </Map>

        </section>
    )
}

MapComp.propTypes = {
    alerts: PropTypes.array,
    setSelected: PropTypes.func,
    selected: PropTypes.object
};
