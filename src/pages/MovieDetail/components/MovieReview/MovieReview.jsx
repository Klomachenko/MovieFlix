import React from 'react';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import { Alert } from 'react-bootstrap';
import './MovieReview.style.css';

const MovieReview = ({ movieId }) => {
  const { data, isLoading, isError, error } = useMovieReviewQuery(movieId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div className='reviews'>
      <h2>Reviews</h2>
      {data?.results.map((review, index) => (
        <div className='review'>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieReview;
