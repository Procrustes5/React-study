import { useParams } from "react-router-dom";

function Detail () {
    const x = useParams();
    console.log(x);
    return <h1>Details</h1>;
}

export default Detail;