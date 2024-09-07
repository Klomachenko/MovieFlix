import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMovieSlider from './components/TopRatedMovieSlider/TopRatedMovieSlider';
import UpComingMovieSlider from './components/UpComingMovieSlider/UpComingMovieSlider';

// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주기!
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlider />
      <UpComingMovieSlider />
    </div>
  );
};

export default HomePage;
