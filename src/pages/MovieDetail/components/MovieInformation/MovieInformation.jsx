import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MovieInformation = ({ movieInfo }) => {
  return (
    <div>
      <Row>
        <Col>
          <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${movieInfo.poster_path}`}
            alt='movie poster'
          />
        </Col>
        <Col>
          <h1>제목: {movieInfo.title}</h1>
          <p>설명: {movieInfo.tagline}</p>
          <p>
            평점: {movieInfo.vote_average} 인기순: {movieInfo.vote_count}
          </p>
          <p>요약: {movieInfo.overview}</p>
          <div>
            <p>예산: {movieInfo.budget}</p>
            <p>수익: {movieInfo.revenue}</p>
            <p>개봉일: {movieInfo.release_date}</p>
            <p>런타임: {movieInfo.runtime}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieInformation;
