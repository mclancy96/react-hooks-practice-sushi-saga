import React from "react";

function MoreButton({ setDisplayedSushiIndex, sushi }) {
  const handleClick = () => {
    setDisplayedSushiIndex((currIndex) => {
      if (currIndex + 4 >= sushi.length) {
        return 0;
      }
      return currIndex + 4;
    });
  };
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
