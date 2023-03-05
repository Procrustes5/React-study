import { useParams } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";

function Detail () {
    const {id} = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovie = useCallback ( async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
          ).json();
          console.log(json);
        setMovies(json.data.movie);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (
    <div>
        {loading ? <strong>Loading...</strong> : (<div><h1>{movies.title}</h1>
        <img src={movies.background_image} />
        <img src={movies.large_cover_image}
        </div>)}
    </div>
    );
}

export default Detail;
