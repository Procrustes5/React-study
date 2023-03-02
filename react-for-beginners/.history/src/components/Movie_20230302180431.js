import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie ({id, coverImg, title, summary, genres, isGenres}) {

    return (
        <div>
            <img src={coverImg} />
            <Link to={`/movie/${id}`}>{title}</Link>
            <p>{summary}</p>
            { isGenres ? (
                genres.map((g) => (
                  <li key={g}>{g}</li>
                ))
            ) : null}
        </div>);
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;