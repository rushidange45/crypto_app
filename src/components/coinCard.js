import React from 'react';
import Card from '@mui/material/Card';
import "../styles/CoinCard.css"

const imageStyle = {
 width : "40px",
 height : "40px",
 marginTop:"5px"
}
const CoinCard = ({ coin }) => {
    const imageSource = "https://media.istockphoto.com/id/1139020309/vector/bitcoin-internet-money-icon-vector.jpg?s=612x612&w=0&k=20&c=vcRUEDzhndMOctdM7PN1qmipo5rY_aOByWFW0IkW8bs=";
  return (
    <Card className='coinCardContainer'>
      <img src={imageSource} alt='coin logo' className='coincardimage'/>
      <h2>{coin.name}</h2>
      <p>Current Value: {coin.price}</p>
      <p>Net Change (24h): {coin?.quote?.USD?.percent_change_24h}%</p>
      <p>Net Change (7d): {coin?.quote?.USD?.percent_change_7d}%</p>
    </Card>
  );
};

export default CoinCard;