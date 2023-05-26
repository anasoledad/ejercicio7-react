import React from "react";
import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <div>
     <ListGroup.Item className="d-flex">
        <EmpleadoAvatar></EmpleadoAvatar>
        <div className="ms-3 ms-md-4">
            <h4>Nombre completo</h4>
            <p>Cargo <span class="badge bg-primary rounded-pill ms-md-4">Departamento</span></p>
        </div>
        
     </ListGroup.Item>
    </div>
  );
};

export default EmpleadoRow;
