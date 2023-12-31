import axios from 'axios';

const API_KEY = 'a74d577cd193b62ed06f68b282af6a8f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
