import './App.css';
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

class App extends React.Component {
  state = { articles: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('http://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        srsearch: term,
        origin: '*',
        format: 'json',
      },
    });

    this.setState({ articles: response.data.query.search });
  };

  render() {
    return (
      <div className="app">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <SearchList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
