import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularMoviesPage from "./pages/PopularMoviesPage";
import ActorsContextProvider from "./contexts/actorsContext";
import ActorsPage from "./pages/actorsPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavouriteTvShowsPage from "./pages/favouriteTvShowsPage";
import TvShowPage from "./pages/tvShowDetailsPage";
import TvShowsPage from "./pages/tvShowsPage";
import TvShowReviewPage from "./pages/tvShowReviewPage";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddTvShowReviewPage from './pages/addTvShowReviewPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader /> 
        <ActorsContextProvider>
         <MoviesContextProvider>
         <TvShowsContextProvider>
        <Routes>
          <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
          <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route exact path="/actors/favourites" element={<FavouriteActorsPage />} />
          <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
          <Route path="/actors" element={<ActorsPage />} />
          <Route path="/actors/:id" element={<ActorPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route exact path="/tvshows/favourites" element={<FavouriteTvShowsPage />} />
          <Route path="/tvshows" element={<TvShowsPage />} />
          <Route path="/tvShowReviews/:id" element={ <TvShowReviewPage /> } />
          <Route path="/reviews/tvform" element={<AddTvShowReviewPage/>} />
          <Route path="/tvshows/:id" element={<TvShowPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </TvShowsContextProvider>
         </MoviesContextProvider>
        </ActorsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    );
  };
  
  const rootElement = createRoot( document.getElementById("root") )
  rootElement.render(<App /> );