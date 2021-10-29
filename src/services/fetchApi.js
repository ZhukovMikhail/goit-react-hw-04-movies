import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = `3d673b2d8e40eafc68577fae5a6a1f4b`;
export default async function getTrendingMpvies() {
  const {
    data: { results },
  } = await axios.get(`/trending/all/week?api_key=${API_KEY}`);
  return results;
}
export async function getMoviesByQuery(query) {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return results;
}

export async function getMovieById(id) {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
}
export async function getMovieCredits(id) {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
}
