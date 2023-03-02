import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home () {
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setLoading(false);
    setMovies(json.data.movies);
  }
  useEffect(() => {
    getMovies();
  }, [])
  
  return (
    <div>
      <h1>Movie App</h1>
      <div>
        {loading  ? (
          <strong>Loading...</strong>
          ) : (<div>
          {movies.map((movie) => (<Movie coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} isGenres={movie.hasOwnProperty("genres")} key={movie.id} />))}
        </div>)}
      </div>    
    </div>
  );
}

export default Home;