class SwapiSevice {
  constructor() {
    this.apiBase = 'https://swapi.co/api';
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
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results;
  }

  getPLanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource('/starships/');
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

export default SwapiSevice;
