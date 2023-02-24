import React, { useContext, useState, useEffect } from 'react';
import { CoinsPriceContext, CoinsPriceProvider } from './PriceCoins.js';
import { PriceChangeContext, PriceChangeProvider } from './PriceChange.js';
import './App.css'
import btc from './images/btc.png'
import eth from './images/eth.png'
import bnb from './images/bnb.png'
import ada from './images/ada.png'
import xrp from './images/xrp.png'
import ltc from './images/ltc.png'

const coinImages = [btc, eth, bnb, ada, xrp, ltc];

const coinNames = ['BTC', 'ETH', 'BNB', 'ADA', 'XRP', 'LTC'];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const CoinsPriceProvider = useContext(CoinsPriceContext);
  const PriceChangeProvider = useContext(PriceChangeContext);
  const currentCoin = coinNames[currentImageIndex];
  const currentCoinPrice = CoinsPriceProvider[currentCoin.toLowerCase() + "Price"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentImageIndex((currentImageIndex + 1) % coinImages.length);
        setIsTextVisible(true);
      }, 1500);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const getPriceChangeColor = priceChange => {
    if (priceChange >= 0) {
      return { color: 'green' };
    } else {
      return { color: 'red' };
    }
  };

  return (
    <section>
      <div className='container'>
        <h1>CRYPTO TRACKER</h1>
      </div>
      <div className='agrupado'>
        <div className='containerleft'>
          <table>
            <tr>
              <th><h1 style={{ textAlign: 'left' }}>Name</h1></th>
              <th><h1 style={{ textAlign: 'right' }}>Price</h1></th>
              <th><h1 style={{ textAlign: 'right' }}>24h%</h1></th>
            </tr>
            <tr>
              <td style={{ width: '30%', verticalAlign: 'middle' }}>
                <img src={btc} alt="BTC" style={{ width: '30px', margin: 0, verticalAlign: 'middle' }} />
                <h1 className='title'>BITCOIN</h1>
                <h1 className='subtitle'>BTC</h1>
              </td>
              <td><h1 style={{ textAlign: 'right' }}>${CoinsPriceProvider.btcPrice}</h1></td>
              <td>
                <h1 style={{ color: PriceChangeProvider.btcPriceChange > 0 ? 'green' : 'red', textAlign: 'right' }}>
                  {PriceChangeProvider.btcPriceChange > 0 ? '+' : ''}{(PriceChangeProvider.btcPriceChange * 1).toFixed(2)}%
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ width: '30%', verticalAlign: 'middle' }}>
                <img src={eth} alt="ETH" style={{ width: '30px', margin: 0, verticalAlign: 'middle' }} />
                <h1 className='title'>ETHEREUM</h1>
                <h1 className='subtitle'>ETH</h1>
              </td>
              <td><h1 style={{ textAlign: 'right' }}>${CoinsPriceProvider.ethPrice}</h1></td>
              <td>
                <h1 style={{ color: PriceChangeProvider.ethPriceChange > 0 ? 'green' : 'red', textAlign: 'right' }}>
                  {PriceChangeProvider.ethPriceChange > 0 ? '+' : ''}{(PriceChangeProvider.ethPriceChange * 1).toFixed(2)}%
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ width: '30%', verticalAlign: 'middle' }}>
                <img src={bnb} alt="BNB" style={{ width: '30px', margin: 0, verticalAlign: 'middle' }} />
                <h1 className='title'>BNB</h1>
                <h1 className='subtitle'>BNB</h1>
              </td>
              <td><h1 style={{ textAlign: 'right' }}>${CoinsPriceProvider.bnbPrice}</h1></td>
              <td>
                <h1 style={{ color: PriceChangeProvider.bnbPriceChange > 0 ? 'green' : 'red', textAlign: 'right' }}>
                  {PriceChangeProvider.bnbPriceChange > 0 ? '+' : ''}{(PriceChangeProvider.bnbPriceChange * 1).toFixed(2)}%
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ width: '30%', verticalAlign: 'middle' }}>
                <img src={xrp} alt="XRP" style={{ width: '30px', margin: 0, verticalAlign: 'middle' }} />
                <h1 className='title'>XRP</h1>
                <h1 className='subtitle'>XRP</h1>
              </td>
              <td><h1 style={{ textAlign: 'right' }}>${CoinsPriceProvider.xrpPrice}</h1></td>
              <td>
                <h1 style={{ color: PriceChangeProvider.xrpPriceChange > 0 ? 'green' : 'red', textAlign: 'right' }}>
                  {PriceChangeProvider.xrpPriceChange > 0 ? '+' : ''}{(PriceChangeProvider.xrpPriceChange * 1).toFixed(2)}%
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ width: '30%', verticalAlign: 'middle' }}>
                <img src={ada} alt="ADA" style={{ width: '30px', margin: 0, verticalAlign: 'middle' }} />
                <h1 className='title'>CARDANO</h1>
                <h1 className='subtitle'>ADA</h1>
              </td>
              <td><h1 style={{ textAlign: 'right' }}>${CoinsPriceProvider.adaPrice}</h1></td>
              <td>
                <h1 style={{ color: PriceChangeProvider.adaPriceChange > 0 ? 'green' : 'red', textAlign: 'right' }}>
                  {PriceChangeProvider.adaPriceChange > 0 ? '+' : ''}{(PriceChangeProvider.adaPriceChange * 1).toFixed(2)}%
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ width: '30%', verticalAlign: 'middle' }}>
                <img src={ltc} alt="LTC" style={{ width: '30px', margin: 0, verticalAlign: 'middle' }} />
                <h1 className='title'>LITECOIN</h1>
                <h1 className='subtitle'>LTC</h1>
              </td>
              <td><h1 style={{ textAlign: 'right' }}>${CoinsPriceProvider.ltcPrice}</h1></td>
              <td>
                <h1 style={{ color: PriceChangeProvider.ltcPriceChange > 0 ? 'green' : 'red', textAlign: 'right' }}>
                  {PriceChangeProvider.ltcPriceChange > 0 ? '+' : ''}{(PriceChangeProvider.ltcPriceChange * 1).toFixed(2)}%
                </h1>
              </td>
            </tr>
            <td></td> <td></td> <td></td>
          </table>
        </div>
        <div className='containerright'>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', visibility: isTextVisible ? 'visible' : 'hidden' }}>
            {currentCoinPrice !== 0 &&
              <><img style={{ width: 150 }} src={coinImages[currentImageIndex]} alt={currentCoin} /><h1 style={{ marginTop: '1rem' }}>
                {currentCoin} $ {currentCoinPrice}
              </h1></>
            }
          </div>
        </div>
        <div className='box'>
          {currentCoinPrice !== 0 &&
            <h1 style={{ marginTop: '1rem', visibility: isTextVisible ? 'visible' : 'hidden' }}>
              {currentCoin} $ {currentCoinPrice}
            </h1>
          }
        </div>
      </div>
    </section>
  );
}

export default () => (
  <CoinsPriceProvider>
    <PriceChangeProvider>
      <App />
    </PriceChangeProvider>
  </CoinsPriceProvider>
);