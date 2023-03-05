import { useParams } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";

function Detail () {
    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    const getMovie = useCallback ( async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
          ).json();
        console.log(json);
    }, [id]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return <h1>Details</h1>;
}

export default Detail;
