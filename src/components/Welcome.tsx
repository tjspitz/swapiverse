import { Button } from 'react-bootstrap';
import { TourInfo } from '../types';

function Welcome({
  tourInfo,
  planet,
  showPilots,
  setShowPilots,
}: {
  tourInfo: TourInfo;
  planet: string;
  showPilots: boolean;
  setShowPilots: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { population, climate, terrain } = tourInfo;

  return (
    <>
      <h1>Welcome to {planet}, travler!</h1>
      <img
        className="d-block w-100 my-4"
        src="http://localhost:3000/planetPlaceholder.png"
        // src="%PUBLIC_URL%/planetPlaceholder.png"
        alt={planet}
      />
      <p>
        We hope you enjoy your stay amongst {planet}'s {population} residents,
        but if you find the {climate} climate or {terrain} terrain not to your
        liking, feel free to hire one of our fantastic pilots. They'll whisk you
        away to your next destination!
      </p>
      <Button variant="success" onClick={() => setShowPilots(!showPilots)}>
        I'm ready to travel!
      </Button>
    </>
  );
}

export default Welcome;
