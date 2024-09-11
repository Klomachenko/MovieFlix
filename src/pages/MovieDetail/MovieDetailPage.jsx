import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { Alert, Col, Row } from 'react-bootstrap';
import { useMovieReviewQuery } from '../../hooks/useMovieReview';
import { useMovieRecommendationQuery } from '../../hooks/useMovieRecommendation';
import MovieCard from '../../common/MovieCard/MovieCard';

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
  console.log('리뷰', movieReviews);

  const { data: movieRecommendtaions } = useMovieRecommendationQuery(id);
  console.log('추천영화', movieRecommendtaions);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div>
      <h1>제목: {movieDetail.title}</h1>
      <div>
        {/* {movieReviews?.results.map((movieReview, index) => (
          <div>
            <h2>리뷰어 : {movieReview.author}</h2>{' '}
            <h3>리뷰 내용 : {movieReview.content}</h3>
          </div>
        ))} */}
        <Row>
          {movieRecommendtaions?.results.map((recommendationMovie, index) => (
            <Col key={index}>
              <MovieCard movie={recommendationMovie} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MovieDetailPage;
