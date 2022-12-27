import React from 'react';
import CardImage from './CardImage';

export default function Card(props) {
  return (
    <div className="card">
      <CardImage urlImg={props.urlImg} />
      <div className="card-body">{props.children}</div>
    </div>
  );
}
