import { useState } from "react";

const Filters = () => {
  const [filter, serFilter] = useState([]);

  const addFilters = (e) => {};

  return (
    <>
      <div>
        <select name="orden">
          <option value="" hidden>
            Orden
          </option>
          <option value="">A-Z</option>
          <option value="">Z-A</option>
        </select>
        <select name="fecha">
          <option value="" hidden>
            Fecha
          </option>
          <option value="">Reciente</option>
          <option value="">Antiguo</option>
        </select>
      </div>
    </>
  );
};

export default Filters;
