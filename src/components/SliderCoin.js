import React from 'react';
import '../style/slidercoin.css';

const SliderCoin = ({ name, rank, publicKey, increase }) => {
  return (
    <div className="slider-coin">
      <p>{`#${rank} ${name}`}</p>
    </div>
  );
};

export default SliderCoin;