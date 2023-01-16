import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <form
        action='#'
        method='get'
        name='searchBig'
        className='form'
      >
      <label className='search__label'>
        <input
          type='search'
          name='searchBarBig'
          className='search__label__bar big'
          placeholder='Enter an app name...'
          data-qa='keypress'
        />
      </label>
      </form>
    </header>
  );
};

export default Header;