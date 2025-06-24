import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushi,
  setDisplayedSushiIndex,
  displayedSushiIndex,
  setEatenSushiPlates,
}) {
  return (
    <div className="belt">
      {sushi
        .slice(displayedSushiIndex, displayedSushiIndex + 4)
        .map((oneSushi) => (
          <Sushi
            key={oneSushi.id}
            sushi={oneSushi}
            setEatenSushiPlates={setEatenSushiPlates}
          />
        ))}
      <MoreButton setDisplayedSushiIndex={setDisplayedSushiIndex} />
    </div>
  );
}

export default SushiContainer;
