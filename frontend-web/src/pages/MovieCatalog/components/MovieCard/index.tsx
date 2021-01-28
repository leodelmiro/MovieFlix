import { Movie } from '../../../../core/types/Movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
    return (
        <div className="movie-card-container">
            <div className="card-base movie-card-content">
                <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />
                <div className="movie-card-details">
                    <h1 className="movie-card-title">{movie.title}</h1>
                    <h2 className="movie-card-release">{movie.year}</h2>
                    <p className="movie-card-subtitle">{movie.subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;