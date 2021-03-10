import React, { useState } from "react";

const Formulario = () => {
  return (
    <form>
      <h2>Agrega tus gastos aquí</h2>
      <div className="campo">
        <label htmlFor="gasto">Nombre Gasto</label>
        <input
          type="text"
          name="gasto"
          className="u-full-width"
          placeholder="Ej. Transporte"
        />
      </div>
      <div className="campo">
        <label htmlFor="cantidad">Cantidad Gasto</label>
        <input
          type="text"
          name="cantidad"
          className="u-full-width"
          placeholder="Ej. 300"
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
