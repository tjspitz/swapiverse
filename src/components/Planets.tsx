import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { getPlanets } from '../api';

function Planets({
  startPlanet,
  handleTravelClick,
}: {
  startPlanet: any;
  handleTravelClick: any;
}) {
  const [planets, setPlanets] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getPlanets()
      .then((allPlanets) => setPlanets(allPlanets))
      .catch((err) => console.error(err));
  }, []);

  const handleArrowClick = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const styles = {
    carousel: {
      padding: '1rem',
    },
    carouselItem: {
      padding: '2rem',
      background: '#373940',
      borderRadius: '2rem',
    },
    carouselCaption: {
      padding: '0.5rem',
    },
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
              onClick={handleTravelClick}
              style={styles.carouselItem}
            >
              <img
                className="d-block w-100"
                src="http://localhost:3000/logo192.png"
                // src="%PUBLIC_URL%/logo192.png"
                alt={planet.planetName}
              />
              <Carousel.Caption style={styles.carouselCaption}>
                <p>{planet.planetName}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Planets;
