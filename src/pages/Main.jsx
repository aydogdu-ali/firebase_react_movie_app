import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);

  // api'den veri çekme fonksiyonu
  const getMovies = (url) => {
    axios
      .get(url)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return <div className="flex justify-center flex-wrap">
    
    {movies.map((movie)=>null)}
    
    
    </div>;
};

export default Main;
