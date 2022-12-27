import React from 'react';

export default function CardImage({ urlImg }) {
  return (
    <img
      className="card__image"
      src={urlImg}
      alt="image"
      style={{ width: '100%' }}
    ></img>
  );
}
