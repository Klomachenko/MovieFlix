import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { Alert, Col, Row } from 'react-bootstrap';
import { useMovieReviewQuery } from '../../hooks/useMovieReview';
import { useMovieRecommendationQuery } from '../../hooks/useMovieRecommendation';
import './MovieDetailPage.style.css';
import MovieInformation from './components/MovieInformation/MovieInformation';
import MovieReview from './components/MovieReview/MovieReview';
import MovieRecommendation from './components/MovieRecommendation/MovieRecommendation';

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log('받아온 url 쿼리값', id);

  const {
    data: movieDetail,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery(id);
  console.log('상세정보', movieDetail);

  const { data: movieReviews } = useMovieReviewQuery(id);

  const { data: movieRecommendtaions } = useMovieRecommendationQuery(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div className='main-container'>
      <MovieInformation movieInfo={movieDetail} />
      <MovieReview reviews={movieReviews} />
      <MovieRecommendation recommendations={movieRecommendtaions} />
    </div>
  );
};

export default MovieDetailPage;
