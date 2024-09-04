import React from 'react';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({ movie }) => {
  console.log('moviecard', movie);
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}` +
          ')',
      }}
    >
      <div>
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg='warning'>{id}</Badge>
        ))}
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.popularity}</div>
          <div>{movie.adult ? 'over18' : 'under18'}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
