import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { getTourInfo  } from './api';
// import { TourInfo } from './types';
import Pilots from './components/Pilots';
import Planets from './components/Planets';

const defaultChoices = {
  pilot: false,
  starship: false,
  planet: 'Tatooine',
  traveling: false,
}

const defaultInfo = {
  name: '',
  population: '',
  climate: '',
  terrain: '',
  residents: [
    {
      name: '',
      starships: [
        {
          name: '',
          model: '',
          starship_class: '',
          passengers: '',
        },
      ],
    },
  ],
};

function App() {
  const [tourInfo, setTourInfo] = useState(defaultInfo);
  const [choices, setChoices] = useState(defaultChoices);

  useEffect(() => {
    getTourInfo(choices.planet || 'Tatooine')
      .then((details) => setTourInfo(details))
      .catch((err) => console.error(err));
  }, [choices.traveling]);

  const handlePilotClick = () => {

  };

  const handleTravelClick = () => {

  };

  const { name: planetName, population, climate, terrain } = tourInfo;

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
        <h1>Welcome to {planetName}, travler!</h1>
        <p>
          We hope you enjoy your stay amongst {planetName}'s {population} residents, but if you find the {climate} climate or {terrain} terrain not to your liking, feel free to hire one of our fantastic pilots. They'll whisk you away to your next destination!
        </p>
        <Pilots tourInfo={tourInfo} />
        <Planets />
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
