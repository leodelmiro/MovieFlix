import './styles.scss';
import {ReactComponent as Image} from '../../core/assets/images/detail.svg'
import Comment from './Comment'
import { useForm } from 'react-hook-form';

type FormState = {
    comment: string,    
}

const MovieDetails = () => {
    const { register, handleSubmit, errors, setValue, control } = useForm<FormState>();

    return (
        <div className="movie-details-container">
            <div className="movie-details-content">
                <div className="movie-info-container card-base">
                    <Image/>
                    <div className="movie-info-texts">
                        <h1 className="movie-info-title">O Retorno do Rei</h1>
                        <h2 className="movie-info-release">2013</h2>
                        <h3 className="movie-info-subtitle">O Olho do inimigo está se movendo</h3>
                        <div className="movie-info-description-container">
                            <p className="movie-info-description">
                                O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. 
                                Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, 
                                o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. 
                                Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. 
                                Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="comments-container card-base">
                    <textarea 
                        name="comment" 
                        id=""
                        className="comment-form"
                        placeholder="Deixe sua avaliação aqui"  
                        cols={30} 
                        rows={10}
                        ref={register({required: "Campo obrigatório"})}
                    />
                   <div className="btn-save-container">
                       <button type="button" className="btn btn-save">Salvar Avaliação</button>
                   </div>
                </div>
                <div className="movie-comments-container card-base">
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;