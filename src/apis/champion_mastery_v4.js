import axios from 'axios';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/champion-mastery/v4/'
});
