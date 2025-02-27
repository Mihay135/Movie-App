/*

This application uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.

*/

//Constant for options to use for the fetch function
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI1M2QzMGU2MDU4YWE2ZmU3NDMyMzMyNmIwMzQ1YiIsIm5iZiI6MTc0MDYxMTQ4MC4yMTQwMDAyLCJzdWIiOiI2N2JmOWY5ODEwZTc5YzM0MjRhMjM5MWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uvX8BlkHVaI_9A9uAk9g4qoiVQfvM0bqA3Zb0ox2qDU'
    }
  };


// Links to use to fetch wanted data. 
// For other types see the documentation for developers at https://developer.themoviedb.org/docs/getting-started 
// Or also https://developer.themoviedb.org/reference/configuration-details

const APILINK = 'https://api.themoviedb.org/3/discover/movie?page='+ page_number +'&sort_by=popularity.desc';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query='+ search_query;
const IMG_PATH = 'https://api.themoviedb.org/3/movie/'+ movie_id +'/images';


