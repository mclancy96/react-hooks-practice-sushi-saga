import React from "react";

function MoreButton({ setDisplayedSushiIndex, setEatenSushiCount }) {
  const handleClick = () => {
    setDisplayedSushiIndex((currIndex) => currIndex + 4);
    setEatenSushiCount((currCount) => currCount + 1);
  };
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
