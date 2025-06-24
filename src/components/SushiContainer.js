import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushi,
  setDisplayedSushiIndex,
  displayedSushiIndex,
}) {
  return (
    <div className="belt">
      {sushi
        .slice(displayedSushiIndex, displayedSushiIndex + 4)
        .map((oneSushi) => (
          <Sushi sushi={oneSushi} />
        ))}
      <MoreButton
        displayedSushiIndex={displayedSushiIndex}
        setDisplayedSushiIndex={setDisplayedSushiIndex}
      />
    </div>
  );
}

export default SushiContainer;
