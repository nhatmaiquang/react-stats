import axios from 'axios';

export const KEY = 'RGAPI-bcca3a5c-cc96-42d9-b81e-9972c360a7c7';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/',
});
