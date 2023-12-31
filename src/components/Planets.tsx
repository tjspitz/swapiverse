import { useState, useEffect } from 'react';
import { Card, Carousel, ListGroup } from 'react-bootstrap';
import { getPlanets } from '../api';
import { AllPlanets, CustomStyles } from '../types';

function Planets({
  startPlanet,
  handleTravelClick,
  styles,
}: {
  startPlanet: string;
  handleTravelClick: (e: any) => void;
  styles: CustomStyles;
}) {
  const [planets, setPlanets] = useState<AllPlanets>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    getPlanets()
      .then((allPlanets) => setPlanets(allPlanets))
      .catch((err) => console.error(err));
  }, []);

  const handleArrowClick = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1>Choose a planet!</h1>
      <p>Excellent! Please choose a destination...</p>
      <Carousel
        activeIndex={index}
        onSelect={handleArrowClick}
        style={styles.carousel}
        touch={true}
        interval={null}
      >
        {planets
          .filter((planet: any) => planet.planetName !== startPlanet)
          .map((planet: any, i: number) => {
            return (
              <Carousel.Item
                key={planet.planetName + (i + 1)}
                style={styles.carouselItem}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/planetPlaceholder.png"
                    alt={planet.planetName}
                    style={styles.cardImg}
                    onClick={handleTravelClick}
                  />
                  <Card.Body>
                    <Card.Title style={styles.cardTitle}>
                      {planet.planetName}
                    </Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Population: {planet.population}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Climate: {planet.climate}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Terrain: {planet.terrain}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Known residents: {planet.totalResidents}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </>
  );
}

export default Planets;
