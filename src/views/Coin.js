import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../style/coin.css';

const Coin = () => {
  const location = useLocation();

  return (
    <div className='coin-name'>
        {location.state && location.state.coinData.name}
    </div>
  )
}

export default Coin;