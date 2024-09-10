import React from 'react';
import { responsive } from '../../../../constants/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { Alert } from 'react-bootstrap';
import { useTopRatedMoviesQuery } from '../../../../hooks/useMovies';

const TopRatedMovieSlider = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  // console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title='Top Rated Movies'
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlider;
