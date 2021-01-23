import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonIcon from '../../../core/components/ButtonIcon';
import AuthCard from '../Card';
import { ReactComponent as ShowPassword } from '../../../core/assets/images/show-password.svg'
import { useHistory, useLocation } from 'react-router-dom';
import { makeLogin } from '../../../core/utils/request';
import { saveSessionData } from '../../../core/utils/auth';
import './styles.scss';

type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const history = useHistory();
    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: "/movies" } };

    const onSubmit = (data: FormState) => {
        setIsLoading(true)

        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data)
                history.replace(from)
            })
            .catch(() => {
                setHasError(true);
            }).finally(() => {
                setIsLoading(false);
            })
    }

    const showPassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <AuthCard title="Login">
            {hasError && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha inválidos!
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-bottom-30">
                    <input
                        name="username"
                        type="email"
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        ref={register({
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div className="password-container">
                    <div className="password-field">
                        <input
                            name="password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="Senha"
                            ref={register({ required: "Campo obrigatório" })}
                        />
                        <ShowPassword className="password-image" onClick={showPassword} data-testid="show-password" />
                    </div>

                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <ButtonIcon title="Logar" />
            </form>
        </AuthCard>
    );
};

export default Login;