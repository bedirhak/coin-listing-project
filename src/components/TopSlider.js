import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../store/MyContext';
import '../style/topslider.css';
import {ImFire} from 'react-icons/im';
import SliderCoin from './SliderCoin';


const TopSlider = () => {
  const { coinList } = useContext(MyContext);
  const { topSliderData } = useContext(MyContext);

  return (
    <div className='top-slider'>
        <h2 className='top-slider-heading'>
            <ImFire /> Trending Coins
        </h2>
        <div className='top-slider-container'>

            <div className='top-slider-slide'>
                {topSliderData.map((coin, index) => (
                    <SliderCoin
                    key={index}
                    name={coin.name}
                    rank={coin.rank}
                    publicKey={coin.publicKey}
                    increase={coin.increase}
                    />
                ))}
            </div>
        </div>

        <div className='top-slider-stable'>

        </div>
    </div>
  )
}

export default TopSlider;