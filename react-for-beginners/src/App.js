import { useState, useEffect } from "react";

function App() {
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
          {movies.map((movie) => (
            <div id={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              { movie.hasOwnProperty("genres") ? (
                movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))
              ) : null}
            </div>
          ))}
        </div>)}
      </div>    
    </div>
  );
}


export default App;
