import React from 'react';
import SearchBar from './SearchBar';
import MasteriesList from './MasteriesList';
import summoner_v4 from '../apis/summoner_v4';
import champion_mastery_v4 from '../apis/champion_mastery_v4';
//import champion from '../apis/champion';
import { KEY } from '../apis/key';

class App extends React.Component {
  state = { masteries: [] };

  onTermSubmit = async term => {
    const summoner = await summoner_v4.get('/by-name/' + term + '?api_key=' + KEY);
    console.log(summoner.data.id);
    let mastery = await champion_mastery_v4.get('/champion-masteries/by-summoner/'+ summoner.data.id + '?api_key=' + KEY);
    /*
let data3 = await champion.get('champion.json');
    console.log(data3);*/
    this.setState({ masteries: mastery.data })
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <MasteriesList />
      </div>
    );
  }
}


export default App;
