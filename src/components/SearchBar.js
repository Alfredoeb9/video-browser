import React from 'react';
import logo from '../logo.png';

class SearchBar extends React.Component {
  state= {
    term: ''
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // Call prop every time a user submits the form
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <img src={logo} alt="youtube logo" className='search-logo' />
        <form onSubmit={this.onFormSubmit} className="ui  form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;