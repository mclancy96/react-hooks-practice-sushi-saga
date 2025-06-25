import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import WalletButton from "./WalletButton";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [displayedSushiIndex, setDisplayedSushiIndex] = useState(0);
  const [eatenSushiPlates, setEatenSushiPlates] = useState([]);
  const [budget, setBudget] = useState(100);
  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setSushi);
  }, []);

  // Handler functions
  const handleMoreSushi = () => {
    setDisplayedSushiIndex((currIndex) => {
      if (currIndex + 4 >= sushi.length) {
        return 0;
      }
      return currIndex + 4;
    });
  };

  const handleEatSushi = (sushiItem) => {
    if (!sushiItem.isEaten && sushiItem.price <= budget) {
      setEatenSushiPlates((currPlates) => [...currPlates, sushiItem]);
      setBudget((currBudget) => currBudget - sushiItem.price);
      sushiItem.isEaten = true;
    }
  };

  const handleAddBudget = (amount) => {
    setBudget((oldBudget) => +(oldBudget + amount).toFixed(2));
  };

  return (
    <div
      className="app-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div className="app" style={{ width: "100%", maxWidth: "800px" }}>
        <SushiContainer
          sushi={sushi}
          displayedSushiIndex={displayedSushiIndex}
          onMoreSushi={handleMoreSushi}
          onEatSushi={handleEatSushi}
          budget={budget}
        />
        <Table plates={eatenSushiPlates} budget={budget} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <WalletButton onAddBudget={handleAddBudget} />
      </div>
    </div>
  );
}

export default App;
