import React from 'react';

const MovieReview = ({ reviews }) => {
  return (
    <div>
      {reviews?.results.map((review, index) => (
        <div>
          <h2>리뷰어 : {review.author}</h2> <p>리뷰 내용 : {review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieReview;
