import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log('받아온 url 쿼리값', id);

  const { data, isLoading, isError } = useMovieDetailQuery(id);
  console.log(data);

  return <div>MovieDetailPage</div>;
};

export default MovieDetailPage;
