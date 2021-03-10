import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Error from "./Error";

const Formulario = ({ setGasto, setCreateGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    setGasto(gasto);
    setCreateGasto(true);
    setNombre("");
    setCantidad(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
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

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCreateGasto: PropTypes.func.isRequired,
};

export default Formulario;
