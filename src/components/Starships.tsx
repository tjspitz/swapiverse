import { useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { CustomStyles } from '../types';

function Starships({
  pilots,
  starshipPilot,
  showStarships,
  setShowStarships,
  showPlanets,
  setShowPlanets,
  styles,
}: {
  pilots: any;
  starshipPilot: string;
  showStarships: boolean;
  setShowStarships: React.Dispatch<React.SetStateAction<boolean>>;
  showPlanets: boolean;
  setShowPlanets: React.Dispatch<React.SetStateAction<boolean>>;
  styles: CustomStyles;
}) {
  const [index, setIndex] = useState<number>(0);

  const handleArrowClick = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleStarshipClick = () => {
    setShowStarships(!showStarships);
    setShowPlanets(!showPlanets);
  };

  const pilot = pilots.filter(
    (pilot: any) => pilot.pilotName === starshipPilot
  )[0];

  return (
    <>
      <h1>Choose your ship!</h1>
      <p>
        Great choice! Which one of {starshipPilot}'s ships would you like to
        travel in?
      </p>
      <Carousel
        activeIndex={index}
        onSelect={handleArrowClick}
        style={styles.carousel}
        touch={true}
        interval={null}
      >
        {pilot.starships.map((ship: any, i: number) => {
          return (
            <Carousel.Item
              key={ship.starshipName + (i + 1)}
              onClick={handleStarshipClick}
              style={styles.carouselItem}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="http://localhost:3000/starshipPlaceholder.png"
                  // src="%PUBLIC_URL%/starshipPlaceholder.png"
                  alt={pilot.starships.starshipName}
                  style={styles.cardImg}
                />
                <Card.Body>
                  <Card.Title style={styles.cardTitle}>
                    {ship.starshipName}
                  </Card.Title>
                  <Card.Text style={{ textAlign: 'center' }}>
                    {ship.model} class {ship.starshipClass}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Starships;
