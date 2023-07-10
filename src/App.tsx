import _ from 'lodash';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Planet } from '../types';
import { fetchPlanet,  } from './api';

function App() {
  const [planets, setPlanets] = useState<{} | Planet>({});
  const [starships, setStarships] = useState<[] | string[][]>([]);

  useEffect(() => {
    fetchPlanet()
      .then((planet) => setPlanets(planet || {}))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SWAPI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1>{`Welcome to ${'to-do'}, traveler!`}</h1>
      </Container>

      <footer className="bg-light py-3">
        <Container>
          <p className="text-muted">&copy; 2023 My App</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
