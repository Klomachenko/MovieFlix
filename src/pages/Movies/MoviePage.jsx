import React from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';

// 경로 두가지
// nav바에서 클릭해서 온 경우 -> popularMovie 보여주기
// keyword를 입력해서 온 경우 -> keyword와 관련된 영화들을 보여줌

const MoviePage = () => {
  const [query, setQueyry] = useSearchParams();
  const keyword = query.get('q');
  console.log(keyword);

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  console.log('쿼리데이터', data);
  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner
          animation='border'
          variant='danger'
          style={{ width: '5rem', height: '5rem' }}
        />
      </div>
    );
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
