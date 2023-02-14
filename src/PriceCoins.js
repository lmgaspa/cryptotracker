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
  const [ltcPreviousPrLce, setLtcPreviousPrice] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const btcResponse = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
      );
      const btcData = await btcResponse.json();
      const btcNewPrice = parseFloat(btcData.price).toFixed(2);
      const btcPriceString = btcNewPrice.toString();
      const btcFormattedPrice = btcPriceString.length > 6 ? btcPriceString.slice(0, btcPriceString.length - 6) + "," + btcPriceString.slice(btcPriceString.length - 6) : btcPriceString;
      setBtcPreviousPrice(btcPrice);
      setBtcPrice(btcFormattedPrice);

      const ethResponse = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'
      );
      const ethData = await ethResponse.json();
      const ethNewPrice = parseFloat(ethData.price).toFixed(2);
      const ethPriceString = ethNewPrice.toString();
      const ethFormattedPrice = ethPriceString.length > 6 ? ethPriceString.slice(0, ethPriceString.length - 6) + "," + ethPriceString.slice(ethPriceString.length - 6) : ethPriceString;
      setEthPreviousPrice(ethPrice);
      setEthPrice(ethFormattedPrice);

      const bnbResponse = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT'
      );
      const bnbData = await bnbResponse.json();
      const bnbNewPrice = parseFloat(bnbData.price).toFixed(2);;
      setBnbPreviousPrice(bnbPrice);
      setBnbPrice(bnbNewPrice);
      const xrpResponse = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT'
      );
      const xrpData = await xrpResponse.json();
      const xrpNewPrice = parseFloat(xrpData.price).toFixed(2);
      setXrpPreviousPrice(xrpPrice);
      setXrpPrice(xrpNewPrice);

      const adaResponse = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT'
      );
      const adaData = await adaResponse.json();
      const adaNewPrice = parseFloat(adaData.price).toFixed(2);
      setAdaPreviousPrice(adaPrice);
      setAdaPrice(adaNewPrice);
      const ltcResponse = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT'
      );
      const ltcData = await ltcResponse.json();
      const ltcNewPrice = parseFloat(ltcData.price).toFixed(2);
      setLtcPreviousPrice(ltcPrice);
      setLtcPrice(ltcNewPrice);
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
        ltcPrice
      }}
    >
      {children}
    </CoinsPriceContext.Provider>
  );
}
