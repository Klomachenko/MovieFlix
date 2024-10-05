import React from 'react';
import { Alert, Badge, Col, Row } from 'react-bootstrap';
import { useMovieDetailQuery } from '../../../../hooks/useMovieDetail';
import './MovieInformation.style.css';
import { FaCalendar, FaClock, FaUser } from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaCoins } from 'react-icons/fa';

const MovieInformation = ({ movieId }) => {
  const { data, isLoading, isError, error } = useMovieDetailQuery(movieId);
  console.log('영화정보', data.genres);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <Row className='box'>
      <Col>
        <img
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`}
          alt='movie poster'
        />
      </Col>
      <Col className='content'>
        <h1>{data.title}</h1>
        <h4>{data.tagline}</h4>

        <div className='genres'>
          {data?.genres.map((genre, index) => (
            <div>
              <Badge bg='warning'>{genre.name}</Badge>
            </div>
          ))}
        </div>

        <div className='icon-box'>
          <div className='overlay-icon'>
            <FaUser style={{ color: 'rgb(255, 193, 7)' }} />
            {data.vote_average}
          </div>
          <div className='overlay-icon'>
            <FaFireAlt style={{ color: 'red' }} />
            {data.popularity}
          </div>
        </div>

        <div className='overview'>
          <p>{data.overview}</p>
        </div>
        <div className='sub-info'>
          <div className='overlay-icon'>
            <FaMoneyBill style={{ color: 'green' }} />
            {data.budget}$
          </div>
          <div className='overlay-icon'>
            <FaCoins style={{ color: 'gold' }} />
            {data.revenue}
          </div>
          <div className='overlay-icon'>
            <FaCalendar style={{ color: 'rgb(247, 114, 112)' }} />
            {data.release_date}
          </div>
          <div className='overlay-icon'>
            <FaClock />
            {data.runtime}mins
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MovieInformation;
