import axios from 'axios';

// TMDB API Configuration
const API_KEY = '8d5b8f6f8c8f7a3b2c1d9e4f5a6b7c8d'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  params: {
    api_key: API_KEY,
  },
});

// ============= MOVIE FETCHING =============

/**
 * Fetch trending movies
 * @param {string} timeWindow - 'day' or 'week'
 * @returns {Array} Array of trending movies
 */
export const fetchTrendingMovies = async (timeWindow = 'week') => {
  try {
    const response = await apiClient.get(`/trending/movie/${timeWindow}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    // Return mock data if API fails
    return getMockMovies();
  }
};

/**
 * Fetch popular movies
 * @param {number} page - Page number
 * @returns {Array} Array of popular movies
 */
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/popular', {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return getMockMovies();
  }
};

/**
 * Fetch top rated movies
 * @param {number} page - Page number
 * @returns {Array} Array of top rated movies
 */
export const fetchTopRatedMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/top_rated', {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return getMockMovies();
  }
};

/**
 * Fetch upcoming movies
 * @param {number} page - Page number
 * @returns {Array} Array of upcoming movies
 */
export const fetchUpcomingMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/upcoming', {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return getMockMovies();
  }
};

/**
 * Fetch now playing movies
 * @param {number} page - Page number
 * @returns {Array} Array of now playing movies
 */
export const fetchNowPlayingMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/now_playing', {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return getMockMovies();
  }
};

// ============= SEARCH =============

/**
 * Search for movies
 * @param {string} query - Search query
 * @param {number} page - Page number
 * @returns {Array} Array of search results
 */
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await apiClient.get('/search/movie', {
      params: { query, page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

// ============= MOVIE DETAILS =============

/**
 * Fetch movie details
 * @param {number} movieId - Movie ID
 * @returns {Object} Movie details
 */
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

/**
 * Fetch movie credits (cast and crew)
 * @param {number} movieId - Movie ID
 * @returns {Object} Credits data
 */
export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return { cast: [], crew: [] };
  }
};

/**
 * Fetch similar movies
 * @param {number} movieId - Movie ID
 * @returns {Array} Array of similar movies
 */
export const fetchSimilarMovies = async (movieId) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}/similar`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching similar movies:', error);
    return [];
  }
};

// ============= IMAGE HELPERS =============

/**
 * Get full image URL
 * @param {string} path - Image path from API
 * @param {string} size - Image size (w500, w780, original, etc.)
 * @returns {string} Full image URL
 */
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

/**
 * Get poster URL
 * @param {string} path - Poster path
 * @returns {string} Full poster URL
 */
export const getPosterUrl = (path) => getImageUrl(path, 'w500');

/**
 * Get backdrop URL
 * @param {string} path - Backdrop path
 * @returns {string} Full backdrop URL
 */
export const getBackdropUrl = (path) => getImageUrl(path, 'w1280');

// ============= MOCK DATA (Fallback) =============

/**
 * Get mock movies for when API is unavailable
 * @returns {Array} Mock movie data
 */
const getMockMovies = () => {
  return [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
      vote_average: 8.7,
      vote_count: 23000,
      release_date: '1994-09-23',
      original_language: 'en',
      popularity: 89.5,
      adult: false,
    },
    {
      id: 2,
      title: 'The Godfather',
      overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
      vote_average: 8.7,
      vote_count: 17000,
      release_date: '1972-03-14',
      original_language: 'en',
      popularity: 95.2,
      adult: false,
    },
    {
      id: 3,
      title: 'The Dark Knight',
      overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      backdrop_path: '/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
      vote_average: 8.5,
      vote_count: 29000,
      release_date: '2008-07-16',
      original_language: 'en',
      popularity: 112.8,
      adult: false,
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      overview: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
      poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
      vote_average: 8.5,
      vote_count: 25000,
      release_date: '1994-09-10',
      original_language: 'en',
      popularity: 87.3,
      adult: false,
    },
    {
      id: 5,
      title: 'Forrest Gump',
      overview: 'The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.',
      poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
      backdrop_path: '/7c9UVPPiTPltouxRVY6N9udhUFN.jpg',
      vote_average: 8.5,
      vote_count: 24000,
      release_date: '1994-06-23',
      original_language: 'en',
      popularity: 78.9,
      adult: false,
    },
    {
      id: 6,
      title: 'Inception',
      overview: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
      poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
      vote_average: 8.4,
      vote_count: 32000,
      release_date: '2010-07-15',
      original_language: 'en',
      popularity: 105.4,
      adult: false,
    },
    {
      id: 7,
      title: 'The Matrix',
      overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      backdrop_path: '/icmmSD4vTTDKOq2vvdulafOGw93.jpg',
      vote_average: 8.2,
      vote_count: 22000,
      release_date: '1999-03-30',
      original_language: 'en',
      popularity: 92.7,
      adult: false,
    },
    {
      id: 8,
      title: 'Interstellar',
      overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.',
      poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      backdrop_path: '/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
      vote_average: 8.3,
      vote_count: 28000,
      release_date: '2014-11-05',
      original_language: 'en',
      popularity: 98.5,
      adult: false,
    },
  ];
};
