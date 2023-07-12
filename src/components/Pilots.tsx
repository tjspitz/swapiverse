import { useState } from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import { Residents } from '../types';

function Pilots({
  pilots,
  escapePlanet,
  setStarshipPilot,
  showPilots,
  setShowPilots,
  showStarships,
  setShowStarships,
  handleEscapeClick,
  styles,
}: {
  pilots: Residents;
  escapePlanet: string;
  setStarshipPilot: React.Dispatch<React.SetStateAction<string>>;
  showPilots: boolean;
  setShowPilots: React.Dispatch<React.SetStateAction<boolean>>;
  showStarships: boolean;
  setShowStarships: React.Dispatch<React.SetStateAction<boolean>>;
  handleEscapeClick: () => void;
  styles: any;
}) {
  const [index, setIndex] = useState<number>(0);

  const handleArrowClick = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handlePilotClick = (e: any) => {
    setStarshipPilot(e.target.alt);
    setShowPilots(!showPilots);
    setShowStarships(!showStarships);
  };

  return (
    <>
      <h1>Choose your pilot!</h1>
      <p>
        We're sorry to see you go! The following residents are available with a
        variety of ships to whisk you away to your next destination...
      </p>
      {!pilots.length && (
        <>
          <h3>Oh noes!</h3>
          <p>
            You've traveled to a planet devoid of available pilots. No worries,
            though, you can magically backtrack to {escapePlanet} and try again.
          </p>
          <Button variant="warning" onClick={handleEscapeClick}>
            Take me back to {escapePlanet}...
          </Button>
        </>
      )}
      <Carousel
        activeIndex={index}
        onSelect={handleArrowClick}
        style={styles.carousel}
        touch={true}
        interval={null}
      >
        {pilots.map((pilot: any, i: number) => (
          <Carousel.Item
            key={pilot.pilotName + (i + 1)}
            onClick={handlePilotClick}
            style={styles.carouselItem}
          >
            <Card>
              <Card.Img
                variant="top"
                src="http://localhost:3000/personPlaceholder.png"
                // src="%PUBLIC_URL%/personPlaceholder.png"
                alt={pilot.pilotName}
                style={styles.cardImg}
              />
              <Card.Body>
                <Card.Title style={styles.cardTitle}>
                  {pilot.pilotName}
                </Card.Title>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Pilots;
