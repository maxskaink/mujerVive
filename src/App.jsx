import { useState } from "react";

import { Header } from "./components/Header.jsx"
import { MapComp } from "./components/Map.jsx"
import { ListAlerts } from "./components/ListAlerts.jsx";
import { AlertSelected } from "./components/AlertSelected.jsx";
import './styles/App.css'

function App() {
  const alerts = [
    {
      nombre: "Maria",
      ubicacion: [2.443312, -76.606636],
      fecha: "2021-10-10",
      prioridad: "alta",
      apelldio: "Perez",
      cedula:1234567890,
      fechaNacimiento: "1990-10-10",
      barrio: "La Paz",
      telefono: 3131234567,
      estadoCivil: "soltera",
      numeroHijos: 0
    },
    {
      nombre: "Mariana",
      ubicacion: [2.44143, -76.606712],
      fecha: "2021-10-10",
      prioridad: "alta",
      apelldio: "Gonzales",
      cedula: 2987654321,
      fechaNacimiento: "1985-06-11",
      barrio: "Pomona",
      telefono: 3131238677,
      estadoCivil: "Viuda",
      numeroHijos: 3
    },
    {
      nombre: "Diana",
      ubicacion: [2.442543, -76.607636],
      fecha: "2021-10-10",
      prioridad: "media",
      apelldio: "Muelas",
      cedula: 6926402745,
      fechaNacimiento: "2000-11-21",
      barrio: "Simon Bolivar",
      telefono: 3131234567,
      estadoCivil: "casada",
      numeroHijos: 1
    },
    {
      nombre: "Ana",
      ubicacion: [2.442444, -76.606666],
      fecha: "2021-10-10",
      prioridad: "alta",
      apelldio: "Perez",
      cedula:1234567890,
      fechaNacimiento: "1990-10-10",
      barrio: "La Paz",
      telefono: 3131234567,
      estadoCivil: "soltera",
      numeroHijos: 0
    }
  ];
  const [selectedAlert, setSelectedAlert] = useState(null);
  return (
    <>
      <Header></Header>
      <div className="contenido">
        <MapComp
          alerts={alerts}
          setSelected={setSelectedAlert}
          selected={selectedAlert}
        ></MapComp>
          {selectedAlert &&
            <AlertSelected
              alert={selectedAlert}
            />
          }
        <ListAlerts
          alerts={alerts}
          setSelected={setSelectedAlert}
        />
      </div>
    </>
  )
}

export default App
