import { IPlanet, IStarship } from './swapi/SWApi';

export type TourInfo =
  Pick< IPlanet, 'population' | 'climate' | 'terrain' > & {
    planetName: string;
    residents: Residents;
  };

  export type Residents =
    Array<{
      pilotName: string;
      starships: Array<
        Pick< IStarship, 'model' | 'passengers' > & {
          starshipName: string;
          starshipClass: string;
        }
      >;
    }>;

export type AllPlanets =
  Array<
    Pick< IPlanet, 'population' | 'climate' | 'terrain' > & {
      planetName: string;
      totalResidents: number;
  }>;
