import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// 홈페이지 /
// 영화 전체보여주는 페이지 (서치) /movies
// 영화 디테일 페이지 /movies/:id
// 추천 영화 /movies/:id/recommendation
// 리뷰 /movies/id/reviews
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/movies'>
            <Route index element={<MoviePage />} />
            <Route path=':id' element={<MovieDetailPage />} />
          </Route>
          {/* <Route path='/movies' element={<MoviePage />} />
          <Route path='/movies/:id' element={<MovieDetailPage />} /> */}
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
