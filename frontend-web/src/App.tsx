import React from 'react';
import './core/assets/custom.scss';
import './app.scss';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';

const App = () => {
    return (
      <>
      <Navbar/>
      <Auth/>
      </>
    );
}


export default App;
