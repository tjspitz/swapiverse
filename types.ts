import { IPlanet, IStarship } from './src/swapi/SWApi';

export type Planet = Pick<
  IPlanet,
  'name' | 'population' | 'climate' | 'terrain'
> & { residents: string[] };

export type Starships = Pick<
  IStarship,
  'name' | 'model' | 'starship_class' | 'crew'
>;
