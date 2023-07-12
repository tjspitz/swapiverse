import _ from 'lodash';
import SWApi, { Planets } from './swapi';
import { TourInfo } from './types';

export const getPlanets = (): Promise<any> => {
  return Planets.find()
    .then((planets) =>
      _.map(planets.resources, (planet) => ({
        planetName: planet.value.name,
        population: planet.value.population,
        climate: planet.value.climate,
        terrain: planet.value.terrain,
        totalResidents: planet.value.residents.length,
      }))
    )
    .catch((err) => console.error(err));
};

export const getTourInfo = (newPlanet: string): Promise<any> => {
  return Planets.find((planet) => planet.name === newPlanet)
    .then((planets) => planets.populateAll('residents'))
    .then((planets) => planets.populateAll('residents.starships'))
    .then((planets) =>
      _.map(planets.resources, (planet) => ({
        planetName: planet.value.name,
        population: planet.value.population,
        climate: planet.value.climate,
        terrain: planet.value.terrain,
        residents: _.map(
          planet.value.residents as SWApi.IPeople[],
          (resident) => ({
            pilotName: resident.name,
            starships: _.map(
              resident.starships as SWApi.IStarship[],
              (starship) => ({
                starshipName: starship.name,
                model: starship.model,
                starshipClass: starship.starship_class,
                passengers: starship.passengers,
              })
            ),
          })
        ).filter((resident) => resident.starships.length),
      }))
    )
    .then((planets) => planets[0])
    .catch((err) => console.error(err));
};
