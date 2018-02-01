import 'whatwg-fetch';

let AirCheapAPI = {
  fetchAirports() {
    return fetch('../../public/airports.json')
    .then((response) => response.json());
  },
}
