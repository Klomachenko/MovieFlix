import React from 'react';
import {
  useTopRatedMoviesQuery,
  useUpComingMoviesQuery,
} from '../../../../hooks/useMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { Alert } from 'react-bootstrap';
import { responsive } from '../../../../constants/responsive';

const UpComingMovieSlider = () => {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();
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
        title='Upcoming Movies'
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpComingMovieSlider;
