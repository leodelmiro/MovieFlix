import React from 'react';
import './styles.scss'

type Props = {
    title: string;
    children: React.ReactNode;
    className: string;
}

const AuthCard = ({title, children, className}: Props) => {
    return(
        <div className="card-base auth-card">
            <h1 className="auth-card-title">
                {title}
            </h1>
            {children}
        </div>
    )
}

export default AuthCard;