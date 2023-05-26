import React from 'react';
import { ListGroup } from 'react-bootstrap';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = ({ empleados }) => {
  return (
    <div>
      <ListGroup>
        {empleados.map((empleado) => (
          <EmpleadoRow empleado={empleado} key={empleado.id} />
        ))}
      </ListGroup>
    </div>
  );
};

export default EmpleadoList;
