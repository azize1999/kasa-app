import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';


const NotFound = () => {
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__message'>
        Oups! La page que vous recherchez n'existe pas.
      </p>
      <Link to="/" className='not-found__link'>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
