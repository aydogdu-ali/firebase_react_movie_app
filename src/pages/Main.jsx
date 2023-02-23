import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContextProvider";
import { toastWarnNotify } from "../helpers/ToastNotifty";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const { currentUser } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // api'den veri çekme fonksiyonu
  const getMovies = (url) => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));          
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  // arama fonksiyonu ve koşulları belirttim.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
      } else if (!currentUser) {
        toastWarnNotify("detayları görmek için giriş yapınız");
      //   // alert("detayları görmek için giriş yapınız");
      } else {
        toastWarnNotify("Lütfen filmin adını yazınız");
      //   // alert("Lütfen filmin adını yazınız");
    }
  };

  return (
    <>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md outline-none border p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button className="dark:text-white" type="submit">
          Search
        </button>
      </form>

      <div className="flex justify-center flex-wrap">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
