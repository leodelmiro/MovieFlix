import './styles.scss';
import { ReactComponent as Image } from '../../../../core/assets/images/detail.svg'
import Comment from './Comment'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../../../core/utils/request';
import { Movie, Review } from '../../../../core/types/Movie';
import MovieDetailsLoader from '../Loaders/MovieDetailsLoader';
import { isAllowedByRole } from '../../../../core/utils/auth';

type FormState = {
    comment: string,
}

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { register, handleSubmit, errors, setValue, control } = useForm<FormState>();
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    const movieReviewSize = movie ? movie.reviews.length : 0;
    const [review, hasReview] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => setIsLoading(false));
    }, [movieId]);

    useEffect(() => {
        if (movieReviewSize > 0) {
            hasReview(true);
        }
    }, [movieReviewSize])

    return (
        <div className="movie-details-container">
            <div className="movie-details-content">
                {isLoading ? <MovieDetailsLoader /> : (
                    <div className="movie-info-container card-base">
                        <img src={movie?.imgUrl} alt={movie?.title} />
                        <div className="movie-info-texts">
                            <h1 className="movie-info-title">{movie?.title}</h1>
                            <h2 className="movie-info-release">{movie?.release}</h2>
                            <h3 className="movie-info-subtitle">{movie?.subTitle}</h3>
                            <div className="movie-info-description-container">
                                <p className="movie-info-description">
                                    {movie?.synopsis}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {isAllowedByRole(['ROLE_MEMBER']) && (
                    <div className="comments-container card-base">
                        <textarea
                            name="comment"
                            id=""
                            className="comment-form"
                            placeholder="Deixe sua avaliação aqui"
                            cols={30}
                            rows={10}
                            ref={register({ required: "Campo obrigatório" })}
                        />
                        <div className="btn-save-container">
                            <button type="button" className="btn btn-save">Salvar Avaliação</button>
                        </div>
                    </div>
                )}
                {review ?
                    <div className="movie-comments-container card-base">
                        {isLoading ? <MovieDetailsLoader /> : (
                            movie?.reviews.map(review => (
                                <Comment author="Maria da Silva" comment={review.text} key={review.id} />
                            ))
                        )}
                    </div> : null
                }
            </div>
        </div>
    );
};

export default MovieDetails;