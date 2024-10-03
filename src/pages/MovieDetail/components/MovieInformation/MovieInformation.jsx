import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useMovieDetailQuery } from '../../../../hooks/useMovieDetail';

const MovieInformation = ({ movieId }) => {
  const { data, isLoading, isError, error } = useMovieDetailQuery(movieId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div>
      <Row>
        <Col>
          <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`}
            alt='movie poster'
          />
        </Col>
        <Col>
          <h1>제목: {data.title}</h1>
          <p>설명: {data.tagline}</p>
          <p>
            평점: {data.vote_average} 인기순: {data.vote_count}
          </p>
          <p>요약: {data.overview}</p>
          <div>
            <p>예산: {data.budget}</p>
            <p>수익: {data.revenue}</p>
            <p>개봉일: {data.release_date}</p>
            <p>런타임: {data.runtime}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieInformation;
