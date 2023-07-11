import _ from 'lodash';
import SWApi, { Planets, IPlanet } from './swapi';
import { TourInfo } from './types';

export const getPlanets = (): Promise<void | any> => {
  return Planets.find()
    .then((planets) => {
      console.log(planets);
      return planets;
    })
    .catch((err) => console.error(err));
};

export const getTourInfo = (newPlanet?: string): Promise<any> => {
  return Planets.find((planet) => planet.name === newPlanet)
  .then((planets) => planets.populateAll('residents'))
  .then((planets) => planets.populateAll('residents.starships'))
  .then((planets) =>
    _.map(planets.resources, (planet) => ({
      name: planet.value.name,
      population: planet.value.population,
      climate: planet.value.climate,
      terrain: planet.value.terrain,
      residents: _.map(planet.value.residents as SWApi.IPeople[], (resident) => ({
        name: resident.name,
        starships: _.map(resident.starships as SWApi.IStarship[], (starship) => ({
          name: starship.name,
          model: starship.model,
          starship_class: starship.starship_class,
          passengers: starship.passengers,
        }))
      })),

    }))
  )
  .then((planets) => planets[0])
  .catch((err) => {
    console.error(err);
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