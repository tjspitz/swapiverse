import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

function Starships({
  info,
  starshipPilot,
  showStarships,
  setShowStarships,
  showPlanets,
  setShowPlanets,
}: {
  info: any;
  starshipPilot: any;
  showStarships: any;
  setShowStarships: any;
  showPlanets: any;
  setShowPlanets: any;
}) {
  const [index, setIndex] = useState(0);

  const handleArrowClick = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleStarshipClick = () => {
    setShowStarships(!showStarships);
    setShowPlanets(!showPlanets);
  };

  const pilot = info.filter(
    (pilot: any) => pilot.pilotName === starshipPilot
  )[0];

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
              <img
                className="d-block w-100"
                src="http://localhost:3000/logo192.png"
                // src="%PUBLIC_URL%/logo192.png"
                alt={pilot.starships.starshipName}
              />
              <Carousel.Caption style={styles.carouselCaption}>
                <h3>Ship: {ship.starshipName}</h3>
                <p>Model: {ship.model}</p>
                <p>Class: {ship.starshipClass}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Starships;
