import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/useMovies';
import { Alert } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log('popular', data);

  const handleMovieClick = (movieId) => {
    console.log('클릭한 영화 아이디', movieId);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title='Popular Movies'
        movies={data.results}
        responsive={responsive}
        handleMovieClick={handleMovieClick}
      />
    </div>
  );
};

export default PopularMovieSlide;
