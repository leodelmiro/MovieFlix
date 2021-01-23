import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './core/assets/custom.scss';
import './app.scss';
import Routes from './Routes';

const App = () => {
  return (
    <>
      <Routes />
      <ToastContainer 
        position="bottom-left"
      />
    </>
  );
}


export default App;
