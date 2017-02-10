import React from 'react';

const SearchBar = props => {
  return (
    <div className="row header animated slideInDown">
      <div className="col-xs-12">
        <h1 onClick={() => props.getPopularMovies()}>RocketShippDB</h1>
        <i
          className="fa fa-rocket"
          aria-hidden="false"
          onClick={props.showRocketFavs}
        />
        <br />
        <form onSubmit={(event) => props.handleSubmit(event)}>
          <input
            type="text"
            onChange={(event) => props.onChange(event)}
            className="searchBar" />
          <button type="submit" id="searchSubmit">Search</button>
        </form>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  showRocketFavs: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};
export default SearchBar;