import React, { createContext, useState, useEffect } from "react";

const PriceChangeContext = createContext({
  btcPriceChange: 0,
  ethPriceChange: 0,
  bnbPriceChange: 0,
  adaPriceChange: 0,
  xrpPriceChange: 0,
  ltcPriceChange: 0,
});

const PriceChangeProvider = ({ children }) => {
  const [btcPriceChange, setBtcPriceChange] = useState(0);
  const [ethPriceChange, setEthPriceChange] = useState(0);
  const [bnbPriceChange, setBnbPriceChange] = useState(0);
  const [adaPriceChange, setAdaPriceChange] = useState(0);
  const [xrpPriceChange, setXrpPriceChange] = useState(0);
  const [ltcPriceChange, setLtcPriceChange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchPriceChange = async (symbol) => {
        const URL = `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`;
        const response = await fetch(URL);
        const data = await response.json();
        return data.priceChangePercent;
      };

      setBtcPriceChange(await fetchPriceChange("BTC"));
      setEthPriceChange(await fetchPriceChange("ETH"));
      setBnbPriceChange(await fetchPriceChange("BNB"));
      setAdaPriceChange(await fetchPriceChange("ADA"));
      setXrpPriceChange(await fetchPriceChange("XRP"));
      setLtcPriceChange(await fetchPriceChange("LTC")); 
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
      }}
    >
      {children}
    </PriceChangeContext.Provider>
  );
};

export { PriceChangeContext, PriceChangeProvider };
