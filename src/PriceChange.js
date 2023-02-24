import React, { createContext, useState, useEffect } from "react";

const PriceChangeContext = createContext({
  btcPriceChange: 0,
  ethPriceChange: 0,
  bnbPriceChange: 0,
  adaPriceChange: 0,
  xrpPriceChange: 0,
  ltcPriceChange: 0,
  dogePriceChange: 0,
  dotPriceChange: 0,
});

const PriceChangeProvider = ({ children }) => {
  const [btcPriceChange, setBtcPriceChange] = useState(0);
  const [ethPriceChange, setEthPriceChange] = useState(0);
  const [bnbPriceChange, setBnbPriceChange] = useState(0);
  const [adaPriceChange, setAdaPriceChange] = useState(0);
  const [xrpPriceChange, setXrpPriceChange] = useState(0);
  const [ltcPriceChange, setLtcPriceChange] = useState(0);
  const [dogePriceChange, setDogePriceChange] = useState(0);
  const [dotPriceChange, setDotPriceChange] = useState(0);

  useEffect(() => {
    const symbols = ["BTC", "ETH", "BNB", "ADA", "XRP", "LTC", "DOGE", "DOT"];
    const fetchData = async () => {
      const responses = await Promise.all(
        symbols.map((symbol) =>
          fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`).then(
            (response) => response.json()
          )
        )
      );

      setBtcPriceChange(responses[0].priceChangePercent);
      setEthPriceChange(responses[1].priceChangePercent);
      setBnbPriceChange(responses[2].priceChangePercent);
      setAdaPriceChange(responses[3].priceChangePercent);
      setXrpPriceChange(responses[4].priceChangePercent);
      setLtcPriceChange(responses[5].priceChangePercent);
      setDogePriceChange(responses[6].priceChangePercent);
      setDotPriceChange(responses[7].priceChangePercent);
    };
    fetchData();
  }, []);

  return (
    <PriceChangeContext.Provider
      value={{
        btcPriceChange,
        ethPriceChange,
        bnbPriceChange,
        adaPriceChange,
        xrpPriceChange,
        ltcPriceChange,
        dogePriceChange,
        dotPriceChange
      }}
    >
      {children}
    </PriceChangeContext.Provider>
  );
};

export { PriceChangeContext, PriceChangeProvider };
