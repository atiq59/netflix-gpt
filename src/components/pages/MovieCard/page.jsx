import { IMAGE_CDN_URL } from "../../../utils/constant";

const MovieCard = ({poster_path}) => {
    if(!poster_path) return null;
    
    return (
        <div className="w-24 md:w-48 rounded-md overflow-hidden cursor-pointer">
            <img src={`${IMAGE_CDN_URL}${poster_path}`} alt={`Movie poster - ${poster_path}`} />
        </div>
    )
}

export default MovieCard;