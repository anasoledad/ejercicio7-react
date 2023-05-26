import React from 'react';
import { ListGroup } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({ empleado }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex p-0 px-md-3 py-md-1">
        <EmpleadoAvatar avatar={empleado.pic} />
        <div className="ms-1 ms-md-4 pt-4">
          <h4>{empleado.fullName}</h4>
          <p>{empleado.title}<span className="badge bg-primary rounded-pill ms-1 ms-md-4">{empleado.department}</span>
          </p>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default EmpleadoRow;
