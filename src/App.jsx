import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";
import { Col, Container } from "react-bootstrap";

let empleados = [
  {
    id: 1,
    fullName: "Laya Dueñas",
    title: "CEO",
    department: "Business",
    pic: "https://img.freepik.com/vector-premium/avatar-perf…protector-pantalla-emociones_505620-617.jpg",
  },
  {
    id: 2,
    fullName: "Astryd Vallés",
    title: "CMO",
    department: "Marketing",
    pic: "https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58480.jpg",
  },
  {
    id: 3,
    fullName: "Shantell Meza",
    title: "CFO",
    department: "Business",
    pic: "https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58477.jpg",
  },
  {
    id: 4,
    fullName: "Sergio Ocampo",
    title: "CTO",
    department: "Engineering",
    pic: "https://img.freepik.com/vector-premium/personaje-a…chicos-aislados-sobre-fondo-blanco_275421-281.jpg",
  },
  {
    id: 5,
    fullName: "Ares Jiménez",
    title: "Art Director",
    department: "Marketing",
    pic: "https://img.freepik.com/vector-premium/personaje-a…chicos-aislados-sobre-fondo-blanco_275421-286.jpg",
  },
  {
    id: 6,
    fullName: "Marta Pérez",
    title: "Frontend Dev",
    department: "Engineering",
    pic: "https://img.freepik.com/vector-premium/retrato-ava…acion-plana-dibujos-animados-vector_551425-22.jpg",
  },
  {
    id: 7,
    fullName: "Ellen Balderas",
    title: "Digital Strategist",
    department: "Marketing",
    pic: "https://img.freepik.com/vector-premium/icono-avata…-circulo-beige-sobre-fondo-blanco_257455-4864.jpg",
  },
  {
    id: 8,
    fullName: "Cynthia Valentín",
    title: "Backend Dev",
    department: "Engineering",
    pic: "https://img.freepik.com/vector-premium/mujer-avata…plano-ilustracion-vectorial-eps-10_505557-917.jpg",
  },
  {
    id: 9,
    fullName: "Bernard Jung",
    title: "DevOps Engineer",
    department: "Engineering",
    pic: "https://img.freepik.com/vector-premium/avatar-pers…rsidad-vector-chico-amigable-plano_87689-2390.jpg",
  },
];

function App() {
  return (
    <>
      <Container className="mainPage mb-4">
        <h1 className="text-center pt-5 display-3">Lista de empleados</h1>
        <div className="d-flex justify-content-center">
          <Col sm={9} md={7} lg={6}>
            <EmpleadoList empleados={empleados} />
          </Col>
        </div>
      </Container>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;