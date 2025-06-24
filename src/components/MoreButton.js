import React from "react";

function MoreButton({ setDisplayedSushiIndex }) {
  const handleClick = () => {
    setDisplayedSushiIndex((currIndex) => currIndex + 4);
  };
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
