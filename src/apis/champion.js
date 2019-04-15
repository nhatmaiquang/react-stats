import axios from 'axios';

export default axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/9.7.1/data/en_US/'
});
