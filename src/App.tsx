import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { getTourInfo } from './api';
import { TourInfo } from './types';
import Welcome from './components/Welcome';
import Pilots from './components/Pilots';
import Starships from './components/Starships';
import Planets from './components/Planets';

const defaultInfo: TourInfo = {
  planetName: '',
  population: '',
  climate: '',
  terrain: '',
  residents: [
    {
      pilotName: '',
      starships: [
        {
          starshipName: '',
          model: '',
          starshipClass: '',
          passengers: '',
        },
      ],
    },
  ],
};

const styles = {
  carousel: {
    padding: '1rem',
  },
  carouselItem: {
    padding: '2rem',
    background: '#373940',
    borderRadius: '2rem',
    textAlign: 'left',
  },
  cardImg: {
    padding: '1rem',
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardText: {
    textAlign: 'left',
  },
};

function App() {
  const [tourInfo, setTourInfo] = useState<TourInfo>(defaultInfo);
  const [planet, setPlanet] = useState<string>('Tatooine');
  const [escapePlanet, setEscapePlanet] = useState<string>(planet);
  const [starshipPilot, setStarshipPilot] = useState<string>('');
  const [showPilots, setShowPilots] = useState<boolean>(false);
  const [showStarships, setShowStarships] = useState<boolean>(false);
  const [showPlanets, setShowPlanets] = useState<boolean>(false);
  const [traveling, setTraveling] = useState<boolean>(false);

  useEffect(() => {
    getTourInfo(planet)
      .then((details) => setTourInfo(details))
      .catch((err) => console.error(err));
  }, [traveling, planet]);

  const handleTravelClick = (e: any) => {
    setEscapePlanet(planet);
    setPlanet(e.target.alt);
    setShowPlanets(!showPlanets);
    setTraveling(!traveling);
  };

  const handleEscapeClick = () => {
    setPlanet(escapePlanet);
    setShowPilots(false);
    setShowStarships(false);
    setShowPlanets(false);
    setTraveling(!traveling);
  };

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
      <Container >
        {!showPilots && !showStarships && !showPlanets && (
          <Welcome
            tourInfo={tourInfo}
            planet={planet}
            showPilots={showPilots}
            setShowPilots={setShowPilots}
          />
        )}
        {showPilots && (
          <Pilots
            pilots={tourInfo.residents}
            escapePlanet={escapePlanet}
            setStarshipPilot={setStarshipPilot}
            showPilots={showPilots}
            setShowPilots={setShowPilots}
            showStarships={showStarships}
            setShowStarships={setShowStarships}
            handleEscapeClick={handleEscapeClick}
            styles={styles}
          />
        )}
        {showStarships && (
          <Starships
            pilots={tourInfo.residents}
            starshipPilot={starshipPilot}
            showStarships={showStarships}
            setShowStarships={setShowStarships}
            showPlanets={showPlanets}
            setShowPlanets={setShowPlanets}
            styles={styles}
          />
        )}
        {showPlanets && (
          <Planets
            startPlanet={planet}
            handleTravelClick={handleTravelClick}
            styles={styles}
          />
        )}
      </Container>
      <footer className="bg-light py-3 fixed-bottom">
        <Container>
          <p className="text-muted">
            &copy; 2023 SWAPIverse Travel Agency, LLC.
          </p>
        </Container>
      </footer>
    </>
  );
}

export default App;
