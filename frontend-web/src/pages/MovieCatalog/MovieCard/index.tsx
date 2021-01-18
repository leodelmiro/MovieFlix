import {ReactComponent as FilmImage} from '../../../core/assets/images/film.svg';
import './styles.scss';

type Props = {
    title: String;
    release: number;
    description: String;
}

const MovieCard = ({title, release, description}: Props) => {

    return (
        <div className="movie-card-container">
            <div className="card-base movie-card-content">
                <div className="movie-card-image">
                    <FilmImage/>
                </div>
                <div className="movie-card-details">
                    <h1 className="movie-card-title">{title}</h1>
                    <h2 className="movie-card-release">{release}</h2>
                    <p className="movie-card-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;