import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <p>Search below</p>
        <form onSubmit={this.onFormSubmit}>
          <input
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            type="text"
            className="search"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
