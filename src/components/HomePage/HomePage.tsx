import React from 'react';
import { Header } from '../Header';
import { GameCard } from '../GameCard';
// import { Loader } from '../Loader';
import './HomePage.scss';
import { TransitionGroup } from 'react-transition-group';

export const HomePage: React.FC = () => {
  return (
    <div className='home-page'>
      <div className='home-page__container'>
        <>
          <Header />

          <TransitionGroup className="home-page__all-games">
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
          </TransitionGroup>
        </>
      </div>
    </div>
  );
};
