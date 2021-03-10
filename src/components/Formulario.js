import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus gastos aquí</h2>
      <div className="campo">
        <label htmlFor="name">Nombre Gasto</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="cantidad">Cantidad Gasto</label>
        <input
          type="text"
          name="cantidad"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
