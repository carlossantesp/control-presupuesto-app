import React, { useState } from "react";
import Pregunta from "./components/Pregunta";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} />
        </div>
      </header>
    </div>
  );
}

export default App;
