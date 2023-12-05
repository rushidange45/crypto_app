
import React, { useEffect, useState } from 'react';
import CoinCard from './coinCard';
import dummyData from '../assets/dummyData';
const HomePage = () => {
    const [cryptoData, setCryptoData] = useState(dummyData["data"])
    console.log(cryptoData)
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  
    useEffect(() => {
      const fetchCryptoData = async () => {
        try {
          const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
              'X-CMC_PRO_API_KEY': `60667b18-ff5f-42a0-8bbc-c6d923b61a59`,
            },
          });
  
          const data = await response.json();
          setCryptoData(data.data || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchCryptoData();
    }, []);
  
    return (
      <div>
        {cryptoData.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    );
  };
  
  export default HomePage;
  