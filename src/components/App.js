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
          setDisplayedSushiIndex={setDisplayedSushiIndex}
          setEatenSushiPlates={setEatenSushiPlates}
          budget={budget}
          setBudget={setBudget}
        />
        <Table plates={eatenSushiPlates} budget={budget} />
      </div>
      <div
        style={{ marginTop: "20px" }}
      >
        <WalletButton setBudget={setBudget} />
      </div>
    </div>
  );
}

export default App;
