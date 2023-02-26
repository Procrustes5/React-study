import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [onInverted, setOnInverted] = useState(false);
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json)
      });
  }, []);
  const reset = () => setAmount(0);
  const onClicked = () => {
    reset();
    setOnInverted((current) => !current);
  }
  const onChange = (event) => {
    setAmount(event.target.value);
  }
  const onSelected = (event) => {
    setNumber(event.target.value);
  }
  
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong >Loading...</strong> : <div>
        <select onChange={onSelected}>
          {coins.map((coin, index) => (
            <option key={coin.id} value={index}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
          ))
          }
        </select>
        <hr />
        <div>
          <input onChange={onChange} value={onInverted ? amount * coins[number].quotes.USD.price: amount} type="number" placeholder="USD" disabled={onInverted === true} />
          <span> USD</span>
        </div>
        <div>
          <input onChange={onChange} value={onInverted ? amount : amount / (coins[number].quotes.USD.price)} type="number" placeholder="BTC" disabled={onInverted === false}/>
          <span> {coins[number].symbol}</span>
        </div>
        <button onClick={onClicked}>Invert</button>
      </div>
      }
      
      
    </div>
  );
}


export default App;
