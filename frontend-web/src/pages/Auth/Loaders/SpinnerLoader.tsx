import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './styles.scss'

const SpinnerLoader = () => {
    return (
        <div className="spinner">
            <Loader
                type="Oval"
                color="#ffc700"
                height={100}
                width={100}
            />
        </div>
    );
};

export default SpinnerLoader;