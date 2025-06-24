import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushi,
  setDisplayedSushiIndex,
  displayedSushiIndex,
  setEatenSushiCount,
}) {
  return (
    <div className="belt">
      {sushi
        .slice(displayedSushiIndex, displayedSushiIndex + 4)
        .map((oneSushi) => (
          <Sushi key={oneSushi.id} sushi={oneSushi} />
        ))}
      <MoreButton
        setDisplayedSushiIndex={setDisplayedSushiIndex}
        setEatenSushiCount={setEatenSushiCount}
      />
    </div>
  );
}

export default SushiContainer;
