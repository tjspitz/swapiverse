import { IPlanet, IStarship } from './swapi/SWApi';

export type TourInfo =
  Pick< IPlanet, 'name' | 'population' | 'climate' | 'terrain' > & {
    residents: Array<{
      name: string;
      starships: Array< Pick< IStarship, 'name' | 'model' | 'starship_class' | 'passengers' >>;
    }>
  };
