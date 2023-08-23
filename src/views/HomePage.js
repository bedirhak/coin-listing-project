import { useEffect } from 'react';
import { useContext } from 'react';
import { MyContext } from '../store/MyContext';
import '../style/homepage.css';
import TopSlider from '../components/TopSlider';
import Table from '../components/Table';
import Banner from '../components/Banner';

const HomePage = () => {
  const { coinList } = useContext(MyContext);
  
  const chunkSize = 10;
  const chunkedData = [];

  for (let i = 0; i < coinList.length; i += chunkSize) {
    chunkedData.push(coinList.slice(i, i + chunkSize));
  }

  useEffect(() => {
    console.log(coinList);
  }, []);

  return (
    <>
      <TopSlider/>
      <div className='table-container'>
        {chunkedData.map((chunk, index) => (
          <Table key={index} data={chunk} trendTime='24' />
        ))}
        <Banner/>
      </div>

    </>
  )
}

export default HomePage;