import React from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import { useMovieRecommendationQuery } from '../../../../hooks/useMovieRecommendation';

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
    <div>
      <h1>Recommendated Movies</h1>
      <Row>
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
