import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { getTourInfo } from './api';
import { TourInfo } from './types';
import Pilots from './components/Pilots';
import Starships from './components/Starships';
import Planets from './components/Planets';

const defaultInfo: TourInfo = {
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
  const [tourInfo, setTourInfo] = useState<TourInfo>(defaultInfo);
  const [planet, setPlanet] = useState('Tatooine');
  const [starshipPilot, setStarshipPilot] = useState('');
  const [showPilots, setShowPilots] = useState(false);
  const [showStarships, setShowStarships] = useState(false);
  const [showPlanets, setShowPlanets] = useState(false);
  const [traveling, setTraveling] = useState(false);

  useEffect(() => {
    getTourInfo(planet)
      .then((details) => setTourInfo(details))
      .catch((err) => console.error(err));
  }, [traveling, planet]);

  const handleTravelClick = (e: any) => {
    setPlanet(e.target.alt);
    setShowPlanets(!showPlanets);
    setTraveling(!traveling);
  };

  const handleEscapeClick = () => {
    setPlanet('Tatooine');
    setShowPilots(false);
    setShowStarships(false);
    setShowPlanets(false);
    setTraveling(!traveling);
  }

  const { population, climate, terrain } = tourInfo;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Traveling the SWAPIverse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">This is a single-page app...</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {!showPilots && !showStarships && !showPlanets && (
          <>
            <h1>Welcome to {planet}, travler!</h1>
            <p>
              We hope you enjoy your stay amongst {planet}'s {population}{' '}
              residents, but if you find the {climate} climate or {terrain}{' '}
              terrain not to your liking, feel free to hire one of our fantastic
              pilots. They'll whisk you away to your next destination!
            </p>

            <Button
              variant="primary"
              onClick={() => setShowPilots(!showPilots)}
            >
              I'm ready to travel
            </Button>
          </>
        )}

        {showPilots && (
          <Pilots
            info={tourInfo.residents}
            setStarshipPilot={setStarshipPilot}
            showPilots={showPilots}
            setShowPilots={setShowPilots}
            showStarships={showStarships}
            setShowStarships={setShowStarships}
            handleEscapeClick={handleEscapeClick}
          />
        )}

        {showStarships && (
          <Starships
            info={tourInfo.residents}
            starshipPilot={starshipPilot}
            showStarships={showStarships}
            setShowStarships={setShowStarships}
            showPlanets={showPlanets}
            setShowPlanets={setShowPlanets}
          />
        )}

        {showPlanets && (
          <Planets
            startPlanet={planet}
            handleTravelClick={handleTravelClick}
          />
        )}
      </Container>
      <footer className="bg-light py-3">
        <Container>
          <p className="text-muted">&copy; 2023 SWAPIverse Travel Agency, LLC.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
