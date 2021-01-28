import Comment from './Comment'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { makePrivateRequest } from '../../../../core/utils/request';
import { Movie } from '../../../../core/types/Movie';
import MovieDetailsLoader from '../Loaders/MovieDetailsLoader';
import { isAllowedByRole } from '../../../../core/utils/auth';
import { toast } from 'react-toastify';
import './styles.scss';

type FormState = {
    text: string,
    movieId: number
}

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    const movieReviewSize = movie ? movie.reviews.length : 0;
    const [review, hasReview] = useState(false);

    
    const getMovieDetails = useCallback(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => setIsLoading(false));
    }, [movieId]);

    useEffect(() => {
        getMovieDetails();
    }, [getMovieDetails])

    useEffect(() => {
        if (movieReviewSize > 0) {
            hasReview(true);
        }
    }, [movieReviewSize])

    const onSubmit = (data: FormState) => {
        data.movieId = parseInt(movieId);

        makePrivateRequest({
            method: 'POST',
            url: '/reviews',
            data
        })
            .then(() => {
                toast.warning('Agradecemos pelo seu comentário!');
                getMovieDetails()
            })
            .catch(() => {
                toast.error('Ocorreu um erro ao realizar o comentário');
            });
    }

    return (
        <div className="movie-details-container">
            <div className="movie-details-content">
                {isLoading ? <MovieDetailsLoader /> : (
                    <div className="movie-info-container card-base">
                        <img src={movie?.imgUrl} alt={movie?.title} />
                        <div className="movie-info-texts">
                            <h1 className="movie-info-title">{movie?.title}</h1>
                            <h2 className="movie-info-release">{movie?.year}</h2>
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
                         {errors.text && (
                                <div className="alert alert-danger">
                                    Campo não pode ser vazio!
                                </div>
                        )}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea
                                name="text"
                                className="comment-form"
                                placeholder="Deixe sua avaliação aqui"
                                cols={30}
                                rows={10}
                                ref={register({ required: "Campo não pode ser vazio!" })}
                            />
                            <div className="btn-save-container">
                                <button className="btn btn-save">Salvar Avaliação</button>
                            </div>
                        </form>                     
                    </div>
                )}
                
                {review ?
                    <div className="movie-comments-container card-base">
                        {isLoading ? <MovieDetailsLoader /> : (
                            movie?.reviews.map(review => (
                                <Comment author={review.user.name} comment={review.text} key={review.id} />
                            ))
                        )}
                    </div> : null
                }
            </div>
        </div>
    );
};

export default MovieDetails;