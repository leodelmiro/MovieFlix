import React from 'react';
import { useForm } from 'react-hook-form';
import ButtonIcon from '../../../core/components/ButtonIcon';
import AuthCard from '../Card';
import {ReactComponent as ShowPassword} from '../../../core/assets/images/show-password.svg'
import './styles.scss';

type FormState = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();

    const onSubmit = () => {

    }

    return (
            <AuthCard title="Login">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="margin-bottom-30">
                        <input
                            name="username"
                            type="email" 
                            className={`form-control input-base ${errors.username ? 'is-invalid': ''}`}
                            placeholder="Email"
                            ref={register({
                                required: "Campo obrigatório",
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                                }
                            })}
                        />
                    </div>                        
                     <div className="password-container">
                        <input
                            name="password"
                            type="password" 
                            className={`form-control input-base ${errors.password ? 'is-invalid': ''}`}
                            placeholder="Senha"
                            ref={register({required: "Campo obrigatório"})}  
                            />
                        <ShowPassword className="password-image" data-testid="show-password"/>
                     </div>
                    <ButtonIcon title="Logar"/>
                </form>
            </AuthCard>
    );
};

export default Login;