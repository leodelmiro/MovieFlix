import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from '../../utils/auth';
import './styles.scss'

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="row bg-primary main-nav">
            <div className="col">
                <Link to="/movies" className="main-nav-text">
                    <h4>MovieFlix</h4>
                </Link>
            </div>
            <div className="col-auto justify-content-end">
                    {currentUser && (
                        <div className="btn-logout d-flex">
                            <a
                                href="#logout"
                                className="nav-link d-inline"
                                onClick={handleLogout}
                            >
                                SAIR
                            </a>
                        </div>
                    )}
                </div>
           
        </nav>
    )
};

export default Navbar;