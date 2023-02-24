import React, { createContext, useState, useEffect } from 'react';

export const CoinsPriceContext = createContext({});

export function CoinsPriceProvider({ children }) {
  const [btcPrice, setBtcPrice] = useState(0);
  const [btcPreviousPrice, setBtcPreviousPrice] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);
  const [ethPreviousPrice, setEthPreviousPrice] = useState(0);
  const [bnbPrice, setBnbPrice] = useState(0);
  const [bnbPreviousPrice, setBnbPreviousPrice] = useState(0);
  const [xrpPrice, setXrpPrice] = useState(0);
  const [xrpPreviousPrice, setXrpPreviousPrice] = useState(0);
  const [adaPrice, setAdaPrice] = useState(0);
  const [adaPreviousPrice, setAdaPreviousPrice] = useState(0);
  const [ltcPrice, setLtcPrice] = useState(0);
  const [ltcPreviousPrice, setLtcPreviousPrice] = useState(0);
  const [dogePrice, setDogePrice] = useState(0);
  const [dogePreviousPrice, setDogePreviousPrice] = useState(0);
  const [dotPrice, setDotPrice] = useState(0);
  const [dotPreviousPrice, setDotPreviousPrice] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(async () => {
  
      const [btcResponse, ethResponse, bnbResponse, xrpResponse, adaResponse, ltcResponse, dogeResponse, dotResponse] = await Promise.all([
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT'),
      ]);
  
      const [btcData, ethData, bnbData, xrpData, adaData, ltcData, dogeData, dotData] = await Promise.all([
        btcResponse.json(),
        ethResponse.json(),
        bnbResponse.json(),
        xrpResponse.json(),
        adaResponse.json(),
        ltcResponse.json(),
        dogeResponse.json(),
        dotResponse.json(),
      ]);
  
      const btcNewPrice = parseFloat(btcData.price).toFixed(2);
      const btcPriceString = btcNewPrice.toString();
      const btcFormattedPrice = btcPriceString.length > 6 ? btcPriceString.slice(0, btcPriceString.length - 6) + "," + btcPriceString.slice(btcPriceString.length - 6) : btcPriceString;
  
      const ethNewPrice = parseFloat(ethData.price).toFixed(2);
      const ethPriceString = ethNewPrice.toString();
      const ethFormattedPrice = ethPriceString.length > 6 ? ethPriceString.slice(0, ethPriceString.length - 6) + "," + ethPriceString.slice(ethPriceString.length - 6) : ethPriceString;

      const bnbNewPrice = parseFloat(bnbData.price).toFixed(2);
      const xrpNewPrice = parseFloat(xrpData.price).toFixed(2);
      const adaNewPrice = parseFloat(adaData.price).toFixed(2);
      const ltcNewPrice = parseFloat(ltcData.price).toFixed(2);
      const dogeNewPrice = parseFloat(dogeData.price).toFixed(2);
      const dotNewPrice = parseFloat(dotData.price).toFixed(2);
  
      setBtcPreviousPrice(btcPrice);
      setBtcPrice(btcFormattedPrice);
      
      setEthPreviousPrice(ethPrice);
      setEthPrice(ethFormattedPrice);
      
      setBnbPreviousPrice(bnbPrice);
      setBnbPrice(bnbNewPrice);
      
      setXrpPreviousPrice(xrpPrice);
      setXrpPrice(xrpNewPrice);
      
      setAdaPreviousPrice(adaPrice);
      setAdaPrice(adaNewPrice);
      
      setLtcPreviousPrice(ltcPrice);
      setLtcPrice(ltcNewPrice);

      setDogePreviousPrice(dogePrice);
      setDogePrice(dogeNewPrice);

      setDotPreviousPrice(dotPrice);
      setDotPrice(dotNewPrice);
  
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CoinsPriceContext.Provider
      value={{
        btcPrice,
        ethPrice,
        bnbPrice,
        xrpPrice,
        adaPrice,
        ltcPrice,
        dogePrice,
        dotPrice
      }}
    >
      {children}
    </CoinsPriceContext.Provider>
  );
}
