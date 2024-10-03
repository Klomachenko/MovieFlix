import React from 'react';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import { Alert } from 'react-bootstrap';

const MovieReview = ({ movieId }) => {
  const { data, isLoading, isError, error } = useMovieReviewQuery(movieId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      {data?.results.map((review, index) => (
        <div>
          <h2>리뷰어 : {review.author}</h2> <p>리뷰 내용 : {review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieReview;
