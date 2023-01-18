import React, { useState } from 'react';
import cn from 'classnames';
import './GameCard.scss';
import cardImage from '../../img/card-image.png';

export const GameCard: React.FC = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card">
        {/* <Link to={`/games/${itemId}`}> */}
        <img
          className="card__img"
          src={cardImage}
          alt="iPhone"
          width="263px"
          height="99px"
        />
        {/* </Link> */}

      <div className="card__description">
        <h2 className="card__title">
          Counter-Strike: Global Offensive
        </h2>

          <span className="card__date">
            21 Aug, 2012
          </span>

          <div className="card__bottom">
            <span className="card__price">
              8,19€
            </span>

            <a
        onClick={() => setFavorite(!favorite)}
              // onClick={addToFavoriteHandler}
              className={cn('card__favorites-icon', {
                'card__favorites-icon--active': favorite,
              })}
            >
            </a>
          </div>
      </div>
    </div>
  );
};
