import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { useMovieDetailQuery } from '../../../../hooks/useMovieDetail';
import './MovieInformation.style.css';
import { FaCalendar, FaClock, FaUser } from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaCoins } from 'react-icons/fa';

const MovieInformation = ({ movieId }) => {
  const { data, isLoading, isError, error } = useMovieDetailQuery(movieId);

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

        <div className='icon-box'>
          <div className='overlay-icon'>
            <FaUser />
            {data.vote_average}
          </div>
          <div className='overlay-icon'>
            <FaFireAlt />
            {data.popularity}
          </div>
        </div>

        <div className='overview'>
          <p>{data.overview}</p>
        </div>
        <div className='sub-info'>
          <div className='overlay-icon'>
            <FaMoneyBill />
            {data.budget}$
          </div>
          <div className='overlay-icon'>
            <FaCoins />
            {data.revenue}
          </div>
          <div className='overlay-icon'>
            <FaCalendar />
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
