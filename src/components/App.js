import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

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
    <div className="app">
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
  );
}

export default App;
