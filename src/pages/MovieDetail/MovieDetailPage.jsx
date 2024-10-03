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

  return (
    <div className='main-container'>
      <MovieInformation movieId={id} />
      <MovieReview movieId={id} />
      <MovieRecommendation movieId={id} />
    </div>
  );
};

export default MovieDetailPage;
