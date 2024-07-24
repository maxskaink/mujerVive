import { useState } from "react";

import { Header } from "./components/Header.jsx"
import { MapComp } from "./components/Map.jsx"
import { ListAlerts } from "./components/ListAlerts.jsx";
import './styles/App.css'

function App() {
  const alerts = [
    {
      nombre: "Maria",
      ubicacion: [2.443312, -76.606636],
      fecha: "2021-10-10",
      prioridad: "alta"
    },
    {
      nombre: "Juan",
      ubicacion: [2.44143, -76.606712],
      fecha: "2021-10-10",
      prioridad: "alta"
    },
    {
      nombre: "Pedro",
      ubicacion: [2.442543, -76.607636],
      fecha: "2021-10-10",
      prioridad: "alta"
    },
    {
      nombre: "Ana",
      ubicacion: [2.442444, -76.606666],
      fecha: "2021-10-10",
      prioridad: "alta"
    }
  ];
  const [selectedAlert, setSelectedAlert] = useState(null);
  console.log(selectedAlert);
  return (
    <>
      <Header></Header>
      <div className="contenido">
        <MapComp
          alerts={alerts}
          setSelected={setSelectedAlert}
          selected={selectedAlert}
        ></MapComp>
        <ListAlerts
          alerts={alerts}
        />
      </div>
    </>
  )
}

export default App
