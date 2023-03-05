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
        setMovies(json.data.movies);
    }, [id]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (

        <h1>Details of {movies.title}</h1>);
}

export default Detail;
