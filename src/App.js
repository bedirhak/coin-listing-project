import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Contact from './views/Contact';
import Header from './components/Header';
import './style/normilize.css';
import {useEffect, useState} from 'react';
import { MyContext } from "./store/MyContext";
import Coin from "./views/Coin";

const App = () => {
  const [coinList, setCoinList] = useState([
      {
        name: 'Bedirhank',
        rank: '1',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
        transaction: {
          buy: 'buy'
        }
      },
      {
        name: 'Avax',
        rank: '12',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Kino',
        rank: '14',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Etherium',
        rank: '51',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Binance',
        rank: '16',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Tether',
        rank: '3',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Solano',
        rank: '155',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Tron',
        rank: '11',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Cardano',
        rank: '10',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Shiba',
        rank: '23',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Bitcoin',
        rank: '1',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Trex',
        rank: '12',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Kino',
        rank: '14',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Etherium',
        rank: '51',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Binance',
        rank: '16',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Tether',
        rank: '3',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Solano',
        rank: '155',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Tron',
        rank: '11',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Cardano',
        rank: '10',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Shiba',
        rank: '23',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Bitcoin',
        rank: '1',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Avax',
        rank: '12',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Kino',
        rank: '14',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Etherium',
        rank: '51',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Binance',
        rank: '16',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Tether',
        rank: '3',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Solano',
        rank: '155',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Tron',
        rank: '11',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Cardano',
        rank: '10',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Shiba',
        rank: '23',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Bitcoin',
        rank: '1',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Avax',
        rank: '12',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Kino',
        rank: '14',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Etherium',
        rank: '51',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Binance',
        rank: '16',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Tether',
        rank: '3',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Solano',
        rank: '155',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Tron',
        rank: '11',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
      {
        name: 'Cardano',
        rank: '10',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: true,
      },
      {
        name: 'Shiba',
        rank: '23',
        publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
        increase: false,
      },
]);

// coinList.filter(() => {

// });

const [topSliderData, setTopSliderData] = useState([{
  name: 'Bedirhank',
  rank: '1',
  publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
  increase: true,
},
{
  name: 'Avax',
  rank: '12',
  publicKey: '0xFbB2cf26fe2ba5193B4a54A644E2D727aaB56F72',
  increase: false,
}]);

// useEffect(() => {
//   fetch().than(() => {
//     setTopSliderData([]);
//   })
// }, []);




  return (
    <MyContext.Provider value={{coinList, topSliderData}} >
      <div className='main-container'>
        <Header />
        <Routes>
          <Route path='*' element={<HomePage/>} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/coin' element={<Coin/>} />
        </Routes>
      </div>
    </MyContext.Provider>
  )
}

export default App;