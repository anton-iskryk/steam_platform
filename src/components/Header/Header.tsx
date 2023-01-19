import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className='header header__container'>
      <div className="logo__container">
        <a className='logo' href='#'></a>
      </div>

      <form
        action='#'
        method='get'
        name='search'
        className='form'
      >
        <label className='search__label'>
          <input
            type='search'
            name='searchBar'
            className='search__label__bar'
            placeholder='Enter an app name...'
          />
        </label>
      </form>

      <label className="filter">
        <div className="filter-button"></div>

        <input type="checkbox" className="filter-input" id="test"/>

        <ul className='filter-menu'>
          <li>Lower to bigger</li>
          <li>Bigger to lower</li>
        </ul>
      </label>

      <label className="dd">
        <div className="dd__buton">
          <div className="dd__buton-name">
            Price
          </div>

          <div className="dd__buton-arrow"></div>
        </div>

        <input type="checkbox" className="dd__input" id="test"/>

        <ul className='dd__menu'>
            <li>Price</li>
            <li>Publish Date</li>
        </ul>
      </label>

      <div className="side-buttons">
        <button className='search button'>Search</button>
        <button className='like-list button'>Like list</button>
      </div>
    </header>
  );
};

export default Header;
