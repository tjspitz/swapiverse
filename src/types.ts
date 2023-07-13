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

export type CustomStyles = {
  readonly carousel: { readonly [index: string]: string; };
  readonly carouselItem: { readonly [index: string]: string; };
  readonly cardImg: { readonly [index: string]: string; };
  readonly cardTitle: { readonly [index: string]: string; };
  readonly cardText: { readonly [index: string]: string; };
};
