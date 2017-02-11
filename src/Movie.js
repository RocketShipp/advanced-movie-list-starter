import React from 'react';

const Movie = props => {
  function rocketFavText(id) {
    // Toggle the text of RocketFave section if that movie is a savedMovie or not
    const savedMovieIdArr = (props.savedMovies.map(savedMovie => {
      return savedMovie.id;
    }));
    if (savedMovieIdArr.indexOf(id) >= 0) {
      return 'Remove RocketFave';
    } else {
      return 'Add to RocketFaves';
    }
  }
  function checkLength() {
    // If there are movies in the App.js movie state, then map over them
    if (props.movies.length) {
      return (
        props.movies.map((movieResult) => {
          return (
            <div
              key={movieResult.id}
              className="col-xs-12 col-sm-6 col-lg-3 movieColumn animated fadeInUp"
            >
              <div className="movieColumnContents flexBoxCenterThis">
                <div id="movieTitle" className="flexBoxCenterThis">
                  <h3>{movieResult.original_title}</h3>
                </div>
                <div id="posterContainer" className="flexBoxCenterThis">
                  <img
                    className="posterImg animated fadeIn"
                    onError={(event) => props.onError(event)}
                    alt={movieResult.title}
                    src={`https://image.tmdb.org/t/p/w154/${movieResult.poster_path}`}
                  />
                </div>
                <div id="movieInfo">
                  <p><strong>Overview:</strong></p>
                  <p>{movieResult.overview}</p>
                  <hr />
                  <p><strong><u>Released:</u></strong> {movieResult.release_date}</p>
                  <p><strong><u>Vote Average:</u></strong> {movieResult.vote_average}</p>
                  <p><strong><u>Vote Count:</u></strong> {movieResult.vote_count}</p>
                </div>
                <div id="saveMovie">
                  <button
                    className="fa fa-rocket"
                    aria-hidden="false"
                    onClick={(event) => props.rocketFaveHandle(event, movieResult.id)}
                  />
                  <a
                    id="hiddenSaveText"
                    href="#"
                    className="animated flipInX"
                    onClick={(event) => props.rocketFaveHandle(event, movieResult.id)}>
                    {rocketFavText(movieResult.id)}
                  </a>
                </div>
              </div>
            </div>
          );
        })
      )} else {
      // If there are no movies in the movie state, return this placeholder div
      return (
        <div className="col-xs-12 flexBoxCenterThis noMovies animated fadeIn">
          <h1>Hmm...</h1>
          <p>Nothing to see here</p>
        </div>
      );
    }
  }
  return (
    <div className="row columnsContainer">
      {checkLength()}
    </div>
  );
};
Movie.propTypes = {
  movies: React.PropTypes.array.isRequired,
  savedMovies: React.PropTypes.array.isRequired,
  onError: React.PropTypes.func.isRequired,
  rocketFaveHandle: React.PropTypes.func.isRequired
};
export default Movie;
