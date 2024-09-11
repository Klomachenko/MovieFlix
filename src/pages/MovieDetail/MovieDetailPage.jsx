import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log('받아온 url 쿼리값', id);
  return <div>MovieDetailPage</div>;
};

export default MovieDetailPage;
