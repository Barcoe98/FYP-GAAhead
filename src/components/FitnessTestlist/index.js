import React from "react";
import Movie from "../movieCard/";

const MovieList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies">{movieCards}</div>;
};

export default MovieList;