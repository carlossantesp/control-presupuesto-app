import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setShowPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handlePresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setShowPregunta(false);
  };
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handlePresupuesto}
          value={cantidad}
        />
        <input
          type="submit"
          value="Definir Presupuesto"
          className="button-primary u-full-width"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setShowPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
