import axios from 'axios';

export const KEY = 'RGAPI-8e0d9dff-f73f-4f82-8fdf-0cb6133a36b8';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/',
});
