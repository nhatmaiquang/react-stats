import React from 'react';
import SearchBar from './SearchBar';
import lol, { KEY } from '../apis/lol';


class App extends React.Component {
  onTermSubmit = async term => {
    let data = await lol.get('/by-name/' + term + '?api_key=' + KEY);
    console.log(data);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}


export default App;
