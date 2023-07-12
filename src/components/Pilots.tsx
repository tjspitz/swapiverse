import { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';

function Pilots({
  info,
  setStarshipPilot,
  showPilots,
  setShowPilots,
  showStarships,
  setShowStarships,
  handleEscapeClick,
}: {
  info: any;
  setStarshipPilot: any;
  showPilots: any;
  setShowPilots: any;
  showStarships: any;
  setShowStarships: any;
  handleEscapeClick: any;
}) {
  const [index, setIndex] = useState(0);

  const handleArrowClick = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handlePilotClick = (e: any) => {
    setStarshipPilot(e.target.alt);
    setShowPilots(!showPilots);
    setShowStarships(!showStarships);
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
      <h1>Choose your pilot!</h1>
      <p>
        We're sorry to see you go! The following residents are available with a
        variety of ships to whisk you away to your next destination...
      </p>
      {!info.length && (
        <>
          <h3>Oh noes!</h3>
          <p>
            You've traveled to a planet devoid of available pilots. No worries,
            though, you can surely find some pilots on Tatooine.
          </p>
          <Button variant="warning" onClick={handleEscapeClick}>
            Take me back to Tatooine
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
        {info.map((pilot: any, i: number) => (
          <Carousel.Item
            key={pilot.pilotName + (i + 1)}
            onClick={handlePilotClick}
            style={styles.carouselItem}
          >
            <img
              className="d-block w-100"
              src="http://localhost:3000/swRebel.png"
              // src="%PUBLIC_URL%/swRebel.png"
              alt={pilot.pilotName}
            />
            <Carousel.Caption style={styles.carouselCaption}>
              <h3>{pilot.pilotName}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Pilots;
