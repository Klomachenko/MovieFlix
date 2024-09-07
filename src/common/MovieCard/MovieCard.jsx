import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { FaUser } from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';
import { MdNoAdultContent } from 'react-icons/md';

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
      className='movie-card'
    >
      <div className='overlay'>
        <div className='overlay-title'>
          <h1>{movie.title}</h1>
        </div>
        <div className='overlay-content'>
          <div className='overlay-badge'>
            {movie.genre_ids.map((id) => (
              <Badge bg='warning'>{id}</Badge>
            ))}
          </div>

          <div className='overlay-info'>
            <div className='overlay-icon'>
              <FaUser />
              {movie.vote_average}
            </div>
            <div className='overlay-icon'>
              <FaFireAlt />
              {movie.popularity}
            </div>
            <div>{movie.adult ? <MdNoAdultContent /> : ''}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
