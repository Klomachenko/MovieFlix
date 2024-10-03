import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MovieCard from '../../../../common/MovieCard/MovieCard';

const MovieRecommendation = ({ recommendations }) => {
  return (
    <div>
      <Row>
        {recommendations?.results.map((recommendation, index) => (
          <Col key={index}>
            <MovieCard movie={recommendation} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieRecommendation;
