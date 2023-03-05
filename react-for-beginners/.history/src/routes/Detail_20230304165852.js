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
    <div id="DetailWrap">
        {loading ? <strong>Loading...</strong> : (
            <div id="titleWrap">
                <img id="titleBg" src={movies.background_image} />
                <h1 id="titleText">{movies.title}</h1>
                <div id="detailContainer">
                    <div>
                        <img id="cover" src={movies.medium_cover_image} />
                    </div>
                    <div>
                        <p>{movies.discription_intro}</p>
                    </div>
                    
                </div>
            </div>)}
    </div>
    );
}

export default Detail;
