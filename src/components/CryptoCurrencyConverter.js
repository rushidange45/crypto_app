import React, { useState, useEffect } from 'react';
import '../styles/CryptoCurrencyConverter.css'; // Import the CSS file

const CryptoConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('bitcoin');
  const [toCurrency, setToCurrency] = useState('usd');
  const [conversionRate, setConversionRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Fetch the list of supported currencies from the API
    fetch('https://api.coingecko.com/api/v3/coins/list')
      .then(response => response.json())
      .then(data => setCurrencies(data))
      .catch(error => console.error('Error fetching currencies:', error));
  }, []);

  useEffect(() => {
    // Fetch the conversion rate from the API
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`)
      .then(response => response.json())
      .then(data => setConversionRate(data[fromCurrency][toCurrency]))
      .catch(error => console.error('Error fetching conversion rate:', error));
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    // Calculate the converted amount when the conversion rate or amount changes
    if (conversionRate !== null) {
      setConvertedAmount(amount * conversionRate);
    }
  }, [conversionRate, amount]);

  return (
    <div className="crypto-converter-container">
      <h1>Crypto Converter</h1>

      <div className="amount-container">
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="from-currency-container">
      <label htmlFor="fromCurrency" style={{fontSize:"18px", display:'block', textAlign:"left", fontWeight:'400', 
    marginBottom:"4px", marginTop:"3px"}}>From Currency:</label>
      <select
        id="fromCurrency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        style={{fontSize:"18px", width:"80%", padding:"2px"}}
      >
        {currencies.map(currency => (
          <option key={currency.id} value={currency.id}>{currency.id}</option>
        ))}
      </select>

      </div>

      <div className="to-currency-container">
      <label htmlFor="toCurrency"  style={{fontSize:"18px", display:'block', textAlign:"left", fontWeight:'400', 
    marginBottom:"4px", marginTop:"13px"}}>To Currency:</label>
      <select
        id="toCurrency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        style={{fontSize:"18px", width:"80%", padding:"2px"}}

      >
        {currencies.map(currency => (
          <option key={currency.id} value={currency.id}>{currency.id}</option>
        ))}
      </select>
      </div>

      
      <p>Converted Amount: {convertedAmount}</p>
    </div>
  );
};

export default CryptoConverter;
