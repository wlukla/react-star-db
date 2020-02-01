/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
class SwapiSevice {
  constructor() {
    this.apiBase = 'https://swapi.co/api';

    this._transformPlanetData = this._transformPlanetData.bind(this);
    this._transformPersonData = this._transformPersonData.bind(this);
    this._transformStarshipData = this._transformStarshipData.bind(this);
  }

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved: ${res.status}`);
    }
    return res.json();
  }

  async getAllPeople() {
    const res = await this.getResource('/people/');
    return res.results.map(this._transformPersonData);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPersonData(person);
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanetData);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanetData(planet);
  }

  async getAllStarships() {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarshipData);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarshipData(starship);
  }

  _extractId(item) {
    const idRegEx = /\/([0-9]*)\/$/;
    return item.url.match(idRegEx)[1];
  }

  _transformPlanetData(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarshipData(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      constInCredits: starship.constInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  }

  _transformPersonData(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  }
}

export default SwapiSevice;
