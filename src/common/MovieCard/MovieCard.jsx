import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { FaUser } from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';
import { MdNoAdultContent } from 'react-icons/md';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({ movie, handleMovieClick }) => {
  // console.log(movie.id);
  // console.log('moviecard', movie);
  const { data: genreData } = useMovieGenreQuery();
  // console.log('ggg', genreData);

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}` +
          ')',
      }}
      className='movie-card'
      onClick={() => handleMovieClick(movie.id)}
    >
      <div className='overlay'>
        <div className='overlay-title'>
          <h1>{movie.title}</h1>
        </div>
        <div className='overlay-content'>
          <div className='overlay-badge'>
            {showGenre(movie.genre_ids).map((id) => (
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
