

//TIPYCALLY WE MUST USE AN ENV FILE TO ENCRYPT AND HIDE THE API FROM BEING STOLEN.

const API_KEY = "0e9ac782a29cbc64e621a20ba8b48180";


const requests = {


    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  
  
}

export default requests;








//https://www.themoviedb.org/movie/top-rated?api_key=a13ae2f4d58f34c561d9d9a2d18888cc&language=en-us