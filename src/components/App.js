import React from 'react';
import SearchBar from './SearchBar';
import MasteriesList from './MasteriesList';
import summoner_v4 from '../apis/summoner_v4';
import champion_mastery_v4 from '../apis/champion_mastery_v4';
//import champion from '../apis/champion';
import { KEY } from '../apis/key';

class App extends React.Component {
  state = { masteries: [] };

  onTermSubmit = async searchedName => {
    const summoner = await summoner_v4.get('/by-name/' + searchedName + '?api_key=' + KEY);
    let mastery = await champion_mastery_v4.get('/champion-masteries/by-summoner/'+ summoner.data.id + '?api_key=' + KEY);

    //let champ = await champion.get('champion.json');
    //console.log(champ.data.data);


    this.setState({ masteries: mastery.data })
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <MasteriesList masteries={this.state.masteries} />
      </div>
    );
  }
}


export default App;
