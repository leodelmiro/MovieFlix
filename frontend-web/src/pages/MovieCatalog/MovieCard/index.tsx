import {ReactComponent as FilmImage} from '../../../core/assets/images/film.svg';
import './styles.scss';

const MovieCard = () => {

    return (
        <div className="movie-card-container">
            <div className="card-base movie-card-content">
                <div className="movie-card-image">
                    <FilmImage/>
                </div>
                <div className="movie-card-details">
                    <h1 className="movie-card-title">O Retorno do Rei</h1>
                    <h2 className="movie-card-release">2013</h2>
                    <p className="movie-card-description">O Olho do Inimigo está se movendo</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;