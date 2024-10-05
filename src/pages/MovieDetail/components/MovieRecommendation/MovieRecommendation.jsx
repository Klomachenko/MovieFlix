import React from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import { useMovieRecommendationQuery } from '../../../../hooks/useMovieRecommendation';
import './MovieRecommendation.style.css';

const MovieRecommendation = ({ movieId }) => {
  const { data, isLoading, isError, error } =
    useMovieRecommendationQuery(movieId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div className='box'>
      <h2>Recommendated Movies</h2>
      <Row className='movie-list'>
        {data?.results.map((recommendation, index) => (
          <Col key={index}>
            <MovieCard movie={recommendation} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieRecommendation;
