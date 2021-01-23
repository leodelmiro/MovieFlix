import React from 'react';
import Login from './Login';
import {ReactComponent as Draw} from '../../core/assets/images/auth-draw.svg';
import './styles.scss';

const Auth = () => {
    return (
        <div className="auth-container">
            <div>
                <h1 className="auth-title">
                    Avalie Filmes
                </h1>
                <h5 className="auth-subtitle">
                    Faça parte do nosso catálogo de divulgação e <br/>
                    aumente a venda dos seus produtos
                </h5>
                <Draw data-testid="auth-draw"/>
            </div>
            <Login/>
        </div>
    );
};

export default Auth;