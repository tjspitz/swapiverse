import _ from 'lodash';
import SWApi, { Planets, Starships } from './swapi';
import { Planet } from '../types';

export const fetchPlanet = (): Promise<void | Planet> => {
  return Planets.find((planet) => planet.name === 'Tatooine')
  .then((planets) => planets.populateAll('residents'))
  .then((planets) =>
    _.map(planets.resources, (planet) => ({
      name: planet.value.name,
      population: planet.value.population,
      climate: planet.value.climate,
      terrain: planet.value.terrain,
      residents: planet.value.residents,
      // residents: _.map(planet.value.residents as SWApi.IPeople[], 'name'),

    }))
  )
  .then((planets) => planets[0])
  .catch((err) => {
    console.error(err)
  });
};

/* SWApi example

    Vehicles.find((vehicle) => vehicle.pilots.length > 0)
      .then((vehicles) => vehicles.populateAll('pilots'))
      .then((vehicles) => vehicles.populateAll('pilots.homeworld'))
      .then((vehicles) =>
        _.filter(vehicles.resources, (vehicle) =>
          _.every(
            vehicle.value.pilots,
            (pilot) => _.get(pilot, 'homeworld.population') !== 'unknown'
          )
        )
      )
      .then((vehicles) =>
        _.map(vehicles, (vehicle) => ({
          name: vehicle.value.name,
          pilots: _.map(vehicle.value.pilots as SWApi.IPeople[], 'name'),
          population: _.map(vehicle.value.pilots, (pilot) => ({
            name: _.get(pilot, 'homeworld.name'),
            population: _.get(pilot, 'homeworld.population'),
          })),
          get populationSum() {
            return _.sumBy(this.population, (p) => parseInt(p.population));
          },
        }))
      )
      .then((vehicles) =>
        _.reverse(_.sortBy(vehicles, (vehicle) => vehicle.populationSum))
      )
      .then((vehicles) => setVehicles(vehicles))
      .catch((err) => console.error(err));
*/