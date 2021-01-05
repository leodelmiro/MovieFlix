import React from 'react';
import './core/assets/custom.scss';
import './app.scss';
import Navbar from './core/components/Navbar';
import Login from './pages/Auth/Login';

const App = () => {
    return (
      <>
      <Navbar/>
      <Login/>
      </>
    );
}


export default App;
