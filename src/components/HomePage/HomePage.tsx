import React from 'react';
import { Header } from '../Header';
import { GameCard } from '../GameCard';
// import { Loader } from '../Loader';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className='home-page'>
      <div className='home-page__container'>

        <Header />
        <GameCard />

      </div>
    </div>
  );
};
