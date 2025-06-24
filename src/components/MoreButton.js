import React from "react";

function MoreButton({ setDisplayedSushiIndex }) {
  return (
    <button onClick={() => setDisplayedSushiIndex((currIndex) => currIndex + 4)}>
      More sushi!
    </button>
  );
}

export default MoreButton;
