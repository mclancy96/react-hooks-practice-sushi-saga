import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [displayedSushiIndex, setDisplayedSushiIndex] = useState(0);
  const [eatenSushiPlates, setEatenSushiPlates] = useState([]);
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
      />
      <Table plates={eatenSushiPlates} />
    </div>
  );
}

export default App;
