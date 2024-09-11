import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { Alert } from 'react-bootstrap';
import { useMovieReviewQuery } from '../../hooks/useMovieReview';

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log('받아온 url 쿼리값', id);

  const {
    data: movieDetail,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery(id);
  console.log(movieDetail);

  const { data: movieReviews } = useMovieReviewQuery(id);
  console.log(movieReviews);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div>
      <h1>제목: {movieDetail.title}</h1>
      <div>
        {movieReviews?.results.map((movieReview, index) => (
          <div>
            <h2>리뷰어 : {movieReview.author}</h2>{' '}
            <h3>리뷰 내용 : {movieReview.content}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
