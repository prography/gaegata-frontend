import React from 'react';
import { Link } from 'react-router-dom';
import { CardImageWrap, Img } from './styled';

const CardImage = ({ imageUrl, toUrl, animation }: any) => {
  return (
    <div>
      <CardImageWrap>
        {toUrl ? (
          <Link to={toUrl}>
            <Img src={imageUrl} alt="team-img" />
          </Link>
        ) : (
          <Img src={imageUrl} alt="team-img" />
        )}
      </CardImageWrap>
    </div>
  );
};

export default CardImage;
